import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardProps,
} from "./styles";

const Card = ({ imageSrc, title, description }: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
