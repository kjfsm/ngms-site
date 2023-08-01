import Content from "@/components/Content";
import Link from "next/link";

export default function Page() {
  return (
    <Content title="お問い合わせ">
      <h3>【編成】</h3>
      <p>ヴァイオリン、ヴィオラ、チェロ、コントラバス</p>
      <h3>【活動拠点】</h3>
      <p>主に名古屋市内（現状は大高、中川、瑞穂など）</p>
      <h3>【練習】</h3>
      <p>月1～2回程度、日曜日がメイン</p>
      <h3>【参加費】</h3>
      <p>団費 1ヶ月： 社会人2,000円 /学生1,500円&emsp;※第7回演奏会以降</p>
      <p>演奏会では規模に応じて別途で3,000～8,000円ほど頂くことがあります。</p>
      <h3>【募集要項】</h3>
      <ul className="list-inside list-disc">
        <li>上記の楽器を演奏出来る方</li>
        <li>編曲と浄書が出来る方</li>
        <li>録音や撮影などの技術のある方</li>
        <li>演奏会を行うためのスタッフ</li>
      </ul>
      <p>ゲームやアニメなどの溢れる情熱が抑えきれずにお力添え頂ける方！！</p>
      <h3>【注意事項】</h3>
      <p>
        モーツァルト「アイネ・クライネ・ナハトムジーク」やバッハ「管弦楽組曲第3番のアリア」程度の演奏能力があれば、当団の楽曲は頑張れば全部演奏可能です。上記の楽曲が演奏出来ないという方でも演奏出来る曲も用意してあります。
      </p>
      <p>練習はほぼ名古屋市内で行います。（第2回までの実績から）</p>
      <p>高校生以下は応相談です。</p>
      <p>見学・入団希望の方は</p>
      <p>
        「氏名」「希望楽器または能力」「経験年数やアンサンブル経験」「お住まいの地域」を記載の上
      </p>
      <p>以下の連絡先までご連絡下さい。</p>
      <h3>【問い合わせ先】</h3>
      <p>アドレス： ngmstring@gmail.com</p>
      <p>【Twitter公式アカウント】</p>
      <p>
        <Link href="https://twitter.com/ngm_strings" className="underline">
          @ngm_strings
        </Link>
      </p>
      <div className="font-bold">来たれ、ゲーム音楽愛好家！</div>
    </Content>
  );
}
