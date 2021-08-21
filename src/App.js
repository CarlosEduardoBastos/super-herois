import React from "react";
import "./App.css";
import Header from "./components/Header";
import Herois from "./components/Herois";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [dados, setDados] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState("");

  React.useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
        );
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDados();
  }, []);
  function handleChange({ target }) {
    setPesquisa(target.value);
  }
  const dadosFiltrados = dados.filter(({ name }) => name.includes(pesquisa));
  return (
    <>
      <Header />
      <SearchInput value={pesquisa} onChange={handleChange} />
      {dados && <Herois dados={dadosFiltrados} />}
    </>
  );
};

export default App;
