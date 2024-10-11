"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "../../context/SessionContext";

const Page = () => {
  const [sessionData, setSessionData] = useState<any>({});
  const { sessionId } = useSession();

  useEffect(() => {
    const grabData = async () => {
      const response = await fetch(`/api/fetch-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      });
      if (!response.ok) {
        throw new Error("Failed to start session");
      }
      const data = await response.json();
      setSessionData(data);
      console.log("Sesh Data - ", data);
    };
    if (sessionId) {
      grabData();
    }
  }, [sessionId]);

  const getUpsellStatus = (upsell: boolean | undefined) => {
    if (upsell === undefined) return "Missing";
    return upsell ? "Accepted" : "Declined";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Your Order is Complete</h1>
      <Image
        src="/images/product-4.webp"
        width={250}
        height={250}
        alt="Double Offer"
      />
      <div className="flex flex-col items-center justify-center mt-4 space-y-4">
        <div className="flex justify-start">
          url: {sessionData.url || "Missing Url"}
        </div>
        <div className="flex justify-start">
          sessionId: {sessionId || "Missing Session ID"}
        </div>
        <div className="flex justify-start">
          4 Bag Bonus:{" "}
          {getUpsellStatus(sessionData.upsell1) === "Missing"
            ? "Missing Upsell1"
            : `$10 - ${getUpsellStatus(sessionData.upsell1)}`}
        </div>
        <div className="flex justify-start">
          Expedited Processing:{" "}
          {getUpsellStatus(sessionData.upsell2) === "Missing"
            ? "Missing Upsell2"
            : `$5 - ${getUpsellStatus(sessionData.upsell2)}`}
        </div>
      </div>
    </div>
  );
};

export default Page;
