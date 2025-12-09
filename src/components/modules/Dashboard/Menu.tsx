import { BsGraphUp } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { VscListOrdered } from "react-icons/vsc";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" path="/dashboard" />
      <MenuItem icon={FaUserCog} label="Manage Customers" path="/customers" />
      <MenuItem icon={FaUsers} label="Our Employees" path="/employees" />
      <MenuItem icon={FaUsers} label="Post a Job" path="/post/job" />
      <MenuItem icon={FaUsers} label="Jobs" path="/jobs" />
      <MenuItem icon={VscListOrdered} label="Orders" path="/orders" />
      <MenuItem icon={MdPayment} label="Transactions" path="/transactions" />
    </>
  );
};
export default AdminMenu;
