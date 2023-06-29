import Image from "next/image";
import logo from "/public/img/ngms-rogo.png";

export default function Page() {
  const birthdate = new Date(2013, 10, 17);
  const today = new Date();
  const age = calcAge(birthdate, today);
  return (
    <>
      <h2>楽団紹介</h2>
      <hr />
      <div className="row">
        <div className="col-sm">
          <Image src={logo} alt="NGMS ロゴ" height="135" width="135" />
        </div>
        <div className="col-sm">
          <h3>NGMS（名古屋ゲームミュージックストリングス）</h3>
          <p>ゲーム音楽専門の弦楽合奏団体</p>
          <p>{`LV ${age}`}</p>
          <p>主な生息地　主に名古屋市内（現状は大高、中川、瑞穂など）</p>
          <br />
        </div>
      </div>
      <hr />
      <p>ゲーム音楽をこよなく愛する　　東海地方の有志を中心に設立された。</p>
      <p>
        NGME（名古屋ゲームミュージックアンサンブル）という　　吹奏楽団の姉妹団体を持っている。
      </p>
      <p>現在、同じ志を持った仲間を募集している。</p>
      <h3>来たれ、ゲーム音楽愛好家！</h3>
    </>
  );
}

const calcAge = (birthDate: Date, targetDate: Date): number => {
  const age = targetDate.getFullYear() - birthDate.getFullYear();
  const birthday = new Date(
    targetDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );
  if (targetDate < birthday) {
    return age - 1;
  }
  return age;
};
