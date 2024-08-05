import { useState, useEffect } from "react";
import styled from "styled-components";
import ListGroup from "../ListGroup"; // Adjust the import path as needed
import Message from "../Message"; // Adjust the import path as needed

interface ItemWithMessage {
  id: number;
  name: string;
  message: string;
}

const itemList: ItemWithMessage[] = [
  {
    id: 1,
    name: "Registration & Enrollment",
    message: "Manage student registrations and enrollments.",
  },
  {
    id: 2,
    name: "Activity Management",
    message: "Track and manage student activities.",
  },
  { id: 3, name: "Attendance", message: "Monitor and record attendance." },
  {
    id: 4,
    name: "Staff Management",
    message: "Oversee staff details and roles.",
  },
  {
    id: 5,
    name: "Dashboard",
    message: "Get an overview of all metrics and activities.",
  },
];

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

const ListContainer = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const MessageContainer = styled.div`
  flex: 2;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const InteractiveList = () => {
  const [items, setItems] = useState<ItemWithMessage[]>([]);
  const [selectedItem, setSelectedItem] = useState<ItemWithMessage | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data from a server
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate server response delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setItems(itemList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectItem = (item: ItemWithMessage) => {
    setSelectedItem(item);
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
          onSelectItem={(itemName) => {
            const item = items.find((i) => i.name === itemName);
            if (item) handleSelectItem(item);
          }}
        />
      </ListContainer>
      <MessageContainer>
        {selectedItem && (
          <Message heading={selectedItem.name}>{selectedItem.message}</Message>
        )}
      </MessageContainer>
    </Container>
  );
};

export default InteractiveList;
