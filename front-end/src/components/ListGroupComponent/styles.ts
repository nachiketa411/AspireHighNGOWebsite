import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

interface ListItem {
  id: number;
  name: string;
}

export interface ListGroupProps {
  items: ListItem[];
  heading: string;
  onSelectItem: (id: number) => void;
  selectedItemId: number | null;
}

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
`;
