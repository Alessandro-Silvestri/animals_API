import { useState, useEffect } from "react";

const Cats = () => {
  const [cats, setCats] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://ccdb.hemiola.com/characters/radicals/85"
        );
        const data = await response.json();
        setCats(data); // Store the API response in state
        console.log(data); // Debugging: See if data is retrieved
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Cat Facts</h2>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>{cat.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cats;
