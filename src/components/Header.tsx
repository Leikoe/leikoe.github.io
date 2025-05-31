import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-theme-card/90 backdrop-blur-md border-b border-theme-border sticky top-0 z-10">
            <div className="container mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold gradient-text tracking-tight">
                        Léo&apos;s Blog
                    </Link>
                    <nav>
                        <ul className="flex space-x-10">
                            <li>
                                <Link
                                    href="/"
                                    className="text-theme-body hover:text-theme-link transition-colors text-base"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-theme-body hover:text-theme-link transition-colors text-base"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
