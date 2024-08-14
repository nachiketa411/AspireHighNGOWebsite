import {
  ActionButton,
  ContentWrapper,
  SectionTitle,
  SubContent,
  SubSection,
  SubTitle,
} from "./styles";

interface MainContentProps {
  title: string;
  introduction: string;
  subheadings: { title: string; content: string }[];
  showActionButton: boolean; // New prop to control button visibility
  buttonLabel?: string; // New prop for the button label
  buttonAction?: () => void; // New prop for button action
}

const MainContent: React.FC<MainContentProps> = ({
  title,
  introduction,
  subheadings,
  showActionButton,
  buttonLabel = "Default Button Label", // Default button label
  buttonAction,
}) => {
  return (
    <ContentWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SubContent>{introduction}</SubContent>
      {subheadings.map((subheading, index) => (
        <SubSection key={index}>
          <SubTitle>{subheading.title}</SubTitle>
          <SubContent>{subheading.content}</SubContent>
        </SubSection>
      ))}
      {showActionButton && (
        <ActionButton onClick={buttonAction}>{buttonLabel}</ActionButton> // Display the button if showActionButton is true
      )}
    </ContentWrapper>
  );
};

export default MainContent;
