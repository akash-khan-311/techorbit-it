import { formatDateDMY } from "@/lib/formatDateDMY";
import { getLoggedInUser } from "@/lib/getLogedInUser";
import ImagePreview from "@/utils/ImagePreview";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default async function Profile() {
  const loggedInUser = await getLoggedInUser();

  return (
    <div>
      <div>
        {" "}
        <div className="flex flex-wrap items-stretch mx-auto lg:bg-white lg:my-0">
          {/*Main Col*/}
          <div className="w-full mx-6 bg-white rounded-lg shadow-2xl lg:bg-transparent lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0">
            <div className="p-4 text-center md:p-10 lg:text-left">
              {/* Image for mobile view*/}
              <Image
                src={`${loggedInUser?.profileImage}`}
                className="z-40 block w-48 h-48 mx-auto -mt-16 rounded-full shadow-xl lg:hidden"
                width={300}
                height={300}
                alt={loggedInUser?.name || "TechOrbit IT"}
              />
              <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                {loggedInUser?.name}
              </h1>
              <div className="w-4/5 pt-3 mx-auto border-b-2 border-green-500 opacity-25 lg:mx-0" />
              <div className="flex flex-col items-start justify-start">
                <p className="flex items-center justify-center pt-4 text-base font-semibold lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Employee ID: {loggedInUser?.employeeId}
                </p>
                <p className="flex items-center justify-center text-base font-bold lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  <span className="text-left">
                    {" "}
                    Designation: {loggedInUser?.designation}
                  </span>
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Salary : {loggedInUser?.salary} (BDT)
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Address : {loggedInUser?.address}
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Phone : {loggedInUser?.phone}
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Gender : {loggedInUser?.gender}
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Blood : {loggedInUser?.bloodGroup}
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Country : {loggedInUser?.country}
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Date Of Birth : {formatDateDMY(loggedInUser?.dateOfBirth)}
                </p>
                <p className="flex items-center justify-center text-base font-semibold lg:text-base lg:justify-start gap-x-5">
                  <FaArrowRight className="text-[#1BCDD2]" />
                  Joining Date : {formatDateDMY(loggedInUser?.joiningDate)}
                </p>
              </div>
              <ImagePreview
                images={
                  [
                    loggedInUser?.nidFrontImage,
                    loggedInUser?.nidBackImage,
                  ].filter(Boolean) as string[]
                }
              />
            </div>
          </div>
          {/*Img Col*/}
          <div className="relative w-full lg:w-2/5">
            {/* Big profile image for side bar (desktop) */}
            <Image
              width={500}
              height={500}
              priority
              alt={loggedInUser?.name || "Tech Orbit IT"}
              src={loggedInUser?.profileImage || "Profile Image"}
              className="hidden object-cover h-full rounded-none shadow-2xl lg:block"
            />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
