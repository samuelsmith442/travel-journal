import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map(item => (
    <Card
      key={item.id}
      imageUrl={item.imageUrl}
      title={item.title}
      location={item.location}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      googleMapsUrl={item.googleMapsUrl}
    />
  ));

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
