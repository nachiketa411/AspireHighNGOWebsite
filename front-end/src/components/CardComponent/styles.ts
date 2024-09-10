import styled from "styled-components";

/*
Props for the Card component
*/
export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export const CardSection = styled.div`
  position: relative;
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 300px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  padding: 0;
  height: 200px;
  will-change: transform, box-shadow;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition-delay: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  }

  &:focus-within {
    outline: 2px solid #007bff;
    outline-offset: 4px;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);
  }

  &:active {
    transform: translateY(-2px); /* New active state */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* New active state box-shadow */
  }

  @media (max-width: 768px) {
    width: 250px; /* Adjust the card width for smaller screens */
    max-width: 250px; /* Ensure the card doesn't exceed the screen width */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const CardContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.7
  ); /* Semi-transparent overlay for better readability */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  z-index: 1;

  /* Show overlay on hover of the parent CardSection */
  ${/* Assuming you have CardSection as parent */ ""}cardsection:hover & {
    opacity: 1;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;
