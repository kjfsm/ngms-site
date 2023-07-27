import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";
import Box from "@/components/Box";

const dotFont = localFont({
  src: "../../public/fonts/JF-Dot-MPlus12-No-Kanji.woff2",
  display: "swap",
  variable: "--font-dot",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="text-white">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>名古屋ゲームミュージックストリングス</title>
      </head>

      <body className="bg-[url(https://ngmstrings.org/img/back.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="container mx-auto my-2 flex max-w-3xl flex-col gap-y-2">
          <Link href="./">
            <Box className="px-3">
              <h1
                className={`text-3xl font-bold tracking-widest ${dotFont.className}`}
              >
                Nagoya Game Music Strings
              </h1>
            </Box>
          </Link>

          <ul className="flex flex-row gap-x-2 max-md:flex-col max-md:rounded-lg max-md:border-4 max-md:bg-origin-blue/70 max-md:px-2 max-md:py-2">
            {[
              ["トップ", "/"],
              ["NGMSって？", "/about"],
              ["コンサート", "/concert/concert-info"],
              ["どうが", "/contents"],
              ["といあわせ", "/information"],
            ].map(([title, url], index) => {
              return (
                <li key={index} className="flex-1">
                  <Link
                    href={url}
                    className={`font-bold tracking-widest ${dotFont.className}`}
                  >
                    <div
                      className={`md:text-center md:rounded-lg md:border-4 md:bg-origin-blue/70 md:px-2 md:py-2`}
                    >
                      {title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Box>{children}</Box>
          </div>
        </div>
      </body>
    </html>
  );
}
