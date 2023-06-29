import Image from "next/image";
import Link from "next/link";
import leaflet9Small from "/public/concert/9th/9th_leaflet_w620.jpg";

export default function Page() {
  return (
    <>
      <h2>お知らせ</h2>
      <hr />
      <h3>第9回演奏会</h3>
      <div className="flex flex-row">
        <Link passHref href="concert/9th/9th_leaflet_w1240.jpg">
          <Image src={leaflet9Small} width={220} alt="第9回チラシ" />
        </Link>
        <div className="col-sm">
          <div className="currentConcert-section">
            <p>
              日時：
              <span>2023年10月29日（日）</span>
            </p>
            <p>開場：13:15 開演：14:00</p>
            <p>
              会場：東海市芸術劇場 大ホール (愛知県東海市大田町下浜田137番地)
            </p>
          </div>
          <div className="currentConcert-section">
            <h4 className="currentConcert-section-title">曲目</h4>
            <p className="program-main">LIVE A LIVE</p>
            <p className="program-sub">ファイアーエムブレム風花雪月</p>
            <p>パワプロクンポケット13</p>
            <p>原神</p>
            <p>ポケットモンスター オメガルビー・アルファサファイア</p>
            <p>いけにえと雪のセツナ</p>
          </div>
          <div className="currentConcert-section">
            <h4 className="currentConcert-section-title">アクセス</h4>
            <p>名鉄太田川駅から徒歩 0 分。</p>
            <p>
              詳しくは
              <Link href="https://www.tokai-arts.jp/access/">
                東海市芸術劇場公式サイト
              </Link>
              をご覧ください。
            </p>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10524.578170202569!2d136.88561300580838!3d35.01903077857469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14b06c0579552e33!2z5p2x5rW35biC6Iq46KGT5YqH5aC0!5e0!3m2!1sja!2sjp!4v1506452286188"
                width="290"
                height="300"
                allowFullScreen
              />
            </p>
          </div>
          <p>
            ※最新の情報は
            <Link href="https://twitter.com/ngm_strings">twitter</Link>
            でお知らせします！
          </p>
        </div>
      </div>
      <hr />
      <a
        className="twitter-timeline"
        data-lang="ja"
        data-width="300"
        data-height="400"
        data-theme="dark"
        href="https://twitter.com/ngm_strings"
      >
        Tweets by ngm_strings
      </a>
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </>
  );
}
