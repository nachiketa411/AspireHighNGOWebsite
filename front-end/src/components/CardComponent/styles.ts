import styled from "styled-components";

/*
Props for the Card component
*/
export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

// export const CardContainer = styled.div`
//   position: relative;
//   width: 100%; // Adjusted to take full width of parent container
//   max-width: 300px; // Maintain the desired width
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   display: flex;
//   flex-direction: column;
//   background-color: #fff;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
//   }

//   &:hover::before {
//     opacity: 1;
//   }
// `;

export const CardSection = styled.div`
  position: relative; /* Make the card container a positioning context */
  flex: 0 0 auto; /* Prevent cards from shrinking */
  scroll-snap-align: start; /* Align cards to the start of the container */
  width: 300px; /* Set a fixed width for each card */
  max-width: 300px; /* Maintain a consistent card size */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensure content doesn't overflow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;
  margin-bottom: 20px; /* Add a bottom margin for spacing between the cards */
  will-change: transform, box-shadow;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition-delay: 0.1s;
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
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;

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

// export const CardDescription = styled.p`
//   margin: 0;
//   font-size: 16px;
//   color: #666;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-grow: 1; /* Ensures the description takes up the remaining space if needed */
// `;

export const CardDescription = styled.p`
  margin: 10px 0 0;
  font-size: 1rem;
  text-align: center;
`;
