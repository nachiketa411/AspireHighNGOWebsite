// Define your registry of components based on IDs
import { ItemWithDetails } from "../pages/HomePage/styles";
import React, { lazy, Suspense } from "react";

export enum ComponentKeys {
  DynamicTable = "dynamicTable",
  SampleComponent = "anotherComponent",
}

// Lazy load your components
const DynamicTable = lazy(() => import("../components/TableComponent"));
const RegistrationFormPage = lazy(
  () => import("../pages/RegistrationFormPage")
);

const componentMapping: {
  [key in ComponentKeys]: React.LazyExoticComponent<React.FC<any>>;
} = {
  [ComponentKeys.DynamicTable]: DynamicTable,
  [ComponentKeys.SampleComponent]: RegistrationFormPage,
};

export const generateComponentRegistry = (
  items: ItemWithDetails[],
  dynamicData: { [key: string]: any }
) => {
  return items.reduce((acc, item) => {
    if (item.componentKey) {
      const Component = componentMapping[item.componentKey as ComponentKeys];

      // Conditionally pass data only if it exists in dynamicData
      const props = dynamicData[item.componentKey]
        ? { data: dynamicData[item.componentKey] }
        : {};

      acc[item.id] = (
        <Suspense fallback={<div>Loading...</div>}>
          {React.createElement(Component, props)}
        </Suspense>
      );
    }
    return acc;
  }, {} as { [key: number]: React.ReactNode });
};
