import offer from "../../assets/Imgs/prodDiscount/offer.png";

function CartProductDiscont({ prdCart }) {
  const { imgCart, pricePrd } = prdCart;
  return (
    <div className="bg-bgHero p-[12px] rounded-[4px] flex flex-col gap-1 md:flex-row">
      <div className="w-full h-full  relative ">
        <img src={imgCart} alt="" className="w-full h-full obeject-contain" />
        <div className="absolute top-0 left-2  w-[30%]">
          <img src={offer} alt="offer" className="h-full w-full " />
          <div className="flex flex-col justify-center items-center font-semibold absolute top-0 left-1/2 -translate-x-1/2 text-sm">
            <span>20%</span>
            <span>OFF</span>
          </div>
        </div>
      </div>
      <div className="content-discount ">
        <h2 className="font-semibold text-sm text-[#1E1E1E] ">
          Holdin’ You Tight Hair Gel for Curly and Wavy Hair
        </h2>
        <div className="flex flex-col gap-3">
          <div className="text-[#FF6606] font-bold flex items-center justify-between gap-[4px] ">
            <div>
              <span className="text-sm">EGP</span>
              <span>{pricePrd}</span>
            </div>
            <div>
              <span className="flex items-center">
                {[...Array(5)].map((_, index) => {
                  const isFilled = index < 4;
                  return (
                    <svg
                      key={index}
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10.0134L8.76667 11.6867C9.27334 11.9934 9.89334 11.54 9.76 10.9667L9.02667 7.82005L11.4733 5.70005C11.92 5.31338 11.68 4.58005 11.0933 4.53338L7.87334 4.26005L6.61334 1.28671C6.38667 0.746714 5.61334 0.746714 5.38667 1.28671L4.12667 4.25338L0.906669 4.52671C0.320003 4.57338 0.0800026 5.30671 0.526669 5.69338L2.97334 7.81338L2.24 10.96C2.10667 11.5334 2.72667 11.9867 3.23334 11.68L6 10.0134Z"
                        fill={`${isFilled ? "#FFD21F" : "#A0A0A0"}`}
                      />
                    </svg>
                  );
                })}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-1 justify-between ">
            <div className="bg-white text-[#1E1E1E] font-bold rounded-[4px] flex justify-center items-center gap-4 p-1">
              <span className="text-[#A9A9A9]">0</span>
              <span className="flex w-fit items-center border-[2px] border-[#A9A9A9] rounded-[4px]">
                <button className="border-r-[1px] border-[#A9A9A9] ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_171_554)">
                      <path
                        d="M11.6133 2.13466L12.32 2.84199L8.46867 6.69466C8.40696 6.75676 8.33358 6.80605 8.25274 6.83968C8.17191 6.87331 8.08522 6.89062 7.99767 6.89062C7.91012 6.89062 7.82344 6.87331 7.7426 6.83968C7.66177 6.80605 7.58839 6.75676 7.52667 6.69466L3.67334 2.84199L4.38001 2.13532L7.99667 5.75132L11.6133 2.13466Z"
                        fill="#A9A9A9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_171_554">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(0 1 -1 0 16 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="border-l-[1px] border-[#A9A9A9] ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_171_551)">
                      <path
                        d="M11.6133 6.86534L12.32 6.15801L8.46867 2.30534C8.40696 2.24324 8.33358 2.19395 8.25274 2.16032C8.17191 2.12669 8.08522 2.10937 7.99767 2.10937C7.91012 2.10937 7.82344 2.12669 7.7426 2.16032C7.66177 2.19395 7.58839 2.24324 7.52667 2.30534L3.67334 6.15801L4.38001 6.86468L7.99667 3.24868L11.6133 6.86534Z"
                        fill="#A9A9A9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_171_551">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(0 -1 -1 0 16 8.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </span>
            </div>
            <button className="bg-transparent border border-[#C39C45] rounded-[4px] text-[#C39C45] font-bold flex justify-center items-center gap-[4px] px-[7px] py-[2px]">
              Add
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6875 15.6875C6.99816 15.6875 7.25 15.4357 7.25 15.125C7.25 14.8143 6.99816 14.5625 6.6875 14.5625C6.37684 14.5625 6.125 14.8143 6.125 15.125C6.125 15.4357 6.37684 15.6875 6.6875 15.6875Z"
                  stroke="#C39C45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5625 15.6875C14.8732 15.6875 15.125 15.4357 15.125 15.125C15.125 14.8143 14.8732 14.5625 14.5625 14.5625C14.2518 14.5625 14 14.8143 14 15.125C14 15.4357 14.2518 15.6875 14.5625 15.6875Z"
                  stroke="#C39C45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.1875 3.3125H4.4375L6.125 12.875H15.125"
                  stroke="#C39C45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.125 10.625H14.8944C14.9594 10.625 15.0225 10.6025 15.0728 10.5613C15.1231 10.5201 15.1576 10.4627 15.1704 10.3989L16.1829 5.33645C16.191 5.29562 16.19 5.2535 16.1799 5.21311C16.1699 5.17272 16.1509 5.13507 16.1245 5.10288C16.0981 5.07069 16.0649 5.04477 16.0273 5.02698C15.9896 5.00918 15.9485 4.99997 15.9069 5H5"
                  stroke="#C39C45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductDiscont;
