export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg font-semibold tracking-tight">
          Loop<span className="text-muted-foreground font-normal"> Website Studio</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Loop Website Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}