import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function ProductPage(param:any) {
  const [isCartOpen, setCartOpen]  = useState(false);
  const [cartItems, setCartItems] = useState([]);
  function someFunction(param: boolean) {
  console.log(param);
}


  const handleAddToCart = () => {
    const item = {
      id: 1,
      name: "Asgaard Sofa",
      price: 25000,
      quantity: 1,
      image: "/path-to-main-image.jpg",
    };
    setCartItems([item]); // Replace with logic to add multiple items
    setCartOpen(true);
  };

  const closeCart = () => setCartOpen(false);

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-16 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-800">Home</a> &gt;
          <a href="#" className="hover:text-gray-800 mx-2">Shop</a> &gt;
          <span className="text-gray-800">Asgaard Sofa</span>
        </nav>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Product Image */}
          <div>
            <Image
              src="/path-to-main-image.jpg"
              alt="Asgaard Sofa"
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Asgaard Sofa</h1>
            <p className="text-2xl text-gray-700 mb-6">Rs. 25,000.00</p>
            <p className="text-gray-600 mb-4">
              Inspired by the clean minimal lines of Scandinavian design.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
 {/* Cart Modal */}
 {isCartOpen && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={closeCart}
            ></div>
            <div className="absolute right-0 top-0 w-96 bg-white shadow-lg h-full overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                {cartItems.map((item: { id: Key | null | undefined; image: string | StaticImport; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; quantity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <Image
                      
                        src={item.image}//+
                        alt={item.name ? String(item.name) : "Product Image"}//+
                        width={80}//+
                        height={80}//+
                        className="rounded-lg"//+
                      />
 "conversationId":"cf158c5f-02c0-4295-a407-d0afe834bb1d","source":"instruct"
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                        </p>
                    </div>
                    <p className="text-gray-700">Rs. {item.price}</p>
                  </div>
                ))}
                <hr className="my-4" />
                <div className="flex justify-between font-semibold text-lg">
                  <p>Subtotal:</p>
                  <p>
                    Rs.{" "}
                    {cartItems.reduce(
                      (total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity,
                      0
                    )}
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                    onClick={() => alert("Proceeding to checkout...")}
                  >
                    Checkout
                  </button>
                  <button
                    className="w-full mt-2 bg-gray-100 py-2 rounded-md hover:bg-gray-200"
                    onClick={closeCart}
                  >
                    Close
                  </button>
</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
