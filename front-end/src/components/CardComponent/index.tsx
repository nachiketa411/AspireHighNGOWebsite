import {
  CardSection,
  CardImage,
  CardContentOverlay,
  CardTitle,
  CardDescription,
  CardProps,
} from "./styles";

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  onClick,
}: CardProps) => {
  return (
    <CardSection onClick={onClick}>
      <CardImage src={imageSrc} alt={title} />
      <CardContentOverlay>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContentOverlay>
    </CardSection>
  );
};

export default Card;
