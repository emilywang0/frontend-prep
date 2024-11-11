import { useEffect, useState } from "react";
const URL = "placeholder";

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h2>Fetched Data</h2>
      <ul>
        {data.map((item, idx) => {
          <li key={idx}>{item}</li>;
        })}
      </ul> */}
      <CardList items={data} />
    </div>
  );
}

function CardList({ items }) {
  return (
    <div>
      {items.map((item, idx) => (
        <Card key={idx} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
