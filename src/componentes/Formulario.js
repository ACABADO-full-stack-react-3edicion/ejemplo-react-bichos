import { useState } from "react";

export const Formulario = (props) => {
  const { abierto, bicho, toggleFormulario, modificarBicho } = props;
  const [nombre, setNombre] = useState(bicho.nombre);
  const [descripcion, setDescripcion] = useState(bicho.descripcion.larga);
  const [favorito, setFavorito] = useState(bicho.favorito);
  const clickToggleFormulario = (e) => {
    e.preventDefault();
    toggleFormulario();
  };
  const guardaBicho = (e) => {
    e.preventDefault();
    modificarBicho(bicho.id, nombre, descripcion, favorito);
    toggleFormulario();
  };
  return (
    <div className={`formulario-editar${abierto ? " on" : ""}`}>
      <form onSubmit={guardaBicho}>
        <label htmlFor="nombre">Nombre bicho:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="explicacion">Descripción:</label>
        <input
          type="text"
          id="explicacion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label htmlFor="favorito">
          <input
            type="checkbox"
            id="favorito"
            checked={favorito}
            onChange={(e) => setFavorito(e.target.checked)}
          />{" "}
          ¿Es tu bicho favorito?
        </label>
        <button type="submit">Guardar</button>
        {JSON.stringify(nombre)}
        {JSON.stringify(descripcion)}
        {String(favorito)}
      </form>
      <a
        href="cerrar-formulario"
        className="cerrar-form"
        onClick={clickToggleFormulario}
      >
        ❌
      </a>
    </div>
  );
};
