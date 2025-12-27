import ClientWraper from "@/components/ClientWraper";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientWraper>{children}</ClientWraper>
    </>
  );
};

export default layout;
