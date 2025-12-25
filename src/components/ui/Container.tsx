const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container px-3 mx-auto md:px-0 grow">{children}</div>;
};

export default Container;
