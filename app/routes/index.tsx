import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DemoComponent } from "~/components/test-child";

export const loader: LoaderFunction = async ({ request }) => {
  const { origin } = new URL(request.url);
  const growthbookFeatures = await fetch(
    `${origin}/growthbook-cache-mirror`
  ).then((res) => res.json());

  return growthbookFeatures;
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
