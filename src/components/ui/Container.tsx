const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-3 md:px-0 flex-grow">{children}</div>
  );
};

export default Container;
