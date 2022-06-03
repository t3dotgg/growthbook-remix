export const loader = async () => {
  if (!process.env.GROWTHBOOK_FEATURE_URL)
    throw new Error("GROWTHBOOK_FEATURE_URL env variable required");

  const gbResponse = await fetch(process.env.GROWTHBOOK_FEATURE_URL);

  return new Response(gbResponse.body, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
};
