export type IAdmin = {
  employeeId: string;
  email: string;
  password: string;
  role: "admin" | "staff";
};
