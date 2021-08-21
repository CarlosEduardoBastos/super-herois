import React from "react";
import { Conteiner } from "../styles/SearchInput.style";

const SearchInput = ({ value, onChange }) => {
  return (
    <Conteiner>
      <section>
        <input
          type="search"
          value={value}
          onChange={onChange}
          placeholder="pesquisar"
        />
      </section>
    </Conteiner>
  );
};

export default SearchInput;
