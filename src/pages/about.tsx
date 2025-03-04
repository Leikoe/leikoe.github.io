import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About | CS Blog</title>
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
            A closer look at the purpose and person behind these words.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-normal prose-p:text-theme-body prose-li:text-theme-body prose-a:text-theme-link prose-a:font-normal prose-a:no-underline hover:prose-a:underline prose-strong:text-theme-heading">
          <p>
            Welcome to my computer science blog! This is a space where I share my thoughts, 
            insights, and explorations in the world of computer science, algorithms, 
            data structures, and software engineering.
          </p>
          
          <h2>What I Write About</h2>
          <p>
            Some of the topics I cover include:
          </p>
          <ul>
            <li>Algorithm design and analysis</li>
            <li>Data structures and their applications</li>
            <li>Programming paradigms and best practices</li>
            <li>Computer science theory and concepts</li>
            <li>Software engineering and architecture</li>
            <li>New technologies and tools in the CS world</li>
          </ul>
          
          <h2>About Me</h2>
          <p>
            I'm a computer science enthusiast with a passion for learning and sharing knowledge. 
            I believe in making complex CS concepts accessible and engaging.
          </p>
          
          <h2>Contact</h2>
          <p>
            Have questions, suggestions, or just want to connect? Feel free to reach out to me at 
            [your email] or find me on [social media platforms].
          </p>
        </div>
      </div>
    </>
  )
}