
// const BlogSection = () => {
//   const blogImages = [
//     '/Group 173.png',
//     '/Group 174.png',
//     '/Group 175.png',
//   ];

//   const recentPosts = [
//     {
//       image: '/bs1.png',
//       title: 'Going all-in with millennial design',
//       date: '03 Aug 2022',
//     },
//     {
//       image: '/bs2.png',
//       title: 'Exploring new ways of decorating',
//       date: '15 Sep 2022',
//     },
//     {
//       image: '/bs3.png',
//       title: 'Handmade pieces that took time to make',
//       date: '10 Oct 2022',
//     },
//     {
//       image: '/bs4.png',
//       title: 'Modern home in Milan',
//       date: '01 Nov 2022',
//     },
//     {
//       image: '/bs5.png',
//       title: 'Colorful office redesign',
//       date: '25 Nov 2022',
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-wrap lg:flex-nowrap">
//         {/* Left Section */}
//         <div className="w-full lg:w-2/3">
//           {blogImages.map((image, index) => (
//             <div key={index} className="mb-8 border-b border-gray-300 pb-4">
//               <div className="w-full aspect-[4/3] overflow-hidden mb-4 rounded-md">
//                 <img
//                   src={image}
//                   alt={`Blog ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* View More Section */}
//         <div className="text-center">
//           <button className="mt-6 px-6 py-3  text-black font-bold transition">
//             Read more 
//           </button>
//           <hr className="mt-4 mx-auto w-24 sm:w-32 md:w-40 lg:w-48 border-gray-800" />
//         </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/3 lg:pl-8">
//           {/* Search Box */}
//           <div className="mb-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
//               />
//               <i className="ri-search-line absolute top-2.5 right-3 text-gray-500"></i>
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="mb-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
//             <ul className="space-y-2">
//               {['Craft', 'Wood', 'Metal', 'Plastic', 'Glass'].map((category, index) => (
//                 <li
//                   key={index}
//                   className="text-gray-600 hover:text-gray-800 cursor-pointer"
//                 >
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Recent Posts */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
//             <ul className="space-y-4">
//               {recentPosts.map((post, index) => (
//                 <li key={index} className="flex items-center space-x-4">
//                   <img
//                     src={post.image}
//                     alt={`Recent Post ${index + 1}`}
//                     className="w-16 h-16 object-cover rounded-md"
//                   />
//                   <div>
//                     <p className="text-gray-800 font-semibold text-sm">{post.title}</p>
//                     <p className="text-gray-500 text-xs">{post.date}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSection;
const BlogSection = () => {
  const blogImages = [
    '/Group 173.png',
    '/Group 174.png',
    '/Group 175.png',
  ];

  const recentPosts = [
    {
      image: '/bs1.png',
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
    },
    {
      image: '/bs2.png',
      title: 'Exploring new ways of decorating',
      date: '15 Sep 2022',
    },
    {
      image: '/bs3.png',
      title: 'Handmade pieces that took time to make',
      date: '10 Oct 2022',
    },
    {
      image: '/bs4.png',
      title: 'Modern home in Milan',
      date: '01 Nov 2022',
    },
    {
      image: '/bs5.png',
      title: 'Colorful office redesign',
      date: '25 Nov 2022',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          {blogImages.map((image, index) => (
            <div key={index} className="mb-8 border-b border-gray-300 pb-4">
              <div className="w-full aspect-[4/3] overflow-hidden mb-4 rounded-md">
                <img
                  src={image}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* View More Section */}
              <div className="text-left">
                <button className="mt-6 px-6 py-3 text-black font-bold transition">
                  Read more
                </button>
                <hr className="mt-4 w-24 sm:w-32 md:w-40 lg:w-48 border-gray-800" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 lg:pl-8">
          {/* Search Box */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <i className="ri-search-line absolute top-2.5 right-3 text-gray-500"></i>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Craft', 'Wood', 'Metal', 'Plastic', 'Glass'].map((category, index) => (
                <li
                  key={index}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img
                    src={post.image}
                    alt={`Recent Post ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">{post.title}</p>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

