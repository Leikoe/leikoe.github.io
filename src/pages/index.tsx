import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getSortedPostsData, PostMetadata } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home({ posts }: { posts: PostMetadata[] }) {
    return (
        <>
            <Head>
                <title>Léo&apos;s Blog</title>
                <meta name="description" content="A blog about computer science and programming" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="space-y-16 py-8">
                <section className="py-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight gradient-text inline-block h-[8rem] sm:h-[4rem]">
                        Computer Science Blog
                    </h1>
                    <p className="text-xl text-theme-body max-w-2xl leading-relaxed">
                        Exploring algorithms, data structures, and programming concepts through
                        a lens of simplicity and elegance.
                    </p>
                </section>

                <section className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-normal mb-10">Latest Posts</h2>
                    {posts.length > 0 ? (
                        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-theme-muted">No posts yet. Check back soon!</p>
                    )}
                </section>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getSortedPostsData()
    return {
        props: {
            posts,
        },
    }
}
