export const getSingleJob = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/job/${id}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
