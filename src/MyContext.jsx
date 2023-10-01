import { useState, createContext } from "react";
import photos from "../public/photos.json";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [data, setData] = useState(photos.photos);

  const toggleLike = (index) => {
    const updatedData = [...data];

    updatedData[index] = {
      ...updatedData[index],
      liked: !updatedData[index].liked,
    };

    setData(updatedData);
  };

  const globalState = { data, toggleLike };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
