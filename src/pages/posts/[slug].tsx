import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData, PostData } from '@/lib/posts'

export default function Post({ post }: { post: PostData }) {
  return (
    <>
      <Head>
        <title>{post.title} | CS Blog</title>
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