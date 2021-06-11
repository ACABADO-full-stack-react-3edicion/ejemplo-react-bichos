export const BotonConmutar = (props) => {
  const { toggleBichoActivo } = props;
  return (
    <button className="toggle-bicho" onClick={toggleBichoActivo}>
      Conmutar
    </button>
  );
};
