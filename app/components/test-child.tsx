import { useFeature } from "@growthbook/growthbook-react";

export const DemoComponent = () => {
  const { on: featureOn } = useFeature("test-feature");

  if (featureOn) return <div>Feature On</div>;

  return <div>Feature Off</div>;
};
