import React from "react";
import footerData from "../data/footerData.json";
import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "rgb(31, 65, 114)",
    color: "white",
  };

  const dividerStyle = {
    color: "rgb(241, 180, 187)",
  };

  return (
    <footer style={footerStyle}>
      <div className="mt-36 pb-48 lg:flex mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 items-center justify-between lg:pb-8">
        <div className="hidden lg:flex lg:w-1/3">
          <Logo size={200} />
        </div>
        <div>
          <div
            className={`mt-8 grid grid-cols-3
              } gap-8 lg:mt-0 lg:gap-y-16`}
          >
            {footerData.sections.map((section, index) => (
              <div key={index} className={`col-span-2 sm:col-span-1`}>
                <p className="font-bold text-gray-400">
                  <span style={dividerStyle}>
                    {"|\u00A0\u00A0\u00A0\u00A0"}
                  </span>
                  {section.title.toUpperCase()}
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.info.map((info, infoIndex) => (
                    <li key={infoIndex}>
                      {section.isLink ? (
                        <>
                          <ul className="list-disc ml-4">
                            <li>
                              <Link
                                href={info[1]}
                                className="text-gray-300 transition"
                              >
                                {info[0]}
                              </Link>
                            </li>
                          </ul>
                        </>
                      ) : (
                        <div className="text-gray-300 transition">{info}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
