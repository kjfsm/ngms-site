interface ContentProps {
  title: string;
  children: React.ReactNode;
}

// トップページのコンテンツを表示するためのコンポーネントです。
// title にはコンテンツのタイトルを、children にはコンテンツの内容を入れてください。
const Content = ({ title, children }: ContentProps) => {
  return (
    <>
      <header>
        <h2>{title}</h2>
      </header>
      <hr />
      {children}
    </>
  );
};

export default Content;
