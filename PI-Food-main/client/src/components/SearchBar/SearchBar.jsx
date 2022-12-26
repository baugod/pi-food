export default function SearchBar(props) {
    return (
       <div>
          <input type="search" name="search" id="" />
          <button onClick={() => props.onSearch('Texto a mostrar')}>Agregar</button>
       </div>
    );
 }