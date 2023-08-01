import Content from "@/components/Content";
import Image from "next/image";
import Link from "next/link";
import youTubeIcon from "/public/img/youtube_icon.png";

export default function Page() {
  return (
    <Content title="演奏動画">
      <h3>
        第1回演奏会より 弦楽四重奏と弦楽合奏のための交響的連曲
        艦隊これくしょん-艦これ-
      </h3>
      <p>
        <iframe
          title="niconico player"
          loading="lazy"
          width="312"
          height="200"
          src="https://ext.nicovideo.jp/thumb/sm26640675"
          className="border-1 border-gray-500"
        />
      </p>
      <p>
        <iframe
          width="312"
          height="200"
          loading="lazy"
          src="https://www.youtube.com/embed/5rjnOYXPbBc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </p>
      <p>その他たくさんの動画がYoutubeで公開されています！！</p>
      <p>
        もう一度聞きたい演奏や見逃した演奏など、気になったら是非ご覧ください
      </p>
      <Link
        href="https://www.youtube.com/channel/UCtvsgRO3JZWzPmJn1m6XJYg"
        className="underline"
      >
        <Image
          src={youTubeIcon}
          alt="Youtubeチャンネル"
          height="30"
          width="30"
        />
        NGMSのYoutubeチャンネルはこちら！！
      </Link>
    </Content>
  );
}
