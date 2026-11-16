import { Fragment } from "react";

function ListGroup() {
  let items = ["Apples", "Bananas", "Cherries", "Dates", "Elderberries"];

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement>,
    item: string,
  ) => {
    console.log("Clicked: " + item + " " + items.indexOf(item));
  };

  const getMesssage = () => {
    return items.length === 0 ? <p>No Item Found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMesssage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={(event) => handleClick(event, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
