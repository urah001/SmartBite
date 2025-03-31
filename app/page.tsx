// Import dependencies
//import LandingHeader from "@/components/ui/landingHeader";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="min-h-screen ">
      {/* Landing Header */}

      {/* Hero Section */}
      <div className="container px-4 md:px-6 flex flex-col">
        <div className="relative h-screen w-full flex flex-col justify-start items-start text-white">
          {/* Hero Text */}
          <div className="absolute top-20 left-6 md:left-12 text-left max-w-2xl bg-black rounded-r-full">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Healthy <br />
              Meals at Your{" "}
              <span className="text-yellow-400">School Canteen</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-gray-200">
              <span className="font-bold text-white">SmartBite</span> helps
              students find the best meals based on their dietary needs. Get
              personalized recommendations for a healthier lifestyle!
            </p>
            {/*  */}
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow-lg cursor-pointer">
              Explore Meals
            </button>
          </div>

          {/* Food Cards Section */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6">
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </div>
    </main>
  );
}

// Food Card Component
function FoodCard() {
  return (
    <div className="border rounded-2xl w-[280px] flex items-center p-3 gap-3 bg-white shadow-lg mt-7">
      {/* Image */}
      <div className="w-16 h-16">
        <Image
          src="/beauty.svg"
          alt="a placeholder"
          height={64}
          width={64}
          className="rounded-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1">
        {/* Price & Rating */}
        <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
          <span>N2000</span>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500" />
            <span className="text-xs">4.0</span>
          </div>
        </div>

        {/* Food Name */}
        <div className="text-base font-bold text-gray-800">Rice and Beans</div>

        {/* Order Button */}
        <button className="cursor-pointer mt-1 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          Order Now
        </button>
      </div>
    </div>
  );
}
