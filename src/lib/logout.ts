export const logout = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });
    const data = await res.json();
    if (res.ok) {
      return { success: true, message: data.message || "Logout Successfully" };
    } else {
      return { success: false, message: data.message || "Logout Failed" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Logout Failed" };
  }
};
