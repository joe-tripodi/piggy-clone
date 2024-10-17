import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f3f2fa] row-start-3 flex gap-12 flex-wrap items-center justify-center">
      {
        ["Legal", "Privacy", "Cookies", "Legal Notice"].map((item) => {
          return (
            <Link
              key={item}
              className="transition-all ease-out-in duration-100 hover:underline hover:highlight"
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
  );
}
