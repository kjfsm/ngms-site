import Box from "@/components/Box";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const dotFont = localFont({
  src: "../../public/fonts/JF-Dot-MPlus12-No-Kanji.woff2",
  display: "swap",
  variable: "--font-dot",
});

// すべてのページで共通するレイアウトです。
// children には各ページのコンテンツが入ります。
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
                className={`text-2xl font-bold tracking-widest md:text-3xl ${dotFont.className}`}
              >
                Nagoya Game Music Strings
              </h1>
            </Box>
          </Link>

          <ul className="flex flex-col rounded-lg border-4 bg-origin-blue/70 px-2 py-2 md:flex-row md:gap-x-2 md:border-none md:bg-transparent md:p-0">
            {/* 画面幅がmd以上のとき、md:～ が有効になります */}
            {/* 画面幅が狭いときはメニューの項目を縦に表示し、広いときは横に表示する */}
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
                      className={`md:rounded-lg md:border-4 md:bg-origin-blue/70 md:px-2 md:py-2 md:text-center`}
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
