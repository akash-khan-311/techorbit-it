import Employee from "@/models/Employee.model";

export async function generateEmployeeId() {
  const prefix = "TO-";

  const lastEmployee = await Employee.findOne().sort({ createdAt: -1 }).lean();

  if (!lastEmployee || !lastEmployee.employeeId) {
    return `${prefix}0001`;
  }

  const lastNumber = parseInt(lastEmployee.employeeId.replace(prefix, ""), 10);

  const newNumber = String(lastNumber + 1).padStart(4, "0");

  return `${prefix}${newNumber}`;
}
