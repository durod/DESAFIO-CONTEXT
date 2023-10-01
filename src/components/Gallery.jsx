import React, { useContext } from "react";
import { Context } from "../MyContext";
import { Card } from "react-bootstrap";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { data, toggleLike } = useContext(Context);

  return (
    <div className="gallery grid-columns-5 p-2">
      {data.map((foto, i) => (
        <div className="col-12 col-sm-6 col-md-4 cajaimg" key={i}>
          <Card className="bg-dark text-white">
            <Card.Img src={foto.src.tiny} alt="Card image" />
            <Card.ImgOverlay className="cajaCard">
              <div className="cajaHeart">
                <IconHeart liked={foto.liked} onClick={() => toggleLike(i)} />
              </div>
              <div className="cajaTexto">
                <Card.Title>{foto.alt}</Card.Title>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
