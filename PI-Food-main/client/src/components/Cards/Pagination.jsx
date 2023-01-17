import React, { useState } from "react";
import "./CardsStyle.css"

const Pagination = ({ pagina, setPagina, max }) => {
  const [input, setInput] = useState(1);
  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
  };

  const backPage = () => {
    setInput(input - 1);
    setPagina(pagina - 1);
  };
  
  return (
    <div className="pagination">
      <button  className="button-pag" disabled={pagina === 1 || pagina < 1} onClick={backPage}>Prev</button>
      <p>{pagina} de {Math.round(max)}</p>
      <button className="button-pag"
        disabled={pagina === max || pagina > max}
        onClick={nextPage}
      >Next</button>
    </div>
  );
};

export default Pagination;