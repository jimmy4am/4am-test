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

  return (
    <div>
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
            url: {sessionData.url || <>Missing Url</>}
          </div>
          <div className="flex justify-start">
            sessionId: {sessionId || <>Missing Session ID</>}
          </div>
          <div className="flex justify-start">
            4 Bag Bonus:{" "}
            {(!sessionData.upsell2 && <>Missing Upsell1</>) || (
              <>
                {sessionData.upsell1 === true && <>$10 - Accepted</>}{" "}
                {sessionData.upsell2 === false || <>Declined</>}
              </>
            )}
          </div>
          <div className="flex justify-start">
            Expedited Processing:{" "}
            {(!sessionData.upsell2 && <>Missing Upsell2</>) || (
              <>
                {sessionData.upsell1 === true && <>$5 - Accepted</>}{" "}
                {sessionData.upsell2 === false || <>Declined</>}
              </>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
