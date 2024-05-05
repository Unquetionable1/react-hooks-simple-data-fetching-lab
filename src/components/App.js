// create your App component here
import React, { useEffect, useState } from "react";

export default function App() {
  const [dogImage, setImage] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, []);
  if (!dogImage) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}
