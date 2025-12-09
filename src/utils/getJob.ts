export const getAllJobs = async () => {
  try {
    const res = await fetch(`/api/job`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching Jobs:", error);
  }
};
