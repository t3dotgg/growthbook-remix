export const loader = async () => {
  if (!process.env.GROWTHBOOK_FEATURE_URL)
    throw new Error("GROWTHBOOK_FEATURE_URL env variable required");

  const growthbookFeatures = await fetch(
    process.env.GROWTHBOOK_FEATURE_URL
  ).then((res) => res.text());

  return new Response(growthbookFeatures, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "stale-while-revalidate=60",
    },
  });
};
