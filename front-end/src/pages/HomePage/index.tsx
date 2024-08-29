import React, { useEffect, useState, useMemo } from "react"; // Adjust the path as needed
import {
  HomePageContainer,
  Header,
  MainContentWrapper,
  Sidebar,
  ContentContainer,
  ItemWithDetails,
  Footer,
  SidebarToggleIcon,
  // CardSection,
  CardContainer,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/CardComponent";
import {
  fetchSchoolProgramServices,
  ProgramService,
} from "../../services/programService";
import Section from "../../components/SectionComponent";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [serviceList, setServiceList] = useState<ProgramService[]>([]);
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

  useEffect(() => {
    const fetchDataForSchoolServices = async () => {
      try {
        const servicesData = await fetchSchoolProgramServices(); // Fetch student data when required
        setServiceList(servicesData);
      } catch (err) {
        console.error("Failed to fetch services data", err);
      }
    };

    fetchDataForSchoolServices();
  }, []);

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

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
      <Header>Aspire High Youth Development</Header>
      <Navbar>
        <NavbarButtonComponent label="Login" onClick={handleLoginClick} />
        <NavbarButtonComponent
          label="Sign Up"
          onClick={handleSignUpClick}
          color="#28a745"
          hoverColor="#218838"
        />
      </Navbar>
      <Section
        mediaType="video"
        mediaSrc="path/to/video.mp4"
        title="We are Aspire High"
        description="A Non-profit dedicated to providing affordable innovative education programs to help low income & first generation students succeed in life"
        buttons={[
          { label: "Register", link: "/register", color: "#28a745" },
          { label: "Sign Up", link: "/signup", color: "#ffc107" },
          { label: "Login", link: "/login", color: "red" },
        ]}
      />
      {/* <SidebarToggleIcon onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </SidebarToggleIcon> */}
      {/* <ContentContainer>
        <Sidebar isOpen={isSidebarOpen}>
          <ListGroup
            items={memoizedItems}
            heading="Select a Service"
            onSelectItem={handleSelectItem}
            selectedItemId={selectedItem?.id || null}
          />
        </Sidebar>
        <MainContentWrapper isOpen={isSidebarOpen}>
          {selectedItem ? (
            <>
              <MainContent
                title={selectedItem.name}
                introduction={selectedItem.introduction}
                subheadings={selectedItem.subheadings}
                renderActionButton={() => (
                  <button
                    onClick={() => {
                      navigate(selectedItem.routingPath);
                    }}
                  >
                    {selectedItem.buttonLabel}
                  </button>
                )}
              >
                {dynamicComponentRegistry[selectedItem.id]}
              </MainContent>
            </>
          ) : (
            <CardContainer>
              {serviceList.map((service) => (
                <CardSection>
                  <Card
                    imageSrc="https://via.placeholder.com/300x200"
                    title={service.name}
                    description={service.description}
                  />
                </CardSection>
              ))}
            </CardContainer>
          )}
        </MainContentWrapper>
      </ContentContainer> */}

      <ContentContainer>
        <CardContainer>
          {serviceList.map((service) => (
            <Card
              imageSrc="https://via.placeholder.com/300x200"
              title={service.name}
              description={service.description}
            />
          ))}
        </CardContainer>
      </ContentContainer>

      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </HomePageContainer>
  );
};

export default HomePage;
