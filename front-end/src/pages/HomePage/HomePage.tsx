import React, { useEffect, useState } from "react"; // Adjust the path as needed
import {
  HomePageContainer,
  Header,
  MainContentWrapper,
  Sidebar,
  ContentContainer,
  ItemWithDetails,
} from "./styles"; // Import your styled components
import ListGroup from "../../components/ListGroupComponent/ListGroup";
import MainContent from "../../components/MainContentComponent/MainContent";
import { useNavigate } from "react-router-dom";
// import InteractiveList from "../components/CompositeComponents/InteractiveList";

const itemList: ItemWithDetails[] = [
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
  },
  // Add more items as needed
];

const HomePage: React.FC = () => {
  const [items, setItems] = useState<ItemWithDetails[]>([]); // State to hold fetched items
  const [selectedItem, setSelectedItem] = useState<ItemWithDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate a network request with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setItems(itemList); // Set the itemList after the simulated fetch
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectItem = (itemName: string) => {
    const selected = items.find((item) => item.name === itemName) || null;
    setSelectedItem(selected === selectedItem ? null : selected);
  };

  const handleButtonClick = () => {
    if (selectedItem?.name === "Registration & Enrollment") {
      navigate(selectedItem.routingPath);
    } else {
      alert(`Action for ${selectedItem?.name}`);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Display an error message if fetching fails
  }

  return (
    <HomePageContainer>
      <Header>Educational Services for Students</Header>
      <ContentContainer>
        <Sidebar>
          <ListGroup
            items={items.map((item) => item.name)}
            heading="Select a Service"
            onSelectItem={handleSelectItem}
          />
        </Sidebar>
        <MainContentWrapper isMessageVisible={!!selectedItem}>
          {selectedItem ? (
            <MainContent
              title={selectedItem.name}
              introduction={selectedItem.introduction}
              subheadings={selectedItem.subheadings}
              // showActionButton={
              //   selectedItem.name === "Registration & Enrollment"
              // }
              showActionButton={selectedItem.showButton}
              buttonLabel={selectedItem.buttonLabel}
              buttonAction={handleButtonClick}
            />
          ) : (
            <p>
              Please select a service from the list to view more information.
            </p>
          )}
        </MainContentWrapper>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
