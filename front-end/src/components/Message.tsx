import React from "react";
import { useNavigate } from "react-router-dom";

interface MessageProps {
  content: string;
  showRegisterButton?: boolean;
}

const Message: React.FC<MessageProps> = ({ content, showRegisterButton }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the registration page
  };

  return (
    <div>
      <p>{content}</p>
      {showRegisterButton && (
        <button onClick={handleRegisterClick}>Register</button>
      )}
    </div>
  );
};

export default Message;
