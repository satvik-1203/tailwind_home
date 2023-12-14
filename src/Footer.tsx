import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 pb-4 text-sm text-gray-500">
      <div className=" flex space-x-2 underline">
        <a href="">&#169; 2023 WOrMSConnect.com</a>
        <a href="">Terms and conditions</a>
        <a href="">Privacy Policy</a>
        <a href="">Contact Us</a>
      </div>
      <div className="flex items-center space-x-2">
        <p>Powered by </p>
        <img src={"/logo.png"} alt="WOrMS" />
      </div>
    </footer>
  );
};

export default Footer;
