export const BotonBicho = (props) => {
  const { id, nombre, emoji, idBichoActivo, cambiaBichoActivo } = props;
  return (
    <button
      className={`set-${nombre}${idBichoActivo === id ? " activo" : ""}`}
      data-bicho={nombre}
      onClick={() => cambiaBichoActivo(id)}
    >
      {emoji}
    </button>
  );
};
