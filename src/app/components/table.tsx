// const MainSection = () => {
//     return (
//       <div className="max-w-[1440px] h-[672px] bg-[#FAF4F4] text-black  flex justify-center items-center py-10">
//         <div className=" flex flex-col items-center">
//           {/* Images */}
//           <div className="flex justify-center gap-8">
//             <img
//               src="/sidetable.png"
//               alt="Image 1"
//               className="w-[605px] h-[562px] object-cover rounded-md"
//             />
//             <img
//               src="/sidesofa.png"
//               alt="Image 2"
//               className="w-[605px] h-[562px] object-cover rounded-md"
//             />
//           </div>
  
  
//           {/* View More Button */}
//           <button className="mt-4 px-6 py-2 text-black rounded-md ">
//             View More
//           </button>
  
//           {/* Gray Line */}
//           <hr className="mt-4 w-[150px] border-gray-300" />
//         </div>
//       </div>
//     );
//   };
  
//   export default MainSection;
  
const MainSection = () => {
  return (
    <div className="w-full bg-[#FAF4F4] text-black flex justify-center items-center py-10">
      <div className="max-w-[1440px] w-full flex flex-col items-center">
        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-4">
          <img
            src="/sidetable.png"
            alt="Side Table"
            className="w-full max-w-[300px] md:max-w-[605px] h-auto object-cover rounded-md"
          />
          <img
            src="/sidesofa.png"
            alt="Side Sofa"
            className="w-full max-w-[300px] md:max-w-[605px] h-auto object-cover rounded-md"
          />
        </div>

        {/* View More Button */}
        <button className="mt-6 px-6 py-3 text-black rounded-full font-bold  transition">
          View More
        </button>

        {/* Gray Line */}
        <hr className="mt-4 w-[100px] md:w-[150px] border-gray-800" />
      </div>
    </div>
  );
};

export default MainSection;
