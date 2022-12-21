import Card from "../Card/Card";
import { useEffect, useState } from "react";
import API from "../../";

function ItemList() {
  const [items, setItems] = useState([]);

  async function getItems() {
    const itensDoBanco = await API.item.list();
    const itemJSON = await itensDoBanco.json();

    setItems(itemJSON);
  }

  useEffect(function () {
    getItems();
  }, []);

  return (
    <div className="content container mb-3 mt-3">
      <div className="row">
        {items.map((el) => (
          <div className="col-4" key={el._id}>
            <Card
              id={el._id}
              name={el.name}
              url={el.imageUrl}
              category={el.category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
