import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import project1 from "../assets/portfolio/project 1.jpeg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import navbar from "../assets/portfolio/navbar.jpg";

const Portfolio = () => {


    const links=[
        {
            id:1,
            address:project1,
        },
        {
            id:2,
            address:arrayDestruct,
        },
        {
            id:3,
            address:reactSmooth,
        },
        {
            id:4,
            address:reactWeather,
        },
        {
            id:5,
            address:navbar,
        },
        {
            id:6,
            address:installNode,
        }
    ]
    
  return (
    <div
      name="Portfolio" id="portfolio"
      className=" w-full px-6 sm:px-0 bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="w-11/12  flex flex-col justify-between sm:justify-start mx-auto">
        <div>
          <p className="font-bold inline border-b-2 border-gray-400 text-4xl">
            Portfolio
          </p>
          <p className="my-6">Checkout some of my work here</p>
        </div>
        <div className="pb-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]" >
        {links.map(({id, address})=>{  
             return (
                <div key={id} id="cards_experience" className="shadow-md shadow-gray-600 rounded-lg" >
                    <img id="experience" src={address} alt="Project" style={{"height":"8rem", "width":"100%"}}/>
                    <div className="flex items-center justify-between ">
                        <button className="w-1/2 px-6 py-2 duration-300 hover:scale-105 text-lg">Demo</button>
                        <button className="w-1/2 px-6 py-2 duration-300 hover:scale-105 text-lg">Code</button>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
