import React, { useEffect, useState, useMemo } from "react"; // Adjust the path as needed
import {
  HomePageContainer,
  Header,
  MainContentWrapper,
  Sidebar,
  ContentContainer,
  ItemWithDetails,
  Footer,
} from "./styles"; // Import your styled components
import ListGroup from "../../components/ListGroupComponent";
import MainContent from "../../components/MainContentComponent";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarButtonComponent,
} from "../../components/NavBarComponent";
import {
  ComponentKeys,
  generateComponentRegistry,
} from "../../components/componentRegistry";
import { fetchItems } from "../../services/itemService";
import { fetchStudents } from "../../services/studentService";

const HomePage: React.FC = () => {
  const [items, setItems] = useState<ItemWithDetails[]>([]); // State to hold fetched items
  const [selectedItem, setSelectedItem] = useState<ItemWithDetails | null>(
    null
  );
  const [studentData, setStudentData] = useState<Array<{ [key: string]: any }>>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling
  const navigate = useNavigate();

  useEffect(() => {
    const initializeItemData = async () => {
      try {
        setLoading(true);
        const itemsData = await fetchItems(); // Use the service to fetch items
        setItems(itemsData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch services");
        setLoading(false);
      }
    };

    initializeItemData();
  }, []);

  useEffect(() => {
    const fetchDataForSelectedItem = async () => {
      if (selectedItem?.componentKey === ComponentKeys.DynamicTable) {
        try {
          const studentsData = await fetchStudents(); // Fetch student data when required
          setStudentData(studentsData);
        } catch (err) {
          console.error("Failed to fetch student data", err);
        }
      }
    };

    fetchDataForSelectedItem();
  }, [selectedItem]);

  const handleSelectItem = (id: number) => {
    const selected = items.find((item) => item.id === id) || null;

    if (selectedItem?.id === id) {
      setSelectedItem(null);
      return;
    }

    setSelectedItem(selected);
  };

  const dynamicComponentRegistry = generateComponentRegistry(items, {
    [ComponentKeys.DynamicTable]: studentData,
  });

  const handleLoginClick = () => {
    console.log("Login clicked");
  };

  const handleSignUpClick = () => {
    console.log("Sign Up clicked");
  };

  const memoizedItems = useMemo(() => {
    return items.map((item) => ({ id: item.id, name: item.name }));
  }, [items]);

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Display an error message if fetching fails
  }

  return (
    <HomePageContainer>
      <Header>Educational Services for Students</Header>
      <Navbar>
        <NavbarButtonComponent label="Login" onClick={handleLoginClick} />
        <NavbarButtonComponent
          label="Sign Up"
          onClick={handleSignUpClick}
          color="#28a745"
          hoverColor="#218838"
        />
      </Navbar>
      <ContentContainer>
        <Sidebar>
          <ListGroup
            items={memoizedItems}
            heading="Select a Service"
            onSelectItem={handleSelectItem}
            selectedItemId={selectedItem?.id || null}
          />
        </Sidebar>
        {selectedItem ? (
          <MainContentWrapper>
            <MainContent
              title={selectedItem.name}
              introduction={selectedItem.introduction}
              subheadings={selectedItem.subheadings}
              showActionButton={selectedItem.showButton}
              buttonLabel={selectedItem.buttonLabel}
              buttonAction={() => navigate(selectedItem.routingPath)}
            >
              {dynamicComponentRegistry[selectedItem.id]}
            </MainContent>
          </MainContentWrapper>
        ) : (
          <MainContentWrapper>
            <p>
              Please select a service from the list to view more information.
            </p>
          </MainContentWrapper>
        )}
      </ContentContainer>
      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </HomePageContainer>
  );
};

export default HomePage;
