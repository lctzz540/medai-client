import React from "react";

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="relative w-5/6">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-lg text-white">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
