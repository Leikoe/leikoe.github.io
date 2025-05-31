export default function Footer() {
    return (
        <footer className="mt-auto pt-8 border-t border-theme-border">
            <div className="container mx-auto px-6 py-10">
                <div className="max-w-xl mx-auto text-center text-theme-muted text-sm">
                    <p className="mb-4">© {new Date().getFullYear()} Léo&apos;s Blog. All rights reserved.</p>
                    <p>
                        A personal diary of my computer science learning journey.
                    </p>
                </div>
            </div>
        </footer>
    );
}
