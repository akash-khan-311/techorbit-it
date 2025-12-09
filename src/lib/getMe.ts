/* eslint-disable @typescript-eslint/no-explicit-any */

export const getMe = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/me`, {
      credentials: "include",
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Failed to fetch user data");
    }

    return result;
  } catch (error: any) {
    console.error("getMe error:", error.message);
    return { success: false, message: error.message };
  }
};
