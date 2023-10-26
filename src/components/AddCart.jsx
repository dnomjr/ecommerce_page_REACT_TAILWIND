/* eslint-disable react/prop-types */
import { IconMinus, IconPlus, IconCart } from "../assets/icons";

const AddCart = ({ handleMinus, handlePlus, count, handleAddCart }) => {
  return (
    <div className="flex flex-col space-y-[17px] md:space-y-0 md:space-x-[15px] mt-7 md:flex-row items-center xs:items-start md:justify-center">
      <div className="w-[326px] h-[56px] bg-lightGrayishBlue rounded-[10px] overflow-hidden text-black font-bold">
        <div className="w-full h-full flex justify-between items-center space-x-[10px] px-6">
          <img src={IconMinus} alt="" className="w-4" onClick={handleMinus} />

          <p className="ml-0">{count}</p>
          <img src={IconPlus} alt="" className="w-4" onClick={handlePlus} />
        </div>
      </div>

      <div
        className="w-[326px] h-[56px] bg-orange rounded-[10px] overflow-hidden text-white font-bold"
        onClick={handleAddCart}
      >
        <button className="w-full h-full flex justify-center items-center space-x-[10px]">
          <img src={IconCart} alt="" className="w-4" />

          <p className="ml-0">Add to cart</p>
        </button>
      </div>
    </div>
  );
};
export default AddCart;
