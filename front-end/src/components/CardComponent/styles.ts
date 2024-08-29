import styled from "styled-components";

/*
Props for the Card component
*/
export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardContent = styled.div`
  padding: 15px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin: 15px 0 10px;
  font-size: 20px;
  color: #333;
  text-align: center;
`;

export const CardDescription = styled.p`
  margin: 0 15px 15px;
  font-size: 16px;
  color: #666;
  text-align: center;
  flex-grow: 1; /* Ensures the description takes up remaining space if needed */
`;
