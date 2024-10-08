import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  Suspense,
} from "react"; // Adjust the path as needed
import {
  HomePageContainer,
  Header,
  Sidebar,
  ContentContainer,
  ItemWithDetails,
  Footer,
  SidebarToggleIcon,
  // CardSection,
  CardContainer,
  Overlay,
} from "./styles"; // Import your styled components
import { useNavigate } from "react-router-dom";
import {
  ComponentKeys,
  generateComponentRegistry,
} from "../../components/componentRegistry";
import { fetchItems } from "../../services/itemService";
import { fetchStudents } from "../../services/studentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  fetchSchoolProgramServices,
  ProgramService,
} from "../../services/programService";
import Section from "../../components/SectionComponent";
import { handleAction } from "../../utility";

const Card = React.lazy(() => import("../../components/CardComponent"));

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
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search state for filtering cards
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

  const handleSelectItem = useCallback(
    (id: number) => {
      const selected = items.find((item) => item.id === id) || null;

      if (selectedItem?.id === id) {
        setSelectedItem(null);
        return;
      }

      setSelectedItem(selected);
    },
    [items, selectedItem]
  );

  const dynamicComponentRegistry = generateComponentRegistry(items, {
    [ComponentKeys.DynamicTable]: studentData,
  });

  const handleLoginClick = () => {
    console.log("Login clicked");
  };

  const handleSignUpClick = () => {
    console.log("Sign Up clicked");
  };

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleOverlayClick = useCallback(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isSidebarOpen]);

  const memoizedItems = useMemo(() => {
    return items.map((item) => ({ id: item.id, name: item.name }));
  }, [items]);

  // Filter services based on the search query
  const filteredServices = useMemo(() => {
    return serviceList.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, serviceList]);

  const handleRoute = (route: string | null) => {
    return handleAction(
      route ? () => navigate(route) : null, // Navigate if route exists
      "Routing is unavailable or the URL is incorrect" // Fallback message
    );
  };

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Display an error message if fetching fails
  }

  return (
    <HomePageContainer>
      <Header>Aspire High Youth Development</Header>
      <SidebarToggleIcon onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </SidebarToggleIcon>
      {isSidebarOpen && <Overlay onClick={handleOverlayClick} />}
      <Sidebar isOpen={isSidebarOpen}>
        <p>Sidebar Content</p>
        {/* Add your sidebar links or content here */}
      </Sidebar>

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

      <ContentContainer>
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "10px", marginTop: "20px" }}
        />
        <CardContainer>
          <Suspense fallback={<p>Loading Cards...</p>}>
            {filteredServices.map((service) => (
              <Card
                key={service.name}
                imageSrc={"https://via.placeholder.com/300x200"}
                title={service.name}
                description={service.description}
                onClick={handleRoute(service.routingPath)}
              />
            ))}
          </Suspense>
        </CardContainer>
      </ContentContainer>

      <Footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </Footer>
    </HomePageContainer>
  );
};

export default HomePage;
