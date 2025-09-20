import { useState } from "react";

function LowerNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const listItems = ["home", "about", "shop", "contact", "orders"];
  return (
    <nav className=" bg-bgHero border-[1px] border-txtPrimary">
      <div className="container flex items-center justify-between font-special relative ">
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <ul
          className={`flex flex-col gap-5 z-20 absolute top-full w-full left-0 p-4 bg-white shadow-md rounded-[4px] ${
            toggleMenu ? "flex" : "hidden"
          } md:static md:flex md:flex-row md:bg-transparent md:shadow-none md:rounded-none`}
        >
          {listItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${item}`}
                  className="capitalize  hover:text-txtPrimary transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="relative w-fit ">
          <svg
            className=""
            width="260"
            height="61"
            viewBox="0 0 314 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.5H314V60.5H67.8919L0 0.5Z" fill="#C39C45" />
          </svg>
          <span className="text-txtPrimary text-nowrap text-[clamp(.98rem,1vw,3rem)] text-white absolute top-1/2 -translate-y-1/2 right-[8px]">
            Get 20% Discount Now{" "}
            <button className=" bg-white text-txtPrimary rounded-[25px] px-[8px] py-[4px]">
              Sale
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default LowerNavbar;
