import React from "react";
import { Conteiner, DivDados } from "../styles/Herois.style";

const Herois = ({ dados }) => {
  return (
    <Conteiner>
      <section>
        {dados &&
          dados.map(({ id, name, images, powerstats }) => (
            <DivDados key={id}>
              <section className="dados_content">
                <h2>{name}</h2>
                <p>Power: {powerstats.power}</p>
                <p>Intelligence: {powerstats.intelligence}</p>
              </section>
              <img src={images.sm} title="imagem" />
            </DivDados>
          ))}
      </section>
    </Conteiner>
  );
};

export default Herois;
