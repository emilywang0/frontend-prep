import { useState } from "react";
export default function Fruit() {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCaseSensitive = () => {
    setCaseSensitive(!caseSensitive);
  };

  const filteredFruits = fruits.filter((fruit) => {
    if (caseSensitive) {
      return fruit.includes(searchTerm);
    } else {
      return fruit.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    }
  });

  return (
    <div>
      <input
        type="checkbox"
        id="case-sensitive"
        onChange={handleCaseSensitive}
        checked={caseSensitive}
      />
      <label htmlFor="case-sensitive">Case Sensitive? </label>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleSearch}
        value={searchTerm}
      />
      ;
      {filteredFruits.length === 0 ? (
        <p> No fruits found! </p>
      ) : (
        filteredFruits.map((fruit) => {
          return <p> {fruit} </p>;
        })
      )}
    </div>
  );
}
