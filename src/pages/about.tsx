import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <Head>
                <title>About | Léo&apos;s Blog</title>
                <meta name="description" content="About this computer science blog" />
            </Head>

            <div className="max-w-2xl mx-auto">
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
                    <h1 className="text-3xl lg:text-4xl font-normal mb-4 gradient-text inline-block tracking-tight">About This Blog</h1>
                    <p className="text-theme-body max-w-xl">
                        (but mostly about the dude writing the posts..)
                    </p>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-normal prose-p:text-theme-body prose-li:text-theme-body prose-a:text-theme-link prose-a:font-normal prose-a:no-underline hover:prose-a:underline prose-strong:text-theme-heading">
                    <p>
                        Welcome to my personal diary! I have a lot of cool (imo) stuff I worked on
                        and will work on and decided it would be nice to be able to share it and keep a trace of too which is why I created this blog.
                    </p>

                    <h2>What I Write About</h2>
                    <p>
                        Some of my interests are (and topics I will probably cover) include:
                    </p>
                    <ul>
                        <li>Making the computer go fast (algorithms and low level tricks)</li>
                        <li>Accelerator progamming</li>
                        <li>Cool hardware</li>
                        <li>Past works</li>
                    </ul>

                    <h2>About Me</h2>
                    <p>
                        I&apos;m a french computer science student, I like making computers go fast and more generally anything very cool in tech.
                    </p>

                    {/* <h2>Contact</h2>
                    <p>
                        Have questions, suggestions, or just want to connect? Feel free to reach out to me at
                        [your email] or find me on [social media platforms].
                    </p> */}
                </div>
            </div>
        </>
    )
}
