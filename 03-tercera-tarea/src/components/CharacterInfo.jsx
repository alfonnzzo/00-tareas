export const CharacterInfo = ({ character }) => {
  return (
    <div>
      <h3>Datos del personaje</h3>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
};
