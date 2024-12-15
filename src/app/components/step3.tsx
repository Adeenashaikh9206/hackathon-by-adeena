import ProductPage from "../product/page";
import ProductGrid from "./shoppingproduct";

export default function Shop1() {
    return (
    <div>
    
    
    <ProductGrid />
 
    <div className="flex justify-center mt-6 space-x-2">
    <button className="px-4 py-2 bg-gray-200 rounded">1</button>
    <button className="px-4 py-2 bg-gray-200 rounded">2</button>
    <button className="px-4 py-2 bg-gray-200 rounded">3</button>
    <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
    </div>
    
    </div>
    );
    }