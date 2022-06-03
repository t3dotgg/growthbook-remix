import { useFeature } from "@growthbook/growthbook-react";

export const DemoComponent = () => {
  const { on: featureOn } = useFeature("nps-enabled");

  if (featureOn) return <div>Feature On</div>;

  return <div>Feature Off</div>;
};
