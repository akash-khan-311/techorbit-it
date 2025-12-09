/* eslint-disable @typescript-eslint/no-explicit-any */

const Career = ({ items }: any) => {
  return (
    <div className="rounded-2xl bg-gradient-to-tr from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  text-white p-20 my-20">
      <div className="text-white space-y-3">
        <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          {items.title}
        </h2>
        <p className="md:w-2/3 mx-auto text-center">{items.text}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20 ">
        {items.info.map((item: any, i: number) => (
          <div
            key={i}
            className="space-y-3 bg-gradient-to-r from-[#0F1C3F] to-[#070B2E] p-5 rounded-2xl border shadow-[0px_0px_15px_0px_#1BCDD2]"
          >
            <item.icon className="text-gray-400 size-18 " />
            <h2 className="text-white text-xl font-bold ">{item.title}</h2>
            <p className="text-gray-300 ">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
