import React, { useContext } from "react";
import { Context } from "../MyContext";
import { Card } from "react-bootstrap"; // Importa el componente Card de react-bootstrap

const Favorites = () => {
  const { data } = useContext(Context);

  // Filtra las fotos que tienen liked igual a true
  const likedPhotos = data.filter((foto) => foto.liked);

  return (
    <div>
      <div className="App">
        <h1>Fotos favoritas</h1>
      </div>
      <div className="liked-photos gallery grid-columns-5 p-2">
        {likedPhotos.map((foto, index) => (
          <div className="col-12 col-sm-6 col-md-4 cajaimg" key={index}>
            <Card className="bg-dark text-white">
              <Card.Img src={foto.src.tiny} alt={foto.alt} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
