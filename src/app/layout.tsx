import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>名古屋ゲームミュージックストリングス</title>
      </head>

      <body>
        <div id="pagebody" className=" container mx-auto">
          <div
            id="header"
            className="mb-2 mt-2 rounded-lg border-4 bg-origin-blue bg-opacity-70"
          >
            <Link href="./" passHref>
              <h1 className="font-dot">Nagoya Game Music Strings</h1>
            </Link>
          </div>

          <ul className="mb-2 mt-2 flex font-bold">
            {[
              ["トップ", "/"],
              ["NGMSって？", "/about"],
              ["コンサート", "/concert/concert-info"],
              ["どうが", "/contents"],
              ["といあわせ", "/information"],
            ].map(([title, url]) => {
              return (
                <Link
                  key={url}
                  className="block h-10 flex-1 gap-2"
                  href={url}
                  passHref
                >
                  <li className="rounded-lg border-4 bg-origin-blue bg-opacity-70 text-center font-dot">
                    {title}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div>
            <div
              id="content"
              className="flex flex-col gap-2.5 rounded-lg border-4 bg-origin-blue bg-opacity-70"
            >
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
