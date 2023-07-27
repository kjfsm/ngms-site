interface ContentsProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const Contents = ({ className, title, children }: ContentsProps) => {
  return (
    <div className={`flex flex-col gap-y-3 ${className}`}>
      <h2 className="text-3xl">{title}</h2>
      <hr />
      {children}
    </div>
  );
};

export default Contents;
