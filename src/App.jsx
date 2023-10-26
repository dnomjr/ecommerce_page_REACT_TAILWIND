import { Gallery, Product } from "./components";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(true);
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  const [countIcon, setCountIcon] = useState(0);
  const [zoom, setZoom] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleCart = () => {
    setCart(!cart);
  };

  const handleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <main className={`pb-8`}>
      <Navbar
        menu={menu}
        handleMenu={handleMenu}
        handleCart={handleCart}
        countIcon={countIcon}
      />
      <section
        className={`relative sm:max-w-[1440px] mx-auto min-h-fit  flex flex-col  md:flex-row md:space-x-[126px] md:justify-center`}
      >
        <Gallery
          cart={cart}
          countIcon={countIcon}
          setCountIcon={setCountIcon}
          handleZoom={handleZoom}
          zoom={zoom}
        />
        <Product
          count={count}
          setCount={setCount}
          setCountIcon={setCountIcon}
        />
      </section>
    </main>
  );
};

export default App;
