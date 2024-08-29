import {
  Button,
  ButtonGroup,
  Container,
  Content,
  Description,
  DescriptionWrapper,
  Media,
  Overlay,
  SectionProps,
  Title,
} from "./styles";

const Section: React.FC<SectionProps> = ({
  mediaType,
  mediaSrc,
  title,
  description,
  buttons,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  textColor = "#fff",
}) => {
  return (
    <Container>
      <Media
        as={mediaType === "video" ? "video" : "img"}
        src={mediaSrc}
        autoPlay
        loop
        muted
      />

      <Overlay style={{ backgroundColor: overlayColor }}>
        <Content style={{ color: textColor }}>
          <Title>{title}</Title>

          <DescriptionWrapper>
            <Description>{description}</Description>
          </DescriptionWrapper>

          {buttons && (
            <ButtonGroup>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  href={button.link}
                  style={{ backgroundColor: button.color || "#007bff" }}
                >
                  {button.label}
                </Button>
              ))}
            </ButtonGroup>
          )}
        </Content>
      </Overlay>
    </Container>
  );
};

export default Section;
