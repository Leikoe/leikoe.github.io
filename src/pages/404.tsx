import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Léo&apos;s Blog</title>
                <meta name="description" content="Page not found on Léo&apos;s Blog" />
            </Head>

            <div className="max-w-2xl mx-auto">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="text-theme-muted hover:text-theme-link transition-colors text-sm flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to home
                    </Link>
                </div>

                <div className="mb-16">
                    <h1 className="text-3xl lg:text-4xl font-normal mb-4 gradient-text inline-block tracking-tight">
                        404 – Page Not Found
                    </h1>
                    <p className="text-theme-body max-w-xl">
                        Oops! The page you’re looking for doesn’t exist.
                    </p>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-normal prose-p:text-theme-body prose-li:text-theme-body prose-a:text-theme-link prose-a:font-normal prose-a:no-underline hover:prose-a:underline prose-strong:text-theme-heading">
                    <p>
                        It looks like nothing was found at this location. You can return to the{' '}
                        <Link href="/">
                            home page
                        </Link>{' '}
                        or explore other sections of the blog.
                    </p>
                </div>
            </div>
        </>
    )
}
