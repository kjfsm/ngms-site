import Content from "@/components/Content";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import leaflet1 from "/public/concert/1st/first-front.jpg";
import leaflet1Small from "/public/concert/1st/s_first-front.jpg";
import leaflet2Small from "/public/concert/2nd/s_second-front.jpg";
import leaflet2 from "/public/concert/2nd/second.jpg";
import leaflet3Small from "/public/concert/3rd/s_third-front.jpg";
import leaflet3 from "/public/concert/3rd/third.jpg";
import leaflet4 from "/public/concert/4th/4th.jpg";
import leaflet4Small from "/public/concert/4th/s_4th1.jpg";
import leaflet5 from "/public/concert/5th/5th.jpg";
import leaflet5Small from "/public/concert/5th/s_5th.jpg";
import leaflet6 from "/public/concert/6th/6th_leaflet_combined.jpg";
import leaflet6Small from "/public/concert/6th/6th_leaflet_front_w440.jpg";
import leaflet7 from "/public/concert/7th/7th_leaflet_rescheduled.jpg";
import leaflet7Small from "/public/concert/7th/7th_leaflet_rescheduled_front_w440.jpg";
import leaflet8 from "/public/concert/8th/8th_leaflet_front.jpg";
import leaflet8Small from "/public/concert/8th/8th_leaflet_front_w440.jpg";

dayjs.locale(ja);

interface ConcertInfo {
  concertNumber: number;
  date: dayjs.Dayjs;
  openTime: string;
  startTime: string;
  location: string;
  programs: string[];
  andMore: boolean;
  thumbnailLeafletSrc: StaticImageData;
  originalLeafletSrc: StaticImageData;
}

interface ConcertInfoProps {
  concertInfo: ConcertInfo;
}

export default function Page() {
  const concertInfoList: ConcertInfo[] = [
    {
      concertNumber: 8,
      thumbnailLeafletSrc: leaflet8Small,
      originalLeafletSrc: leaflet8,
      date: dayjs("2022-10-30"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: [
        "ブレイブリーデフォルト",
        "ヨッシーアイランド",
        "聖剣伝説 Legend of Mana",
        "FINAL FANTASY Ⅲ",
        "ゼルダの伝説 夢をみる島",
        "DELTARUNE",
      ],
      andMore: false,
    },
    {
      concertNumber: 7,
      thumbnailLeafletSrc: leaflet7Small,
      originalLeafletSrc: leaflet7,
      date: dayjs("2021-10-3"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: [
        "ファイナル・ファンタジー IX",
        "大逆転裁判",
        "メギド72",
        "クロノ・トリガー",
        "マリオ64",
        "OCTOPATH TRAVELER",
      ],
      andMore: false,
    },
    {
      concertNumber: 6,
      thumbnailLeafletSrc: leaflet6Small,
      originalLeafletSrc: leaflet6,
      date: dayjs("2019-10-27"),
      openTime: "13:15",
      startTime: "14:00",
      location:
        "ナディアパーク デザインセンタービル内 名古屋市青少年文化センター アートピアホール",
      programs: [
        "｢世界樹の迷宮・世界樹と不思議のダンジョン｣シリーズ",
        "ゼルダの伝説 ブレス・オブ・ザ・ワイルド",
        "オクトパストラベラー",
        "聖剣伝説 Legend of MANA 「宝石泥棒編」",
        "落ちものゲームメドレー (ドクターマリオ、ぷよぷよ、テトリス)",
        "桃太郎電鉄シリーズ",
        "UNDERTALE (第5回演奏会アンケートより選曲)",
      ],
      andMore: false,
    },
    {
      concertNumber: 5,
      thumbnailLeafletSrc: leaflet5Small,
      originalLeafletSrc: leaflet5,
      date: dayjs("2018-10-28"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: [
        "ポケットモンスターブラック・ホワイト",
        "レイトン教授シリーズ",
        "聖剣伝説 LEGEND OF MANA",
        "ルイージマンション",
        "魔界戦記ディスガイア",
        "カービィのエアライド",
        "Fate/Grand Order",
      ],
      andMore: false,
    },
    {
      concertNumber: 4,
      thumbnailLeafletSrc: leaflet4Small,
      originalLeafletSrc: leaflet4,
      date: dayjs("2018-10-28"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: [
        "ファイナルファンタジー V",
        "スーパードンキーコング 2",
        "テイルズ オブ ゼスティリア",
        "牧場物語 ハーベストムーン",
        "クラッシュ・オブ・クラン",
        "ファイナルファンタジー X(第3回演奏会アンケートより選曲)",
      ],
      andMore: false,
    },
    {
      concertNumber: 3,
      thumbnailLeafletSrc: leaflet3Small,
      originalLeafletSrc: leaflet3,
      date: dayjs("2018-10-28"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: ["スーパーマリオRPG"],
      andMore: true,
    },
    {
      concertNumber: 2,
      thumbnailLeafletSrc: leaflet2Small,
      originalLeafletSrc: leaflet2,
      date: dayjs("2018-10-28"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: ["ファイナルファンタジーⅦ"],
      andMore: true,
    },
    {
      concertNumber: 1,
      thumbnailLeafletSrc: leaflet1Small,
      originalLeafletSrc: leaflet1,
      date: dayjs("2018-10-28"),
      openTime: "13:15",
      startTime: "14:00",
      location: "東海市芸術劇場 大ホール",
      programs: [
        "ドラゴンクエスト",
        "ファイナルファンタジー",
        "艦隊これくしょん",
      ],
      andMore: true,
    },
  ];
  return (
    <Content title="過去の演奏会情報">
      {concertInfoList.map((concertInfo, index) => {
        return <ConsertInfo key={index} concertInfo={concertInfo} />;
      })}
    </Content>
  );
}

const ConsertInfo = (props: ConcertInfoProps) => {
  return (
    <>
      <h3>{`第${props.concertInfo.concertNumber}回演奏会`}</h3>
      <div className="flex flex-row gap-2">
        <div>
          <Leaflet
            thumbnailSrc={props.concertInfo.thumbnailLeafletSrc}
            originalSrc={props.concertInfo.originalLeafletSrc}
            concertNumber={props.concertInfo.concertNumber}
          />
        </div>
        <div className="grow">
          <p>大盛況でした！</p>
          <p>ご来場ありがとうございました！</p>
          <p>
            日時：
            {props.concertInfo.date.format("YYYY年MM月DD日(dd)")}
          </p>
          <p>
            開場：{props.concertInfo.openTime} 開演：
            {props.concertInfo.startTime}
          </p>
          <p>会場：{props.concertInfo.location}</p>
          <h4>演奏曲目</h4>
          <ul className="list-disc list-inside my-2">
            {props.concertInfo.programs.map((title, index) => {
              return <li key={index}>{title}</li>;
            })}
          </ul>
          {props.concertInfo.andMore && "など"}
        </div>
      </div>
    </>
  );
};

const Leaflet = (props: {
  thumbnailSrc: StaticImageData;
  originalSrc: StaticImageData;
  concertNumber: number;
}) => {
  return (
    <Link passHref href={props.originalSrc.src}>
      <Image
        src={props.thumbnailSrc}
        alt={`第${props.concertNumber}回チラシ`}
        width={220}
      />
    </Link>
  );
};
