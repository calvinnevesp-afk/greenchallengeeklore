import React from "react";
import "./Features.css";

const featuresData = [
  { title: "Suivi des actions", desc: "Enregistrez vos actions éco-responsables et suivez vos progrès au quotidien." },
  { title: "Communauté", desc: "Rejoignez une communauté motivante pour partager vos défis et vos réussites." },
  { title: "Récompenses", desc: "Gagnez des badges et des points en atteignant vos objectifs écologiques." }
];

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      {featuresData.map((f, idx) => (
        <div key={idx} className="feature">
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
