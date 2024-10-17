import Link from "next/link"

export default function Footer() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
      <footer className="row-start-3 flex gap-12 flex-wrap items-center justify-center">
        {
          ["Legal", "Privacy", "Cookies", "Legal Notice"].map((item) => {
            return (
              <Link
                className="hover:underline hover:highlight"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </Link>
            )
          })
        }
      </footer>
    </div>
  );
}
