
// const Blog = () => {
//   return (
//     <div className="bg-[#FAF4F4] text-black w-full flex flex-col items-center py-10 px-4">
//       {/* Section Heading */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Blogs</h1>
//       {/* Paragraph */}
//       <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl mb-8">
//         Explore the latest updates, tips, and insights from our blog section.
//       </p>
//       {/* Images */}
//       <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8">
//         <div className="w-full sm:w-[393px] h-[553px] rounded-md overflow-hidden">
//           <img
//             src="/b1.png"
//             alt="Blog Post 1"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-full sm:w-[393px] h-[553px] rounded-md overflow-hidden">
//           <img
//             src="/b2.png"
//             alt="Blog Post 2"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-full sm:w-[393px] h-[553px] rounded-md overflow-hidden">
//           <img
//             src="/b3.png"
//             alt="Blog Post 3"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//       {/* View All Posts Button */}
//       <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-700 mb-4">
//         View All Posts
//       </button>
//       {/* Gray Line */}
//       <hr className="w-24 sm:w-32 md:w-40 lg:w-48 border-gray-300" />
//     </div>
//   );
// };

// export default Blog;
const Blog = () => {
  return (
    <div className="bg-[#FAF4F4] text-black w-full flex flex-col items-center py-10 px-4">
      {/* Section Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Blogs</h1>
      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl mb-8">
        Explore the latest updates, tips, and insights from our blog section.
      </p>
      {/* Images */}
      <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8">
        <div className="w-full sm:w-[393px] h-[553px] rounded-md overflow-hidden">
          <img
            src="/b1.png"
            alt="Blog Post 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-[393px] h-[553px] rounded-md overflow-hidden">
          <img
            src="/b2.png"
            alt="Blog Post 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-[393px] h-[553px] rounded-md overflow-hidden">
          <img
            src="/b3.png"
            alt="Blog Post 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* View All Posts Button */}
      <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-700 mb-4">
        View All Posts
      </button>
      {/* Gray Line */}
      <hr className="w-24 sm:w-32 md:w-40 lg:w-48 border-gray-300" />
    </div>
  );
};

export default Blog;
