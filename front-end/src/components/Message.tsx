import { ReactNode } from "react";

interface MessageProps {
  heading: string;
  children: ReactNode;
}

const Message = ({ heading, children }: MessageProps) => {
  return (
    <>
      <h1>{heading}</h1>
      <div className="mb-3">{children}</div>
    </>
  );
};

export default Message;
