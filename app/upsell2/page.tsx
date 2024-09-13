"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    //create a function to update the sessionData with upsell2: true or false based on the user's choice
    router.push("/thank-you");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Expited Processing - $5</h1>
        <Image
          src="/images/exp-ship.jpg"
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
