import {
  CardSection,
  CardImage,
  CardContentOverlay,
  CardTitle,
  CardDescription,
  CardProps,
} from "./styles";

const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <CardSection>
      <CardImage src={imageSrc} alt={title} />
      <CardContentOverlay>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContentOverlay>
    </CardSection>
  );
};

export default Card;
