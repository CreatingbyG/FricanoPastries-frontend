import React from "react";
import conceptImage from "../assets/ourconcept2.png";

const Concept = () => {
  return (
    <div className="concept-container">
      <h1 className="concept__title">Our concept</h1>
      <p className="concept__description"><i class="bi bi-heart" style={{padding:"5px", color:"pink"}}></i>Welcome to
      "Fricano's Pastries", where art and passion come together to create the
      most exquisite and elegant pavlovas and choux. At the heart of our cuisine
      is a tradition rooted in pastry mastery and an unwavering dedication to
      artisanal quality. Each of our pavlovas and choux are a unique
      masterpiece, handcrafted using meticulous. From the precise whipping of
      the egg whites to the careful baking that ensures the perfect texture,
      every step is done with love and attention to detail. Our founder, Arianna
      Fricano, carries with her the legacy of a long family tradition in the
      pastry shop. As a graduate of the prestigious Pastry School "Mariano
      Moreno", she has perfected her art and now shares her knowledge through
      our own way of showing art, bakering. At "Fricano's Pastries", we not only
      create desserts, but we also cultivate an experience. Our cozy space
      invites sweet lovers to immerse themselves in an environment where
      tantalizing aromas and exquisite flavors intertwine to offer a truly
      memorable experience. Whether you're looking for the perfect gift for a
      special occasion or simply want to delight your senses with a sweet treat,
      Fricano's Pastries awaits you with open arms. Join us on this gastronomic
      journey where tradition, innovation and passion are found in every bite.<i class="bi bi-heart" style={{padding:"5px", color:"pink"}}></i></p>
      <img src={conceptImage} alt="Concept" className="concept-image" />
      {/* ... más contenido si es necesario */}
    </div>
  );
};

export default Concept;
