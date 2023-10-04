import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const [item, setItem] = useState(null)
  
  useEffect (() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => console.log(response.json()))
  }, []) 

  return (
    <Layout>
      <Card />
    </Layout>
  );
}

export default Home;
