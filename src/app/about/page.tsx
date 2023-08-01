import Content from "@/components/Content";
import Image from "next/image";
import logo from "/public/img/ngms-rogo.png";

export default function Page() {
  const birthdate = new Date(2013, 10, 17);
  const today = new Date();
  const age = calcAge(birthdate, today);

  return (
    <>
      <Content title="楽団紹介">
        <div className="flex flex-col md:flex-row">
          <div>
            <Image src={logo} alt="NGMS ロゴ" height="135" width="135" />
          </div>
          <div className="grow">
            <h4>NGMS（名古屋ゲームミュージックストリングス）</h4>
            <p>ゲーム音楽専門の弦楽合奏団体</p>
            <p>{`LV ${age}`}</p>
            <p>主な生息地&emsp;主に名古屋市内（現状は大高、中川、瑞穂など）</p>
          </div>
        </div>
        <hr />
        <div>
          <p>
            ゲーム音楽をこよなく愛する&emsp;東海地方の有志を中心に設立された。
          </p>
          <p>
            NGME（名古屋ゲームミュージックアンサンブル）という&emsp;吹奏楽団の姉妹団体を持っている。
          </p>
          <p>現在、同じ志を持った仲間を募集している。</p>
          <p className="text-xl">来たれ、ゲーム音楽愛好家！</p>
        </div>
      </Content>
    </>
  );
}

const calcAge = (birthDate: Date, targetDate: Date): number => {
  const age = targetDate.getFullYear() - birthDate.getFullYear();
  const birthday = new Date(
    targetDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
  );
  if (targetDate < birthday) {
    return age - 1;
  }
  return age;
};
