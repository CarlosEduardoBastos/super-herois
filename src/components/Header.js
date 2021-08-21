import React from "react";
import Lottie from "react-lottie";
import { HeaderContainer } from "../styles/Header.styles";
import animationData from "../lotties/71732-spiderman.json";

const Header = () => {
  const [animation, setAnimation] = React.useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  function handleClick() {
    setAnimation((animation.isPaused = true));
  }
  return (
    <HeaderContainer>
      <section>
        <h1>Procurar Super-Herói</h1>
        <section onClick={handleClick}>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            isStopped={animation.isStopped}
            isPaused={animation.isPaused}
            title="🐞Angga Permana"
          />
        </section>
      </section>
    </HeaderContainer>
  );
};

export default Header;
