type StatsProps = {
  icon: React.ElementType;
  title: string;
  count: string;
  className?: string;
};
const Stats = ({ icon: Icon, title, count, className }: StatsProps) => {
  return (
    <div className={className}>
      <div>
        <h3 className="text-xl">{title}</h3>
        <h2 className="text-6xl font-semibold">{count}</h2>
      </div>
      <div className="text-3xl">
        <Icon />
      </div>
    </div>
  );
};

export default Stats;
