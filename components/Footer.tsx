import { useLocation } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <footer
      className={`${
        pathname === "/"
          ? "bg-white text-black -mt-20 z-10"
          : "bg-black text-white"
      } pt-32`}
    >
      <div className="py-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-5 col-span-2 md:col-span-1">
            <img
              src="/images/logo.png"
              height={30}
              width={30}
              alt="Logo"
              className="h-[30px] w-[30px]"
            />
            <p className="text-base pr-5 md:pr-0">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
            <div className="flex flex-wrap gap-4 pt-5">
              {[FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className={`p-2 border ${
                      pathname === "/" ? "border-black" : "border-white"
                    } rounded-full hover:bg-gray-100 transition-colors cursor-pointer`}
                  >
                    <Icon className="size-[13px]" />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-8 sm:mt-0 col-span-2 sm:col-span-1">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul className="space-y-3">
              {[
                "How it works",
                "Featured",
                "Partnership",
                "Business Relation",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-gray-600 transition-colors cursor-pointer font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 sm:mt-0">
            <h2 className="text-xl font-semibold mb-4">Community</h2>
            <ul className="space-y-3">
              {["Events", "Blog", "Podcast", "Invite a friend"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-600 transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mt-8 sm:mt-0">
            <h2 className="text-xl font-semibold mb-4">Socials</h2>
            <ul className="space-y-3">
              {["Discord", "Instagram", "Twitter", "Facebook"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-600 transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div
          className={`border-t mt-[47px] pt-6 ${
            pathname === "/" ? "border-black" : "border-[#FFFFFF80]"
          }`}
        >
          <p
            className={`text-sm ${
              pathname === "/" ? "text-[#000000B2]" : "text-white opacity-80"
            }`}
          >
            ©2024 Braynix. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
