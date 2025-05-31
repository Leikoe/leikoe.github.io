import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getSortedPostsData, getPostsByTag, PostMetadata } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export default function TagPage({
    posts,
    tag
}: {
    posts: PostMetadata[],
    tag: string
}) {
    return (
        <>
            <Head>
                <title>#{tag} | Léo&apos;s Blog</title>
                <meta name="description" content={`Posts tagged with #${tag}`} />
            </Head>

            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="text-theme-muted hover:text-theme-link transition-colors text-sm flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to home
                    </Link>
                </div>

                <div className="mb-16">
                    <h1 className="text-3xl font-normal mb-4 tracking-tight">
                        Posts tagged with <span className="gradient-text">#{tag}</span>
                    </h1>
                    <p className="text-theme-body max-w-lg">
                        A collection of articles related to {tag}.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 border border-theme-border">
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="text-theme-muted">No posts found with this tag.</p>
                )}
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getSortedPostsData()
    const tags = Array.from(new Set(posts.flatMap(post => post.tags || [])))

    const paths = tags.map(tag => ({
        params: { tag }
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const tag = params?.tag as string
    const posts = getPostsByTag(tag)

    return {
        props: {
            posts,
            tag,
        },
    }
}
