import { useNavigate } from "react-router-dom";
import {
  CardSection,
  CardImage,
  CardContentOverlay,
  CardTitle,
  CardDescription,
  CardProps,
} from "./styles";

import { useNavigate } from 'react-router-dom';

const Card = ({ imageSrc, title, description,formPaths }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(formPaths);
  };
  return (
    <CardSection onClick={handleClick}>
      <CardImage src={imageSrc} alt={title} />
      <CardContentOverlay>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContentOverlay>
    </CardSection>
  );
};

export default Card;
