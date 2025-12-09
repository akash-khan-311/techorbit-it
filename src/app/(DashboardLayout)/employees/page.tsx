import EmployeesTableClient from "@/components/modules/Dashboard/EmployeesTableClient";

export const metadata = {
  title: "Employees — TechOrbit IT",
  description: "Manage and view the list of employees at TechOrbit IT",
  alternates: {
    canonical: "https://techorbitit.com/employees",
  },
};

const CustomerPage = async () => {
  return (
    <>
      <EmployeesTableClient />
    </>
  );
};

export default CustomerPage;
