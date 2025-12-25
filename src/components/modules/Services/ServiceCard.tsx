/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const ServiceCard = ({ className, imagePath, service, id }: any) => {
  return (
    <div
      id={id}
      className={`${className} rounded-2xl shadow-[0px_0px_15px_0px_#1BCDD2] bg-linear-to-tr from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  text-white md:p-10 p-4`}
    >
      <Image
        className="rounded-2xl "
        src={imagePath}
        width={600}
        height={200}
        alt={service.title}
        priority
      />
      <div className="space-y-5">
        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
        <p className="text-base text-white ">{service.des}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
