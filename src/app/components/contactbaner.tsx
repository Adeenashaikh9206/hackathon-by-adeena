
import Image from "next/image";
import Link from "next/link";

const Contactbaner = () => {
  return (
    <div>
          <div className="relative w-full h-[300px]">
      {/* Background Image */}
      <Image
        src="/shop/sbg.png" // Replace with your background image path
        alt="Shop Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div>
          <img src="/shop/sl.png" alt="Secondary Logo" width={50} height={50} />
        </div>

        {/* Heading */}
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h1>

        {/* Links with Separator */}
        <div className="flex flex-row items-center space-x-2 md:space-x-4 mb-10">
          <Link
            href="/"
            className="text-black text-lg md:text-xl font-semibold px-4 py-2 rounded transition"
          >
            Home
          </Link>

          {/* Separator */}
          <span className="text-black text-lg md:text-xl font-medium">{`>`}</span>

          <Link
            href="/shop"
            className="text-black text-lg md:text-xl font-medium px-4 py-2 rounded transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contactbaner
