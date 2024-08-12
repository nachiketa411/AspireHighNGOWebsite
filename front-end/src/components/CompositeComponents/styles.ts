import styled from "styled-components";

export interface Subheading {
  title: string;
  content: string;
}

export interface ItemWithDetails {
  id: number;
  name: string;
  introduction: string;
  subheadings: Subheading[];
}

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

export const ListContainer = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

export const MessageContainer = styled.div`
  flex: 2;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
