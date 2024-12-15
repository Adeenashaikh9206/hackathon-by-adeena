import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-16 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-800">Home</a> &gt;
          <a href="#" className="hover:text-gray-800 mx-2">Shop</a> &gt;
          <span className="text-gray-800">Asgaard Sofa</span>
        </nav>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Product Image and Thumbnails */}
          <div>
            <div className="w-full mb-6">
              <Image
                src="/shop/ps6.png"
                alt="Asgaard Sofa"
                width={800}
                height={800}
                className="rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              <Image
                src="/shop/ps2.png"
            
                alt="Thumbnail 1"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
              <Image
                src="/shop/ps3.png"
                alt="Thumbnail 2"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
              <Image
              
              src="/shop/ps4.png"

                alt="Thumbnail 3"
                width={100}
                height={100}
                className="rounded-md cursor-pointer"
              />
            </div>
          </div>
          {/* Right Side - Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Asgaard Sofa</h1>
            <p className="text-2xl text-gray-700 mb-6">Rs. 25,000.00</p>
            <p className="text-gray-600 mb-4">
              Inspired by the clean minimal lines of Scandinavian design, the Asgaard sofa provides a modern yet timeless look.
            </p>
            
            {/* Color Options */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Color:</h3>
              <div className="flex space-x-4">
                <span className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></span>
                <span className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer"></span>
                <span className="w-8 h-8 bg-gray-800 rounded-full cursor-pointer"></span>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
            {/* Additional Info */}
            <div className="mt-8">
              <p className="text-sm text-gray-500">SKU: 123456</p>
              <p className="text-sm text-gray-500">Category: Sofa</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <ul className="flex border-b">
            <li className="mr-6">
              <button className="py-2 px-4 text-gray-800 border-b-2 border-black font-semibold">
                Description
              </button>
            </li>
            <li className="mr-6">
              <button className="py-2 px-4 text-gray-500 hover:text-gray-800">
                Additional Information
              </button>
            </li>
            <li>
              <button className="py-2 px-4 text-gray-500 hover:text-gray-800">
                Reviews (0)
              </button>
            </li>
            </ul>
          <div className="mt-6">
            <p className="text-gray-600">
              Introducing the Asgaard Sofa! It offers a premium look while maintaining comfort and design flexibility. Perfect for modern spaces.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Related Product 1 */}
            <div className="text-center">
              <Image
                src="/shop/p1.png"
                alt="Related Product 1"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Twente Modular Sofa</h3>
              <p className="text-gray-700">Rs. 25,000.00</p>
            </div>
            {/* Related Product 2 */}
            <div className="text-center">
              <Image
                src="/shop/p2.png"
                alt="Related Product 2"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Garden Style Chair</h3>
              <p className="text-gray-700">Rs. 25,000.00</p>
            </div>
            {/* Related Product 3 */}
            <div className="text-center">
              <Image
                src="/shop/p3.png"
                alt="Related Product 3"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Outdoor Dining Table</h3>
              <p className="text-gray-700">Rs. 25,000.00</p>
            </div>
            {/* Related Product 4 */}
            <div className="text-center">
              <Image
                src="/shop/p4.png"
                alt="Related Product 4"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">Reika Wooden Bench</h3>
              <p className="text-gray-700">Rs. 25,000.00</p>
            </div>
          </div>
        </div>
        </div>
  )
}
