import { FC } from "react";

interface WorkCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Card: FC<WorkCardProps> = ({
  title,
  description,
  icon,
}: WorkCardProps) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20   rounded-xl shadow-md p-6 flex flex-col items-start justify-center gap-3 hover:shadow-xl transition-all duration-300"
    >
      {icon && <div className="text-3xl text-blue-500">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
