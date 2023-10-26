/* eslint-disable react/prop-types */

const HamburgerMenu = ({ menu, handleMenu, IconClose, navLinks }) => {
  return (
    <div
      className={`absolute top-0 left-0 z-30 w-full h-[937.41px] bg-black  bg-opacity-75 sm:hidden
        ${menu ? "hidden" : "block"}
      `}
    >
      <div
        className={` w-[250px] h-[937.41px] bg-white  pt-8
        ${menu ? "hidden" : "block"}
      `}
      >
        <img
          src={IconClose}
          alt=""
          className="w-[14px] h-[15px] mt-6 ml-[25px]"
          onClick={handleMenu}
        />

        <div className="mt-[53px] ml-[25px]">
          <ul className="flex flex-col space-y-[17px]">
            {navLinks.map((link) => {
              const { id, title } = link;
              return (
                <li
                  key={id}
                  className="inline-block text-veryDarkBlue font-bold text-[17px]"
                >
                  <a href={id} className="">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
