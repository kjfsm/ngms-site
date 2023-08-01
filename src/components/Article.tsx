interface ArticleProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

// トップページのコンテンツを表示するためのコンポーネントです。
// title にはコンテンツのタイトルを、children にはコンテンツの内容を入れてください。
const Article = ({ className, title, children }: ArticleProps) => {
  return (
    <article className={`${className}`}>
      <header>
        <h3>{title}</h3>
      </header>
      {children}
    </article>
  );
};

export default Article;
