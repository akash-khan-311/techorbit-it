export const formattedBangladeshPhoneNumber = (phoneNumber: string) => {
  phoneNumber = phoneNumber.trim();
  if (phoneNumber.startsWith("0")) {
    const newPhoneNumber = "+880" + phoneNumber.slice(1);
    return newPhoneNumber;
  } else if (!phoneNumber.startsWith("+880")) {
    return "+880" + phoneNumber;
  }
  return phoneNumber;
};
