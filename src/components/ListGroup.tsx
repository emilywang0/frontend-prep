import { useEffect, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // useState hook:
  // const [reactive value, setter] = useState()

  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    // alert("hello side effect!");
    // return () => alert("goodbye component!");
  });

  // will run each time state changes (DOM reloaded)
  useEffect(() => {
    // Effect code here
    return () => {
      // Cleanup code here (optional)
    };
    // dependencies at the end
    // if any val in dependencies is changed, effect will re-run
    // if empty: effect runs only once when component mounts
  }, []);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
