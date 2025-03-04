export default function Footer() {
  return (
    <footer className="mt-auto pt-8 border-t border-theme-border">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-xl mx-auto text-center text-theme-muted text-sm">
          <p className="mb-4">© {new Date().getFullYear()} CS Blog. All rights reserved.</p>
          <p>
            A collection of thoughts and ideas about computer science,
            algorithms, and programming.
          </p>
        </div>
      </div>
    </footer>
  );
}