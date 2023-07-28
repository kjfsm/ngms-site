import Contents from "@/components/Contents";
import Image from "next/image";
import Link from "next/link";
import leaflet9Small from "/public/concert/9th/9th_leaflet_w620.jpg";

export default function Page() {
  return (
    <Contents title="お知らせ">
      <h3 className="text-4xl">第9回演奏会</h3>
      <div className="flex flex-col gap-2 md:flex-row">
        <Link passHref href="concert/9th/9th_leaflet_w1240.jpg">
          <Image src={leaflet9Small} width={440} alt="第9回チラシ" />
        </Link>
        <div className="grow">
          <div className="flex flex-col gap-2">
            <div>
              <h4>演奏会情報</h4>
              <p>日時： 2023年10月29日（日）</p>
              <p>開場： 13:15 開演： 14:00</p>
              <p>
                会場：東海市芸術劇場 大ホール (愛知県東海市大田町下浜田137番地)
              </p>
            </div>
            <div>
              <h4>曲目</h4>
              <p>LIVE A LIVE</p>
              <p>ファイアーエムブレム風花雪月</p>
              <p>パワプロクンポケット13</p>
              <p>原神</p>
              <p>ポケットモンスター オメガルビー・アルファサファイア</p>
              <p>いけにえと雪のセツナ</p>
            </div>
            <div>
              <h4>アクセス</h4>
              <p>名鉄太田川駅から徒歩 0 分。</p>
              <p>
                詳しくは
                <Link href="https://www.tokai-arts.jp/access/">
                  東海市芸術劇場公式サイト
                </Link>
                をご覧ください。
              </p>
              {/* <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10524.578170202569!2d136.88561300580838!3d35.01903077857469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14b06c0579552e33!2z5p2x5rW35biC6Iq46KGT5YqH5aC0!5e0!3m2!1sja!2sjp!4v1506452286188"
                  allowFullScreen
                  className="h-96 w-full"
                />
              </p> */}
            </div>
            <p>
              ※最新の情報は
              <Link
                className="underline"
                href="https://twitter.com/ngm_strings"
              >
                twitter
              </Link>
              でお知らせします！
            </p>
          </div>
        </div>
      </div>
      <hr />
      {/* <a
        className="twitter-timeline"
        data-lang="ja"
        data-width="300"
        data-height="400"
        data-theme="dark"
        href="https://twitter.com/ngm_strings"
      >
        Tweets by ngm_strings
      </a>
      <script async src="https://platform.twitter.com/widgets.js"></script> */}
    </Contents>
  );
}
