/* eslint-disable react/prop-types */
import AddCart from "./AddCart";

const Product = ({ count, setCount, setCountIcon }) => {
  const handleMinus = () => {
    count > 0 ? setCount(count - 1) : "";
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleAddCart = () => {
    count ? setCountIcon(count) : null;
  };

  return (
    <div className="max-w-[424px] mx-auto mt-16 px-6 xs:px-0 md:mt-[152px]">
      <small className="text-xs tracking-[0.105rem]  sm:text-sm font-bold uppercase sm:tracking-[0.07rem] text-orange sm:m-0 sm:p-0 sm:relative sm:top-[-6px]">
        sneaker company
      </small>
      <h1 className="text-veryDarkBlue text-[28px] sm:text-[44px] leading-8 sm:leading-[48px] font-bold mt-[14px] sm:mt-[19px]">
        Fall Limited Edition <br /> Sneakers
      </h1>
      <p className="text-sm font-medium leading-[25px] tracking-[.035rem] text-grayishBlue sm:text-base sm:leading-[26px] mt-4 sm:mt-[35px] sm:tracking-normal">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row flex-1 sm:flex-col justify-between mt-[30px] text-3xl sm:justify-normal">
        <div className="flex justify-center items-center space-x-[26px] sm:justify-normal">
          <p className=" text-veryDarkBlue font-bold leading-[26px]">$125.00</p>

          <p className="text-orange text-base font-bold bg-paleOrange rounded-[5px] w-[51px] text-center">
            50%
          </p>
        </div>
        <p className="text-veryDarkBlue text-base font-bold leading-[26px] tracking-[.03rem] line-through sm:mt-2 pr-5">
          $250.00
        </p>
      </div>

      <AddCart
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        count={count}
        handleAddCart={handleAddCart}
      />
    </div>
  );
};
export default Product;
