import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h2>Relevez le défi écologique</h2>
      <p>
        Participez à notre challenge pour adopter un mode de vie plus durable et réduire votre impact environnemental.
      </p>
      <button>Commencer</button>
    </section>
  );
};

export default Hero;
