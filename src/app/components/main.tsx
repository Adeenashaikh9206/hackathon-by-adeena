// "use client";
// import Image from 'next/image';

// const Home = () => {
//   return (
//     <div className="bg-white">
//       <div className="container mx-auto p-4 md:p-6 lg:p-8">
//         <div className="w-full h-1440 md:h-940 lg:h-740 bg-gray-100 rounded-lg mb-8"></div>
//         <h2 className=" text-[36px] md:text-5xl lg:text-6xl font-bold text-center mb-4">Top Picks For You</h2>
//         <p className="text-lg md:text-[16px] lg:text-2xl text-gray-600 text-center mb-8">Find a bright ideal to suit your taste with our great selection of suspension floor and table lights.</p>
//         <div className="flex flex-row justify-center items-center mb-8">
//           <div className="w-1/4 md:w-1/4 lg:w-1/4 mb-4 md:mb-0 md:mr-4 lg:mr-6">
//             <Image src="/h1.png" alt="image1" width={400} height={400} className="w-full h-full object-cover" />
        
//           </div>
//           <div className="w-1/4 md:w-1/4 lg:w-1/4 mb-4 md:mb-0 md:mr-4 lg:mr-6">
//             <Image src="/h2.png" alt="image2" width={400} height={400} className="w-full h-full object-cover" />
            
//           </div>
//           <div className="w-1/4 md:w-1/4 lg:w-1/4 mb-4 md:mb-0 md:mr-4 lg:mr-6">
//             <Image src="/h3.png" alt="image3" width={400} height={400} className="w-full h-full object-cover" />
           
//           </div>
//           <div className="w-1/4 md:w-1/4 lg:w-1/4 mb-4 md:mb-0">
//             <Image src="/h4.png" alt="image4" width={400} height={400} className="w-full h-full object-cover" />
        
//          {/* View More Button */}
//          <div className='justify-between text-center'>
//          <button className="mt-6 px-6 py-3 text-black rounded-full font-bold  transition">
//           View More
//         </button>

//         {/* Gray Line */}
//         <hr className="mt-4 w-[100px] md:w-[150px] border-gray-800  " />      
//           </div>
//         </div>
//       </div>
//         </div>
//       </div>
  
//   );
// };

// export default Home;
"use client";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Heading Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4">
          Top Picks For You
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 text-center mb-8">
          Find a bright ideal to suit your taste with our great selection of suspension floor and table lights.
        </p>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8">
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <Image
              src="/h1.png"
              alt="image1"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <Image
              src="/h2.png"
              alt="image2"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <Image
              src="/h3.png"
              alt="image3"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <Image
              src="/h4.png"
              alt="image4"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* View More Section */}
        <div className="text-center">
          <button className="mt-6 px-6 py-3  text-black font-bold transition">
            View More
          </button>
          <hr className="mt-4 mx-auto w-24 sm:w-32 md:w-40 lg:w-48 border-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Home;

