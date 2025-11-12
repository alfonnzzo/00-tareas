import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { CharacterInfo } from "./CharacterInfo";
import { Loading } from "./Loading";

export const Main = () => {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, isLoading } = useFetch(url);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <CharacterInfo character={data} />
      )}

      <h2>Contador: {count}</h2>

      <button onClick={() => handleIncrement(1)}>Siguiente</button>
      <button onClick={() => handleDecrement(1)} disabled={count <= 1}>
        Anterior
      </button>
      <button onClick={handleReset}>Volver al comienzo</button>
    </div>
  );
};

