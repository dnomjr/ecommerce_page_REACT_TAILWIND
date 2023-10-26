/* eslint-disable react/prop-types */
import { ImageThumbnail1 } from "../assets/images";
import { IconDelete } from "../assets/icons";

const Cart = ({ cart, countIcon, setCountIcon }) => {
  const deleteItem = () => {
    setCountIcon(0);
  };

  return (
    <div
      className={`absolute top-5 right-2/4 mr-[-180px] w-[360px] h-[257px] rounded-[10px] bg-white z-10 ss:top-[-20px] ss:right-0 ss:mr-6 md:mr-16 ss:shadow-cartShadow ${
        cart ? "block" : "hidden"
      }`}
    >
      <div className="border-b h-[68px] flex items-center pl-6 font-bold">
        <h1>Cart</h1>
      </div>

      <div className="h-[190.9px] flex flex-col justify-center items-center">
        {countIcon ? (
          <div className="flex flex-col items-center justify-center space-y-[28px]">
            <div className="w-[312px] h-[50px]  flex space-x-[16px] ">
              <div className="w-[50px] h-[50px] ">
                <img
                  src={ImageThumbnail1}
                  alt=""
                  className="overflow-hidden rounded-md"
                />
              </div>
              <div>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                  $125.00 x {countIcon}{" "}
                  <strong>${(countIcon * 125).toFixed(2)}</strong>{" "}
                </p>
              </div>
              <div
                className="flex flex-col justify-center"
                onClick={deleteItem}
              >
                <img src={IconDelete} alt="" />
              </div>
            </div>

            <div className="w-[312px] h-[54px] bg-orange rounded-[10px] overflow-hidden text-white font-bold">
              <button className="w-full h-full flex justify-center items-center space-x-[10px] ">
                <p className="ml-0 ">Checkout</p>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-grayishBlue font-bold leading-[11px] tracking-[0.6px]">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;

/* color: var(--Grayish-blue, #68707D);
font-family: Kumbh Sans;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 11px; 
letter-spacing: 0.6px; */
