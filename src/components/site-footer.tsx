export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-xl italic text-fg">Rudra Priye</p>
          <p className="mt-1 text-sm text-muted">Class XI · Section M1 · PCM</p>
        </div>
        <p className="text-xs text-subtle">
          A personal record of school, the court, and the work in between.
        </p>
      </div>
    </footer>
  );
}
