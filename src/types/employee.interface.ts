export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export enum BloodGroup {
  APlus = "A+",
  AMinus = "A-",
  BPlus = "B+",
  BMinus = "B-",
  OPlus = "O+",
  OMinus = "O-",
  ABPlus = "AB+",
  ABMinus = "AB-",
}
export type IEmployee = {
  _id?: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  bloodGroup: BloodGroup;
  country: string;
  dateOfBirth: Date;
  joiningDate: Date;
  emergencyPhone?: string;
  profileImage: string;
  nidFrontImage: string;
  nidBackImage: string;
  salary: number;
  designation: string;
  address: string;
  createdAt: Date;
};
