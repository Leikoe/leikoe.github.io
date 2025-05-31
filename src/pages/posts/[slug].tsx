import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData, PostData } from '@/lib/posts'

export default function Post({ post }: { post: PostData }) {
    return (
        <>
            <Head>
                <title>{post.title + " | CS Blog"}</title>
                <meta name="description" content={post.excerpt} />
            </Head>

            <article className="max-w-2xl mx-auto">
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

                <header className="mb-16">
                    <div className="mb-4">
                        <time className="text-sm text-theme-muted">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-normal mb-8 gradient-text inline-block tracking-tight">{post.title}</h1>
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/tags/${tag}`}
                                    className="text-xs bg-theme-tag text-theme-muted px-3 py-1 hover:bg-theme-tagHover transition-colors"
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </div>
                    )}

                    {post.repoUrl && (
                        <div className="flex items-center mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-theme-muted" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <a
                                href={post.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-theme-muted hover:text-theme-link transition-colors"
                            >
                                View Source Code Repository
                            </a>
                        </div>
                    )}
                </header>

                <div
                    className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-normal prose-p:text-theme-body prose-a:text-theme-link prose-a:font-normal prose-a:no-underline hover:prose-a:underline prose-strong:text-theme-heading prose-li:text-theme-body"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostData(params?.slug as string)
    return {
        props: {
            post,
        },
    }
}
