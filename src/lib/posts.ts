import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw'
import rehypeFigure from "@microflash/rehype-figure";
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';


const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export type PostMetadata = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    tags?: string[];
    repoUrl?: string;
};

export type PostData = PostMetadata & {
    content: string;
};

export function getSortedPostsData(): PostMetadata[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            slug: id,
            ...(matterResult.data as { title: string; date: string; excerpt: string; tags?: string[]; repoUrl?: string }),
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use unified with rehype-prism-plus for syntax highlighting
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeFigure)
        .use(rehypePrism, { ignoreMissing: true })
        .use(rehypeStringify)
        .process(matterResult.content);

    const content = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id: slug,
        slug,
        content,
        ...(matterResult.data as { title: string; date: string; excerpt: string; tags?: string[]; repoUrl?: string }),
    };
}

export function getPostsByTag(tag: string): PostMetadata[] {
    const allPosts = getSortedPostsData();
    return allPosts.filter((post) => post.tags?.includes(tag));
}
