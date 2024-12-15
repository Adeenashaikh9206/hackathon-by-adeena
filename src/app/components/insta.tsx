const InstagramSection = () => {
  return (
    <div
      className="relative w-full h-[450px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/ib.png')" }}
    >
     

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-black ext-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Our Instagram
        </h1>

        {/* Paragraph */}
        <p className="text-black text-base sm:text-lg md:text-xl max-w-2xl mb-6">
          Follow our store on Instagram
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-200">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default InstagramSection;