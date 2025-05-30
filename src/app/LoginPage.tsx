"use client";

import React, { useState } from "react";
import GoogleIcon from "@/assets/icons/Google.svg";
import ErrorIcon from "@/assets/icons/errorIcon.svg";
import BackgroundPattern from "@/components/BackgroundPattern";
import { useAuth } from "@/auth/useAuth";
import { signInWithGooglePopup } from "@/auth/authN";

export default function LoginPage() {
  const [error, setError] = useState<string>("");

  const auth = useAuth();

  const errorDisplay = error ? error : auth.error;

  const signIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error: any) {
      setError("An error occurred while trying to sign in. Please try again.");
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-camp-primary overflow-hidden">
      <div className="absolute inset-0 h-full">
        <BackgroundPattern fill="#FFFFFF" opacity={0.07} />
      </div>

      <div className="bg-[#F1F1F1] m-5 py-8 px-5 rounded-2xl w-5/6 max-w-[424px] min-h-[300px] flex flex-col items-center text-center shadow-lg relative">
        <h1 className="text-[32px] font-lato font-bold pb-4 text-camp-text-modalTitle">
          WELCOME
        </h1>
        <p className="text-gray-600 text-xl pb-10 font-lato">
          Sign in with your CampMinder email
        </p>

        {/* Google Sign-in Button */}
        <button
          onClick={signIn}
          className="flex flex-row justify-around items-center w-5/6 max-w-[344px] bg-white 
                    py-4 px-12 rounded-full shadow-[0_4px_4px_-1px_rgba(0,0,0,0.2)] font-lato text-xl text-gray-600"
        >
          <img src={GoogleIcon.src} alt="Google" />
          Sign in with Google
        </button>

        {/* Error Message */}
        {errorDisplay && (
          <div className="flex flex-row w-5/6 mt-[14px]">
            <img src={ErrorIcon.src} alt="Error Icon" />
            <p className="text-[#D32F2F] text-sm font-lato text-left pl-2">
              {errorDisplay}
            </p>
          </div>
        )}

        {/* Signup Link */}
        <p className="text-gray-500 text-sm mt-[43px] font-lato ">
          Haven’t registered yet? Go to{" "}
          <a
            href="https://starfish.campintouch.com/ui/forms/application/camper/App"
            target="_blank"
            className="text-blue-500 font-medium underline"
          >
            CampMinder
          </a>
        </p>
      </div>
    </div>
  );
}
