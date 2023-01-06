import style from "./paginationStyle.css";
import {
  LeftArrow,
  RightArrow,
  DoubleLeftArrow,
  DoubleRightArrow,
} from "./pagesArrows";


export default function Pagination({
    recipesPerPage,
    currentPage,
    allRecipes,
    paginado
})  {
    const pagesCount = Math.ceil(allRecipes / recipesPerPage);

    let firstNumber = 1;
    let lastNumber = 1;

    let adicionalNumbers = 2;

    if (window.screen.width < 500) adicionalNumbers = 1;
    if (window.screen.width > 650) adicionalNumbers = 3;
    if (window.screen.width > 1000) adicionalNumbers = 4;

    let countOfNumbers = adicionalNumbers * 2 + 1;

    if(countOfNumbers >= pagesCount){
        countOfNumbers = pagesCount;
    } else {
        firstNumber = Math.max(currentPage - adicionalNumbers, 1);
        lastNumber = Math.min(currentPage + adicionalNumbers, pagesCount);
        if(lastNumber === pagesCount){
            firstNumber += lastNumber - firstNumber - adicionalNumbers * 2;
        }
    }

    const pageNumbers = new Array(countOfNumbers).fill().map((d,i) => i + firstNumber);

    if(currentPage > pagesCount) paginado(1);
    return (
        <ul className="">
           <li
              onClick ={() => paginado(1)}
              className = {currentPage === 1 ? style.disable: ""}
              title = "First Page"
             >
              <DoubleLeftArrow />
           </li>
           <li
              onClick={() => paginado (currentPage -1)}
              className={currentPage === 1 ? style.disable:""}
              title="Previous Page"
            >
            <LeftArrow />
            </li>
            {pageNumbers?.map((number) => (
                <li
                  className = {currentPage === number ? style.active: ""}
                  key= {number}
                  onClick= {()=> paginado(number)}
                >
                  <p>{number}</p>
                </li>
            ))}
                <li
                  onClick={()=> paginado(currentPage +1)}
                  className = {pagesCount === currentPage ? style.disable: ""}
                  title= "Next"
                >
                  <RigthArrow/>
                </li>
                <li
                  onClick={() => paginado(pagesCount)}
                  className= {pagesCount === currentPage ? style.disable: ""}
                  title= "Last Page"
                >
                  <DoubleRigthArrow/>
                </li>
        </ul>
    )
}