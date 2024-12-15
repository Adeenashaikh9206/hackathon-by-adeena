const Sofa = () => {
  return (
    <div className="bg-[#FFF9E5] w-full flex justify-center items-center py-10 px-4">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center gap-8">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/sofa.png" // Replace with your sofa image path
            alt="Sofa"
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
        <h2 className="text-xl md:text-2xl text-black mb-6 font-medium"> New Arrivals 
        </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Asgaard sofa</h1>
          
          <button className="bg-[#FFF9E5] text-black border border-black-800  px-6 py-3  font-semibol transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sofa;
