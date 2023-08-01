import Article from "@/components/Article";
import Content from "@/components/Content";
import Image from "next/image";
import Link from "next/link";
import leaflet9Small from "/public/concert/9th/9th_leaflet_w620.jpg";

export default function Page() {
  return (
    <Content title="最新のお知らせ">
      <Article title="第9回演奏会">
        <div className="flex flex-col md:flex-row">
          <section>
            <Link passHref href="concert/9th/9th_leaflet_w1240.jpg">
              <Image src={leaflet9Small} width={440} alt="第9回チラシ" />
            </Link>
          </section>
          <section className="grow">
            <h4>演奏会情報</h4>
            <p>
              日時: <span className="text-2xl">2023年10月29日（日）</span>
            </p>
            <p>開場: 13:15</p>
            <p>開演: 14:00</p>
            <p>
              会場: 東海市芸術劇場 大ホール (愛知県東海市大田町下浜田137番地)
            </p>
            <h4>曲目</h4>
            <ul className="list-disc list-inside my-2">
              <li>LIVE A LIVE</li>
              <li>ファイアーエムブレム風花雪月</li>
              <li>パワプロクンポケット13</li>
              <li>原神</li>
              <li>ポケットモンスター オメガルビー・アルファサファイア</li>
              <li>いけにえと雪のセツナ</li>
            </ul>
            <h4>アクセス</h4>
            <p>名鉄太田川駅から徒歩0分。</p>
            <p>
              詳しくは
              <Link
                href="https://www.tokai-arts.jp/access/"
                className="underline"
              >
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
          </section>
        </div>
      </Article>
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
    </Content>
  );
}
