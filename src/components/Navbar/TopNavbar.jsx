import { useEffect, useRef, useState } from "react";

const DownArrow = ({ fill = "black" }) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.711 10.157L18.368 4.5L16.954 3.086L12.004 8.036L7.054 3.086L5.64 4.5L11.297 10.157C11.485 10.345 11.739 10.45 12.004 10.45C12.269 10.45 12.523 10.345 12.711 10.157Z"
      fill={fill}
    />
  </svg>
);

function TopNavbar() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (menuRef.current && !menuRef.current.contains(ev.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" bg-bgOrange py-[11px]">
      <div className="container flex justify-between items-center relative z-30">
        <div className="logo flex items-start gap-1">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.167 10.8333C15.167 9.63672 14.1966 8.66634 13 8.66634C11.8034 8.66634 10.833 9.63672 10.833 10.8333C10.833 12.0299 11.8034 13.0003 13 13.0003C14.1966 13.0003 15.167 12.0299 15.167 10.8333ZM17.333 10.8333C17.333 13.2266 15.3932 15.1663 13 15.1663C10.6068 15.1663 8.66699 13.2266 8.66699 10.8333C8.66699 8.4401 10.6068 6.50032 13 6.50032C15.3932 6.50032 17.333 8.4401 17.333 10.8333Z"
              fill="black"
            />
            <path
              d="M20.5833 10.8337C20.5833 8.82259 19.7846 6.89347 18.3626 5.47135C16.9406 4.04928 15.0114 3.24976 13.0003 3.24967C10.9891 3.24967 9.06017 4.0492 7.63802 5.47135C6.21587 6.8935 5.41634 8.82243 5.41634 10.8337C5.41637 11.7818 5.51737 12.5072 5.72787 13.1423C5.93608 13.7703 6.26918 14.3628 6.79818 15.0241L12.9994 22.1784L19.2093 15.0133C19.7335 14.3562 20.0647 13.7671 20.2718 13.1423C20.4823 12.5072 20.5833 11.7818 20.5833 10.8337ZM22.7503 10.8337C22.7503 11.9349 22.633 12.905 22.3285 13.8239C22.0223 14.7475 21.5442 15.5654 20.887 16.3854C20.8784 16.3962 20.8697 16.4072 20.8607 16.4176L13.8187 24.5426C13.613 24.78 13.3144 24.9166 13.0003 24.9167C12.6861 24.9167 12.3868 24.7801 12.181 24.5426L5.13998 16.4176C5.13088 16.4071 5.12132 16.3963 5.11263 16.3854C4.45551 15.5654 3.97738 14.7475 3.67123 13.8239C3.36665 12.905 3.25035 11.9349 3.25033 10.8337C3.25033 8.2478 4.27732 5.76761 6.1058 3.93913C7.93428 2.11065 10.4145 1.08366 13.0003 1.08366C15.586 1.08374 18.0655 2.11083 19.8939 3.93913C21.7224 5.76761 22.7503 8.2478 22.7503 10.8337Z"
              fill="black"
            />
          </svg>
          <div className="flex flex-col ">
            <span>Deliver to:</span>
            <span className="flex items-center">
              egypt <DownArrow />
            </span>
          </div>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
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
          ref={menuRef}
          className={`flex flex-col gap-2 absolute md:static top-full left-0 w-full md:w-auto bg-bgOrange md:bg-transparent px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none rounded-[4px] transition-all duration-300 ease-in-out ${
            toggle ? "flex" : "hidden"
          } md:flex md:flex-row md:items-center md:gap-6`}
        >
          <li className="flex items-center cursor-pointer">
            White Mode <DownArrow fill="#0E0E0E" />
          </li>
          <li className="flex items-center cursor-pointer">
            English <DownArrow fill="#0E0E0E" />
          </li>
          <li className="cursor-pointer">Track Order</li>
          <li className="cursor-pointer">Become a Supplier</li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavbar;
