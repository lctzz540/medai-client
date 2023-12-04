import React from "react";
import teamData from "../data/teamData.json";
import Image from "next/image";
import SocialNetwork from "./SocialNetwork";

const TeamProfileCard = () => {
  const leader = teamData.find((member) => member.role === "leader");
  const members = teamData.filter((member) => member.role === "member");

  return (
    <div className="mx-32">
      <h1 className="text-3xl font-bold mb-6">TEAM MEMBER</h1>
      {leader && (
        <div
          className="flex bg-white rounded-lg shadow-md p-6 mb-6"
          style={{ background: "rgb(253, 240, 240)" }}
        >
          <div className="mr-6">
            <Image
              src={leader.avatar}
              alt={leader.name}
              width={300}
              height={300}
            />
          </div>
          <div>
            <h2 className="text-black text-xl font-semibold">{leader.name}</h2>
            <p className="text-gray-600 mb-2 font-bold">Leader</p>
            <p className="text-gray-700">{leader.units}</p>
            <p className="text-gray-700 mt-2">{leader.description}</p>
            <SocialNetwork github="/" facebook="/" linkedin="/" envelope="/" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md p-6"
            style={{ background: "rgb(253, 240, 240)" }}
          >
            <div className="mr-6">
              <Image
                src={member.avatar}
                alt={member.name}
                width={300}
                height={300}
              />
            </div>
            <div>
              <h2 className="text-black text-xl font-semibold">
                {member.name}
              </h2>
              <p className="text-gray-600 mb-2 font-bold">Member</p>
              <p className="text-gray-700">{member.units}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfileCard;
