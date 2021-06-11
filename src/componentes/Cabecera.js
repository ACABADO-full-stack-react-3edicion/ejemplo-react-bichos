export const Cabecera = (props) => {
  const { nombre } = props;
  const nombreMayusculas = nombre[0].toUpperCase() + nombre.slice(1);
  return (
    <header>
      <h1>{nombreMayusculas}</h1>
    </header>
  );
};
