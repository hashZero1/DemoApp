import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <div className="w-24">
        <img className="w-full" src={logo} />
      </div>
      <div className="text-white text-center">
        <button className="border  rounded-full px-6 py-2 text-xl hover:bg-red-200/30 transition-all cursor-pointer">
          +91 9958500568
        </button>
        <p className="text-sm mt-1">Sales Enquiries Only</p>
      </div>
    </header>
  );
};

export default Header;
