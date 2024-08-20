import { ComponentKeys } from "../components/componentRegistry";
import { ItemWithDetails } from "../pages/HomePage/styles";

const staticItemList: ItemWithDetails[] = [
  {
    id: 1,
    name: "Registration & Enrollment",
    introduction:
      "This section covers the registration and enrollment process.",
    subheadings: [
      { title: "Step 1", content: "Fill out the registration form." },
      { title: "Step 2", content: "Submit the necessary documents." },
      { title: "Step 3", content: "Complete the enrollment process." },
    ],
    showButton: true,
    buttonLabel: "Start Enrollment",
    routingPath: "/register",
    componentKey: null,
  },
  {
    id: 2,
    name: "Activity Management",
    introduction: "Manage and track student activities effectively.",
    subheadings: [
      { title: "Activity Tracking", content: "Track all student activities." },
      { title: "Reporting", content: "Generate activity reports." },
    ],
    showButton: false,
    buttonLabel: "",
    routingPath: "",
    componentKey: null,
  },
  {
    id: 3,
    name: "List of Students",
    introduction: "Here are all the students registered.",
    subheadings: [
      // { title: "Activity Tracking", content: "Track all student activities." },
      // { title: "Reporting", content: "Generate activity reports." },
    ],
    showButton: false,
    buttonLabel: "",
    routingPath: "",
    componentKey: ComponentKeys.DynamicTable,
  },
  {
    id: 4,
    name: "Sample Service",
    introduction: "Sample Service for testing.",
    subheadings: [],
    showButton: false,
    buttonLabel: "",
    routingPath: "",
    componentKey: ComponentKeys.SampleComponent, // No data required
  },
  // Add more items as needed
];

export const fetchItems = async (): Promise<ItemWithDetails[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticItemList);
    }, 100); // Simulate an async operation
  });
};
