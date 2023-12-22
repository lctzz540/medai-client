import React from "react";

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  const bannerStyle = {
    backgroundColor: "#FDF0F0",
  };

  return (
    <div
      className="flex justify-center items-center mt-60 relative h-80 w-5/6"
      style={bannerStyle}
    >
      <div className="relative text-center">
        <h1 className="text-4xl font-bold text-black">{title}</h1>
        <p className="text-lg text-black">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
