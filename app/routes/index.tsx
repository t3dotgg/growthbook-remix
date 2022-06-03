import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DemoComponent } from "~/components/test-child";

export const loader = async () => {
  if (!process.env.GROWTHBOOK_FEATURE_URL)
    throw new Error("GROWTHBOOK_FEATURE_URL env variable required");

  const growthbookFeatures = await fetch(
    process.env.GROWTHBOOK_FEATURE_URL
  ).then((res) => res.json());

  return json(growthbookFeatures);
};

export default function Index() {
  const growthbookData = useLoaderData();
  return (
    <GrowthBookProvider
      growthbook={new GrowthBook({ features: growthbookData?.features })}
    >
      <DemoComponent />
    </GrowthBookProvider>
  );
}
