import Contents from "@/components/Contents";
import Image from "next/image";
import Link from "next/link";
import youTubeIcon from "/public/img/youtube_icon.png";

export default function Page() {
  return (
    <Contents title="演奏動画">
      <h3>
        第1回演奏会より 弦楽四重奏と弦楽合奏のための交響的連曲
        艦隊これくしょん-艦これ-
      </h3>
      <p>
        <iframe
          width="312"
          height="230"
          className="nicovideo"
          src="http://ext.nicovideo.jp/thumb/sm26640675"
        />
        <iframe
          width="312"
          height="230"
          src="https://www.youtube.com/embed/5rjnOYXPbBc?rel=0"
          allowFullScreen
        />
      </p>
      <p>その他たくさんの動画がYoutubeで公開されています！！</p>
      <p>
        もう一度聞きたい演奏や見逃した演奏など、気になったら是非ご覧ください
      </p>
      <Link
        href="https://www.youtube.com/channel/UCtvsgRO3JZWzPmJn1m6XJYg"
        passHref
      >
        <Image
          src={youTubeIcon}
          alt="Youtubeチャンネル"
          height="30"
          width="30"
        />
        NGMSのYoutubeチャンネルはこちら！！
      </Link>
    </Contents>
  );
}
