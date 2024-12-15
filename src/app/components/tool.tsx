export default function Toolbar() {
    return (
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
        {/* Left Section: Filters and View */}
        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Filter Button */}
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v3a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.172a1 1 0 01-.553.894l-2 1a1 1 0 01-1.447-.894v-5.172a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
              />
            </svg>
            Filter
          </button>
  
          {/* Grid/List View Toggle */}
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
        </div>
  
        {/* Middle Section: Results Info */}
        <div className="text-gray-600 text-sm w-full md:w-auto text-center">
          Showing <span className="font-medium">1–16</span> of{" "}
          <span className="font-medium">32</span> results
        </div>
  
        {/* Right Section: Show and Sort Options */}
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          {/* Show Dropdown */}
          <div className="flex items-center">
            <span className="mr-2 text-gray-600 text-sm">Show</span>
            <select className="border border-gray-300 text-gray-600 text-sm rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
  
          {/* Sort Dropdown */}
          <div className="flex items-center">
            <span className="mr-2 text-gray-600 text-sm">Sort by</span>
            <select className="border border-gray-300 text-gray-600 text-sm rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  