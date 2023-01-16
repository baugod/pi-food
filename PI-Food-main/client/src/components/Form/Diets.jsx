import "./FormStyle.css";

export default function Diet({ diet, setDiets, newRecipe }) {
  const click = (e) => {
    setDiets({
      ...newRecipe,
      diets: newRecipe.diets.filter((d) => d !== e.target.value).join(),
    });
  };
  return (
    <div>
      {diet.map((d) => (
        <button onClick={click} key={d} value={d}>
          {d}
        </button>
      ))}
    </div>
  );
}
