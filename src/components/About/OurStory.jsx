import centers from "../../assets/chair.png";
import office from "../../assets/office.png";
import rates from "../../assets/rates.png";

const projects = [
  {
    icon: centers,
    title: "16",
    description: "Centres in Delhi NCR",
  },
  {
    icon: office,
    title: "10,000+",
    description: "seats",
  },
  {
    icon: rates,
    title: "93%",
    description: "Occupancy rate",
  },
];

const OurStory = () => {
  return (
    <div className="bg-[#121212] h-fit pb-10 pt-20">
      <div className="lg:max-w-[90rem] mx-auto px-3 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-3  py-10">
          {projects.map((project) => (
            <div
              key={project?.icon}
              className="relative group  block p-2 h-full w-full "
            >
              <div className="h-full w-full p-4 overflow-hidden bg-gray-50 border border-gray-400 border-opacity-40 text-[#121212] rounded-xl hover:scale-105 relative transition-all duration-400 cursor-pointer">
                <div className="relative ">
                  <div className="p-4 flex flex-col items-center">
                    <img src={project.icon} className="w-20" />
                    <h4 className="font-bold text-4xl tracking-wide mt-4">
                      {project.title}
                    </h4>
                    <p className="mt-2  tracking-wide leading-relaxed text-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className="px-18 sm:px-24 py-4 text-xl text-gray-50 bg-red-400 rounded-full hover:bg-red-500 transition-all duration-300">
            Here's our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
