import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
//import { freelancers } from '../assets/assets';

const Freelancers = () => {
  const { speciality } = useParams();

  console.log(speciality);

  const { freelancers } = useContext(AppContext);
  const [filterFree, setFilterFree] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterFree(
        freelancers.filter((free) => free.speciality === speciality)
      );
    } else {
      setFilterFree(freelancers);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [freelancers, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the freelancers Expertise</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "WebAppDevelopment"
                ? navigate("/freelancers")
                : navigate("/freelancers/WebAppDevelopment")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "WebAppDevelopment"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            {" "}
            Web & App Development
          </p>
          <p
            onClick={() =>
              speciality === "GraphicUIUXDesign"
                ? navigate("/freelancers")
                : navigate("/freelancers/GraphicUIUXDesign")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "GraphicUIUXDesign"
                ? "bg-indigo-100 text-black "
                : ""
            }`}
          >
            Graphic & UI/UX Design
          </p>
          <p
            onClick={() =>
              speciality === "DigitalMarketing"
                ? navigate("/freelancers")
                : navigate("/freelancers/DigitalMarketing")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "DigitalMarketing"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Digital Marketing
          </p>
          <p
            onClick={() =>
              speciality === "WritingContentCreation"
                ? navigate("/freelancers")
                : navigate("/freelancers/WritingContentCreation")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "WritingContentCreation"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Writing & Content Creation
          </p>
          <p
            onClick={() =>
              speciality === "VideoMultimedia"
                ? navigate("/freelancers")
                : navigate("/freelancers/VideoMultimedia")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "VideoMultimedia" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Video & Multimedia
          </p>
          <p
            onClick={() =>
              speciality === "BusinessFinance"
                ? navigate("/freelancers")
                : navigate("/freelancers/BusinessFinance")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "BusinessFinance" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Business & Finance
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterFree.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freelancers;
