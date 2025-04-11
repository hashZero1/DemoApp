import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="px-4 py-20 bg-[#121212]">
      <div className="flex justify-between items-center max-w-[90rem] mx-auto">
        <div className="w-30 sm:w-34">
          <img className="w-full" src={logo} />
        </div>
        <div className="text-white text-center">
          <button className="border rounded-full px-6 py-2 text-xl hover:bg-red-200/30 transition-all cursor-pointer">
            +91 9958500568
          </button>
          <p className="text-sm mt-1">Sales Enquiries Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
