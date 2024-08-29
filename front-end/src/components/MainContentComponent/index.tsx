import {
  ActionButton,
  ContentWrapper,
  MainContentProps,
  SectionTitle,
  SubContent,
  SubSection,
  SubTitle,
} from "./styles";

// const MainContent: React.FC<MainContentProps> = ({
//   title,
//   introduction,
//   subheadings,
//   showActionButton,
//   buttonLabel = "Default Button Label", // Default button label
//   buttonAction,
//   children,
// }) => {
//   return (
//     <ContentWrapper>
//       <SectionTitle>{title}</SectionTitle>
//       <SubContent>{introduction}</SubContent>
//       {subheadings.map((subheading, index) => (
//         <SubSection key={index}>
//           <SubTitle>{subheading.title}</SubTitle>
//           <SubContent>{subheading.content}</SubContent>
//         </SubSection>
//       ))}
//       {children} {/* Render any children passed to MainContent */}
//       {showActionButton && (
//         <ActionButton onClick={buttonAction}>{buttonLabel}</ActionButton>
//       )}
//     </ContentWrapper>
//   );
// };

const MainContent: React.FC<MainContentProps> = ({
  title,
  introduction,
  subheadings,
  renderActionButton, // Function prop for rendering action buttons
  children,
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
      {children}
      {renderActionButton && renderActionButton()}
    </ContentWrapper>
  );
};

export default MainContent;
