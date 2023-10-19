import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <Layout>
      {item?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Layout>
  );
}

export default Home;
