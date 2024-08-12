import React, { useState, useEffect } from "react";
import Message from "../Message"; // Ensure the import path is correct based on your structure
import ListGroup from "../ListGroupComponent/ListGroup";
import {
  Container,
  ItemWithDetails,
  ListContainer,
  MessageContainer,
} from "./styles";

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
  },
  {
    id: 2,
    name: "Activity Management",
    introduction: "Manage and track student activities effectively.",
    subheadings: [
      { title: "Activity Tracking", content: "Track all student activities." },
      { title: "Reporting", content: "Generate activity reports." },
    ],
  },
  // Add more items as needed
];

const InteractiveList: React.FC = () => {
  const [items, setItems] = useState<ItemWithDetails[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemWithDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    const selected = items.find((item) => item.name === itemName);
    if (selected) setSelectedItem(selected);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <ListContainer>
        <ListGroup
          items={items.map((item) => item.name)}
          heading="Select an Item"
          onSelectItem={handleSelectItem}
        />
      </ListContainer>
      <MessageContainer>
        {selectedItem && (
          <Message
            content={selectedItem.introduction}
            showRegisterButton={
              selectedItem.name === "Registration & Enrollment"
            }
          />
        )}
      </MessageContainer>
    </Container>
  );
};

export default InteractiveList;
