import React from "react";
import { List, ListGroupProps, ListItem } from "./styles";

const ListGroup: React.FC<ListGroupProps> = React.memo(
  ({ items, heading, onSelectItem, selectedItemId }) => {
    return (
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items found</p>}
        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              active={item.id === selectedItemId}
              onClick={() => onSelectItem(item.id)}
            >
              {item.name}
            </ListItem>
          ))}
        </List>
      </>
    );
  }
);

export default ListGroup;
