import { useState } from "react";
import { List, ListGroupProps, ListItem } from "./styles";

const ListGroup: React.FC<ListGroupProps> = ({
  items,
  heading,
  onSelectItem,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
