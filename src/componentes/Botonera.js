import { BotonBicho } from "./BotonBicho";
import { BotonConmutar } from "./BotonConmutar";

export const Botonera = (props) => {
  const { bichos, idBichoActivo, cambiaBichoActivo, toggleBichoActivo } = props;
  return (
    <section className="controles">
      {bichos.map((bicho) => (
        <BotonBicho
          key={bicho.id}
          id={bicho.id}
          idBichoActivo={idBichoActivo}
          nombre={bicho.nombre}
          emoji={bicho.emoji}
          cambiaBichoActivo={cambiaBichoActivo}
        />
      ))}
      <BotonConmutar toggleBichoActivo={toggleBichoActivo} />
    </section>
  );
};
