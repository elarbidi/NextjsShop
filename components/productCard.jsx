
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <>
        <Link href={`/products/${product.id}`}>
        <div className="relative">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image width={200 } height={200} src={product.img} alt={product.name} className="w-full h-full object-center object-cover"/>
          </div>
          <div className="relative mt-4">
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-orange-500 opacity-50"></div>
            <p className="relative bg-white p-2 rounded-xl text-lg font-semibold text-orange-600">${product.price}</p>
          </div>
        </div>
        </Link>
        </>
    );
};

export default ProductCard;