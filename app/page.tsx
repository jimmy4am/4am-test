"use client";
import React, { useEffect } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "../context/SessionContext";

const montserrat = Montserrat({ subsets: ["latin"] });

const Page = () => {
  const router = useRouter();
  const { sessionId, setSessionId } = useSession();

  useEffect(() => {
    const startSession = async () => {
      const url = "Empty URL"; // capture the full url to start session
    

      try {
        const response = await fetch("/api/start-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (!response.ok) {
          throw new Error("Failed to start session");
        }

        const data = await response.json();
        // save the session ID to the context 
        setSessionId(data.sessionId)
        
        console.log("Session started:", data.sessionId);
      } catch (error) {
        console.error("Error starting session:", error);
      }
    };

    if (!sessionId) {
      startSession();
    }
  }, [sessionId, setSessionId]);

  const handleClick = () => {
    //capture the url string and pass it to /api/start-session, then save session ID to sessionContext
    router.push("/upsell1");
  };

  return (
    <div className={montserrat.className}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>The Worlds #1 Cleaning Product</h1>
        <Image
          src="/images/foam-step1.webp"
          width={250}
          height={250}
          alt="Cleaning Product"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={handleClick}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Page;
