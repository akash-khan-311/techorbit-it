import CustomerTableClient from "@/components/modules/Dashboard/CustomerTableClient";

export const metadata = {
  title: "Customers — TechOrbit IT",
  description: "Manage and view the list of customers at TechOrbit IT",
  alternates: {
    canonical: "https://techorbitit.com/customers",
  },
};

const CustomerPage = async () => {
  return (
    <div>
      <CustomerTableClient />
    </div>
  );
};

export default CustomerPage;
