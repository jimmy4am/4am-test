"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "../../context/SessionContext";

const Page = () => {
  const { sessionId } = useSession();

  

  const router = useRouter();

  const handleClick = () => {
    //modify the handleClick function to update the sessionData with upsell1: true or false based on the user's choice  \


    

    router.push("/upsell2");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Bonus Offer - 4 bags for only $10</h1>
        <Image
          src="/images/product-4.webp"
          width={250}
          height={250}
          alt="Double Offer"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={handleClick}
        >
          Yes Please
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={handleClick}
        >
          No Thanks
        </button>
      </div>
    </div>
  );
};

export default Page;
