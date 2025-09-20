import logoFooter from "../../assets/Imgs/logoFooter.png";
function UpperFooter() {
  return (
    <section className="container pb-[70px] text-white flex flex-wrap lg:flex-nowrap items-start gap-[40px]">
      <div className="w-full lg:w-1/5 flex items-center justify-center ">
        <img
          src={logoFooter}
          title="logo Footer"
          alt="logo Footer"
          loading="lazy"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <ul className="w-full sm:w-1/2 lg:w-1/5 flex flex-col gap-[24px]">
        <li className="flex gap-[16px] items-start">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-[24px]"
          >
            <path
              d="M18.75 9.91406C18.75 8.12385 18.0388 6.40696 16.773 5.14109C15.5071 3.87522 13.7902 3.16406 12 3.16406C10.2098 3.16406 8.4929 3.87522 7.22703 5.14109C5.96116 6.40696 5.25 8.12385 5.25 9.91406C5.25 12.6831 7.4655 16.2921 12 20.6151C16.5345 16.2921 18.75 12.6831 18.75 9.91406ZM12 22.6641C6.4995 17.6646 3.75 13.4136 3.75 9.91406C3.75 7.72603 4.61919 5.62761 6.16637 4.08043C7.71354 2.53326 9.81196 1.66406 12 1.66406C14.188 1.66406 16.2865 2.53326 17.8336 4.08043C19.3808 5.62761 20.25 7.72603 20.25 9.91406C20.25 13.4136 17.5005 17.6646 12 22.6641Z"
              fill="#EEEEEE"
            />
            <path
              d="M12 12.1641C12.5967 12.1641 13.169 11.927 13.591 11.5051C14.0129 11.0831 14.25 10.5108 14.25 9.91406C14.25 9.31733 14.0129 8.74503 13.591 8.32307C13.169 7.90112 12.5967 7.66406 12 7.66406C11.4033 7.66406 10.831 7.90112 10.409 8.32307C9.98705 8.74503 9.75 9.31733 9.75 9.91406C9.75 10.5108 9.98705 11.0831 10.409 11.5051C10.831 11.927 11.4033 12.1641 12 12.1641ZM12 13.6641C11.0054 13.6641 10.0516 13.269 9.34835 12.5657C8.64509 11.8625 8.25 10.9086 8.25 9.91406C8.25 8.9195 8.64509 7.96567 9.34835 7.26241C10.0516 6.55915 11.0054 6.16406 12 6.16406C12.9946 6.16406 13.9484 6.55915 14.6517 7.26241C15.3549 7.96567 15.75 8.9195 15.75 9.91406C15.75 10.9086 15.3549 11.8625 14.6517 12.5657C13.9484 13.269 12.9946 13.6641 12 13.6641Z"
              fill="#EEEEEE"
            />
          </svg>
          <span className="text-sm sm:text-base leading-relaxed">
            106 Nile, 5th,6th,9th and 10th floor Ad Doqi A - Dokki - Giza
            Governorate, Giza, Egypt
          </span>
        </li>
        <li className="flex itmes-start gap-[16px]">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipRule="url(#clip0_1_1508)">
              <path
                d="M5.48088 2.15602C5.39233 2.04211 5.28056 1.94834 5.15299 1.88095C5.02541 1.81356 4.88496 1.77409 4.74096 1.76515C4.59696 1.75621 4.4527 1.77802 4.31778 1.82911C4.18285 1.88021 4.06034 1.95943 3.95838 2.06152L2.40738 3.61402C1.68288 4.34002 1.41588 5.36752 1.73238 6.26902C3.04748 9.99968 5.18411 13.3871 7.98438 16.181C10.7783 18.9813 14.1657 21.1179 17.8964 22.433C18.7979 22.7495 19.8254 22.4825 20.5514 21.758L22.1024 20.207C22.2045 20.1051 22.2837 19.9826 22.3348 19.8476C22.3859 19.7127 22.4077 19.5684 22.3987 19.4244C22.3898 19.2804 22.3503 19.14 22.2829 19.0124C22.2156 18.8848 22.1218 18.7731 22.0079 18.6845L18.5474 15.9935C18.4256 15.8993 18.284 15.8339 18.1334 15.8022C17.9827 15.7706 17.8268 15.7734 17.6774 15.8105L14.3924 16.631C13.9539 16.7399 13.4947 16.7337 13.0592 16.6131C12.6238 16.4924 12.2269 16.2615 11.9069 15.9425L8.22288 12.257C7.90365 11.9372 7.67241 11.5403 7.55153 11.1049C7.43064 10.6694 7.42422 10.2102 7.53288 9.77152L8.35488 6.48652C8.39202 6.3371 8.39485 6.1812 8.36316 6.03053C8.33146 5.87986 8.26607 5.73832 8.17188 5.61652L5.48088 2.15602ZM2.82588 0.930517C3.08837 0.667941 3.40372 0.464212 3.75099 0.332859C4.09826 0.201505 4.4695 0.145532 4.84005 0.168656C5.21061 0.191781 5.57201 0.293473 5.90025 0.466982C6.2285 0.64049 6.51607 0.881844 6.74388 1.17502L9.43488 4.63402C9.92838 5.26852 10.1024 6.09502 9.90738 6.87502L9.08688 10.16C9.04476 10.3302 9.0472 10.5083 9.09396 10.6773C9.14073 10.8462 9.23025 11.0002 9.35388 11.1245L13.0394 14.81C13.1638 14.9339 13.3181 15.0236 13.4873 15.0703C13.6566 15.1171 13.835 15.1194 14.0054 15.077L17.2889 14.2565C17.6738 14.1608 18.0755 14.1536 18.4636 14.2355C18.8518 14.3173 19.2163 14.4861 19.5299 14.729L22.9889 17.42C24.2324 18.3875 24.3464 20.225 23.2334 21.3365L21.6824 22.8875C20.5724 23.9975 18.9134 24.485 17.3669 23.9405C13.4079 22.5494 9.81369 20.2831 6.85188 17.3105C3.87944 14.3491 1.61321 10.7555 0.221882 6.79702C-0.321118 5.25202 0.166382 3.59152 1.27638 2.48152L2.82588 0.930517Z"
                fill="#EEEEEE"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1508">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.164062)"
                />
              </clipPath>
            </defs>
          </svg>
          <a href="tel:+">+(20) 1069269754</a>
        </li>
        <li className="flex itmes-start gap-[16px]">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.16406C22 5.06406 21.1 4.16406 20 4.16406H4C2.9 4.16406 2 5.06406 2 6.16406V18.1641C2 19.2641 2.9 20.1641 4 20.1641H20C21.1 20.1641 22 19.2641 22 18.1641V6.16406ZM20 6.16406L12 11.1541L4 6.16406H20ZM20 18.1641H4V8.16406L12 13.1641L20 8.16406V18.1641Z"
              fill="#EEEEEE"
            />
          </svg>
          <a
            href="mailto:info@banknotestore.com"
            className="hover:underline transition-all duration-300"
          >
            info@banknotestore.com
          </a>
        </li>
      </ul>
      <div className=" w-full sm:w-1/2 lg:w-1/5 ">
        <h2 className="font-bold text-lg">Shop With Us</h2>
        <ul className=" flex flex-col gap-[12px] mt-[16px] text-sm sm:text-base">
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Your Address</li>
        </ul>
      </div>
      <div className=" w-full sm:w-1/2 lg:w-1/5 ">
        <h2 className="font-bold text-lg">Let us Help you</h2>
        <ul className=" flex flex-col gap-[12px] mt-[16px] text-sm sm:text-base">
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/5  ">
        <h2 className="font-bold text-lg">Our Newsletter</h2>
        <p className="font-medium mt-[16px] max-w-[400px] text-sm sm:text-base">
          Subscribe to the mailing list to receive updates one the new arrivals
          and other discounts
        </p>
        <form className="border border-[#C5C5C3] relative mt-[16px] rounded-md overflow-hidden">
          <input
            type="text"
            className="bg-transparent py-[10px] px-[16px] w-full text-sm sm:text-base focus:outline-none placeholder:text-[#C5C5C3]"
            placeholder="Your email address"
          />
          <button className="font-bold px-[16px] py-[10px] absolute top-0 right-0 bg-txtPrimary text-white text-sm sm:text-base">
            Subscribe
          </button>
        </form>
        <p className="mt-2 text-xs sm:text-sm">
          I would like to receive news and special offer
        </p>
      </div>
    </section>
  );
}

export default UpperFooter;
