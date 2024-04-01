"use client";
import { useEffect } from 'react';
import "./globals.css";

function Page() {
   
  useEffect(() => {
    if (!("Notification" in window)) {
      alert("The browser does not support desktop notification");
    }

  }, []);

  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Notification", { body: "New Notification from Akshat Mishra" });
    } else if ("Notification" in window && Notification.permission !== "denied") {
    
      Notification.requestPermission().then(function (permission) {
        
        if (permission === "granted") {
          new Notification("Notification", { body: "New Notification from Akshat Mishra" });
        }
      });
    }
  };

  return (
    <div className="text-4xl font-bold text-white">
      <div className="flex flex-row justify-around gap-6 m-3">
        <div>
          <img src="/time.png" alt="time" />
        </div>
        <div>
          <img src="/mobile.png" alt="wifi" />
        </div>
      </div>
      <div>
        <p className="font-inter font-semibold text-[29px] text-center text-white mt-6">Lorem Ipsum...</p>
        <p className="font-inter font-normal text-white text-[19px] text-opacity-40 text-center pt-4">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="m-2 mt-12">
        <div className="relative">
          <img src="/wave.png" alt="wfif" className="m-auto relative" />
          <img src="/notification-bell.png" alt="bell" className="m-auto absolute inset-0" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 mb-6">
   
        <button className="relative w-[327px] h-[42px] rounded-md p-0 shadow-md overflow-hidden bg-gradient-to-r from-transparent via-red-600 to-transparent font-inter font-semibold text-[16px] text-center text-white"
          onClick={sendNotification} 
        >
          <span className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-red-600 to-transparent border border-solid border-[1.4px] rounded-md"></span>
          Send Notification
        </button>
      </div>
    </div>
  );
}

export default Page;