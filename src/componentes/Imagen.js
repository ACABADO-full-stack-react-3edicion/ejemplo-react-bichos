export const Imagen = (props) => {
  const {
    bicho: { imagen, nombre, descripcion, favorito },
    toggleFormulario,
  } = props;
  const clickToggleFormulario = (e) => {
    e.preventDefault();
    toggleFormulario();
  };
  return (
    <section className="imagenes">
      <img
        src={`img/${imagen}`}
        title={descripcion.corta}
        alt={descripcion.corta}
        className={`${nombre}${favorito ? " favorito" : ""}`}
      />
      <a
        href="editar-bicho"
        className="editar-bicho"
        onClick={clickToggleFormulario}
      >
        ✍
      </a>
      <i className="bicho-favorito">👑</i>
    </section>
  );
};
