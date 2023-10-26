/* eslint-disable react/prop-types */
import { images } from "../constants/images";
import { thumbnails } from "../constants/thumbnails";
import { IconPrevious, IconNext, IconClose } from "../assets/icons";
import { useState } from "react";
import Cart from "./Cart";

const Gallery = ({ cart, countIcon, setCountIcon, handleZoom, zoom }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleNextPhoto = () => {
    if (currentPhoto === images.length - 1) {
      const photo = 0;
      setCurrentPhoto(photo);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  const handlePreviousPhoto = () => {
    currentPhoto === 0
      ? setCurrentPhoto(images.length - 1)
      : setCurrentPhoto(currentPhoto - 1);
  };

  const handleClickPhoto = (id) => {
    const updatePhoto = images.find((oneImage) => {
      return oneImage.id === id;
    });

    setCurrentPhoto(updatePhoto.id - 1);
  };

  return (
    <div>
      {zoom ? (
        <div className="hidden sm:block  bg-black bg-opacity-75 w-full fixed top-0 left-0 z-50 h-full ">
          <div
            style={{ backgroundImage: `url(${images[currentPhoto].url})` }}
            className="relative w-full h-[299px] bg-center bg-no-repeat bg-cover flex justify-between items-center px-4 sm:rounded-2xl sm:h-[550px] sm:w-[550px]  sm:mx-auto sm:mt-[100px] md:w-[550px] md:h-[550px] md:mt-[91px]"
          >
            <img
              className=" w-[21px] h-[21px] absolute top-[-30px] right-0 "
              src={IconClose}
              alt=""
              onClick={handleZoom}
            />
          </div>
        </div>
      ) : null}

      <div
        style={{ backgroundImage: `url(${images[currentPhoto].url})` }}
        className=" w-full h-[299px] bg-center bg-no-repeat bg-cover flex justify-between items-center px-4 sm:rounded-2xl sm:w-[447px] sm:mx-auto sm:mt-[30px] md:h-[445px] md:mt-[91px]"
        onClick={handleZoom}
      >
        <div
          className="w-10 h-10 bg-white rounded-full flex flex-row justify-center items-center sm:hidden"
          onClick={handlePreviousPhoto}
        >
          <img src={IconPrevious} alt="" className="w-[9px]" />
        </div>

        <div
          className="w-10 h-10 bg-white rounded-full flex flex-row justify-center items-center sm:hidden"
          onClick={handleNextPhoto}
        >
          <img src={IconNext} alt="" className="w-[9px]" />
        </div>
      </div>

      <div className="hidden sm:flex sm:mt-[30px] w-[445px] justify-between flex-1 sm:mx-auto">
        {thumbnails.map((thumbnail) => {
          return (
            <div
              key={thumbnail.id}
              className={`w-[92px] bg-center bg-cover rounded-[10px] overflow-hidden ${
                thumbnail.id - 1 == currentPhoto
                  ? "border-2 border-orange  "
                  : ""
              } `}
            >
              <img
                src={thumbnail.url}
                alt=""
                className={` ${
                  thumbnail.id - 1 == currentPhoto ? "opacity-30" : ""
                } `}
                onClick={() => handleClickPhoto(thumbnail.id)}
              />
            </div>
          );
        })}
      </div>
      <Cart cart={cart} countIcon={countIcon} setCountIcon={setCountIcon} />
    </div>
  );
};
export default Gallery;
