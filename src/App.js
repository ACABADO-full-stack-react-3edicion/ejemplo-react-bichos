import { Formulario } from "./componentes/Formulario";
import { Botonera } from "./componentes/Botonera";
import { Cabecera } from "./componentes/Cabecera";
import { Descripcion } from "./componentes/Descripcion";
import { Imagen } from "./componentes/Imagen";
import { useEffect, useState } from "react";

function App() {
  const [bichos, setBichos] = useState([
    {
      id: "g",
      nombre: "gatete",
      imagen: "gatete.jpg",
      emoji: "🐱",
      descripcion: {
        corta: "Un gatete feliz",
        larga: "El animal más maravilloso que existe sobre la faz de la tierra",
      },
      favorito: true,
    },
    {
      id: "p",
      nombre: "perrete",
      imagen: "perrete.jpg",
      emoji: "🐶",
      descripcion: {
        corta: "Un perrete feliz",
        larga: "Un animal que hace todo lo que yo le digo",
      },
      favorito: false,
    },
  ]);
  useEffect(() => {
    console.log(bichos);
  }, [bichos]);
  const getBichoActivo = (id) => bichos.find((bicho) => bicho.id === id);
  const [bichoActivo, setBichoActivo] = useState(getBichoActivo("g"));
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const cambiaBichoActivo = (id) => {
    setBichoActivo(getBichoActivo(id));
  };
  const toggleBichoActivo = () => {
    setBichoActivo(
      bichoActivo.id === "p" ? getBichoActivo("g") : getBichoActivo("p")
    );
  };
  const toggleFormulario = () => {
    setFormularioAbierto(!formularioAbierto);
  };
  const modificarBicho = (id, nombre, descripcionLarga, favorito) => {
    setBichos((bichos) =>
      bichos.map((bicho) => {
        if (bicho.id === id) {
          return {
            ...bicho,
            nombre,
            descripcion: {
              ...bicho.descripcion,
              larga: descripcionLarga,
            },
            favorito,
          };
        } else {
          return bicho;
        }
      })
    );
    setBichoActivo(getBichoActivo(id));
  };
  return (
    <>
      {formularioAbierto && (
        <Formulario
          abierto={formularioAbierto}
          bicho={bichoActivo}
          toggleFormulario={toggleFormulario}
          modificarBicho={modificarBicho}
        />
      )}
      <main>
        <Cabecera nombre={bichoActivo.nombre} />
        <Imagen bicho={bichoActivo} toggleFormulario={toggleFormulario} />
        <Botonera
          bichos={bichos}
          idBichoActivo={bichoActivo.id}
          cambiaBichoActivo={cambiaBichoActivo}
          toggleBichoActivo={toggleBichoActivo}
        />
        <Descripcion descripcion={bichoActivo.descripcion.larga} />
      </main>
    </>
  );
}

export default App;
