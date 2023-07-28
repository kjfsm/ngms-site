import dayjs from "dayjs";
import ja from "dayjs/locale/ja";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// import leaflet1Small from "/public/concert/1st/s_first-front.jpg";
// import leaflet1 from "/public/concert/1st/first-front.jpg";
// import leaflet2Small from "/public/concert/8th/8th_leaflet_front_w440.jpg";
// import leaflet2 from "/public/concert/2nd/second-front.jpg";
// import leaflet3Small from "/public/concert/8th/8th_leaflet_front_w440.jpg";
// import leaflet3 from "/public/concert/1st/first-front.jpg";
// import leaflet4Small from "/public/concert/8th/8th_leaflet_front_w440.jpg";
// import leaflet4 from "/public/concert/1st/first-front.jpg";
// import leaflet5Small from "/public/concert/5th/5th_leaflet_front_w440.jpg";
// import leaflet5 from "/public/concert/1st/first-front.jpg";
// import leaflet6Small from "/public/concert/6th/6th_leaflet_front_w440.jpg";
// import leaflet6 from "/public/concert/1st/first-front.jpg";
// import leaflet7Small from "/public/concert/7th/7th_leaflet_front_w440.jpg";
// import leaflet7 from "/public/concert/1st/first-front.jpg";
import Contents from "@/components/Contents";
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
  ];
  return (
    <Contents title="過去の演奏会情報">
      {concertInfoList.reverse().map((concertInfo, index) => {
        return <ConsertInfo key={index} concertInfo={concertInfo} />;
      })}
    </Contents>
  );
}

const ConsertInfo = (props: ConcertInfoProps) => {
  return (
    <>
      <hr />
      <h3>{`第${props.concertInfo.concertNumber}回演奏会`}</h3>
      <div className="flex flex-row">
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
          <p>
            <b>演奏曲目</b>
          </p>
          <ul>
            {props.concertInfo.programs.map((title, index) => {
              return <li key={index}>{title}</li>;
            })}
            {props.concertInfo.andMore && <li>など</li>}
          </ul>
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
