
const HeroSection = () => {
  return (
    <div className="bg-[#FBEBB5] w-full min-h-screen flex justify-center items-center py-10 px-4">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium">
            Rocket Single
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium">
            Seater
          </h1>

          {/* Shop Now Button */}
          <button className="px-6 py-3 bg-black text-white rounded-md font-bold hover:bg-gray-800 transition">
            Shop Now
          </button>

          {/* Gray Line */}
          <hr className="w-1/2 lg:w-[150px] border-gray-600" />
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/hero.png"
            alt="Hero Image"
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
