const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", img: "shop//s3.png" },
    { id: 2, name: "Granite dining table", price: "Rs. 25,000.00", img: "/shop/s4.png" },
    { id: 3, name: "Outdoor bar table", price: "Rs. 25,000.00", img: "/shop/s5.png" },
    { id: 4, name: "Plain console", price: "Rs. 25,000.00", img: "/shop/s6.png" },
        { id: 5, name: "Plain console", price: "Rs. 15,000.00", img: "/shop/s7.png" },
        { id: 6, name: "Plain console", price: "Rs. 225,000.00", img: "/shop/s8.png" },
        { id: 7, name: "Plain console", price: "Rs. 251,000.00", img: "/shop/s9.png" },
        { id: 8, name: "Plain console", price: "Rs. 25,200.00", img: "/shop/s10.png" },
        { id: 9, name: "Plain console", price: "Rs. 258,200.00", img: "/shop/s11.png" },
        { id: 10, name: "Plain console", price: "Rs. 20,000.00", img: "/shop/s12.png" },
        { id: 11, name: "Plain console", price: "Rs. 200,000.00", img: "/shop/s13.png" },
        { id: 12, name: "Plain console", price: "Rs. 100,000.00", img: "/shop/s14.png" },
        { id: 13, name: "Plain console", price: "Rs. 258,800.00", img: "/shop/s15.png" },
        { id: 14, name: "Plain console", price: "Rs. 250,000.00", img: "/shop/s16.png" },
        { id: 15, name: "Plain console", price: "Rs. 115,000.00", img: "/shop/s17.png" },
        { id: 16, name: "Plain console", price: "Rs. 244,000.00", img: "/shop/s18.png" },
    // Add more products as per your design...
    ];
    export default function ProductGrid() {
    return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.map((product) => (
    <div
    key={product.id}
    className="border p-4 rounded-lg hover:shadow-lg transition hover:-translate-y-1"
    >
    <img
    src={product.img}
    alt={product.name}
    className="w-full h-48 object-cover rounded-md"
    />
    <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
    <p className="text-gray-700">{product.price}</p>
    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
    transition">
    Add to Cart</button>
    </div>
    ))}
    </div>
    </div>
    );
    }