import Image from "next/image";
import abstractData from "../data/abstractData.json";

const Abstract = () => {
  const abstractStyle = {
    backgroundColor: "rgb(31, 65, 114)",
    color: "white",
  };

  return (
    <div className="mt-36">
      {abstractData.abtracts.map((abtract, abtractId) => (
        <div
          className="my-32 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          style={abstractStyle}
          key={abtractId}
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-3/4 md:rounded-none md:rounded-s-lg"
            src={abtract.imageSrc}
            alt=""
            width={300}
            height={400}
          ></Image>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {abtract.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {abtract.content}
            </p>
            <button
              type="button"
              className=" w-44 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {abtract.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Abstract;
