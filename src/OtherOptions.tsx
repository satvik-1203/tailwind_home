import { ReactNode } from "react";
import GoogleIcon from "./icons/GoogleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import PhoneIcon from "./icons/PhoneIcon";

const IconBox = ({ children }: { children: ReactNode }) => {
  return <div className="rounded-full bg-gray-200 p-3">{children}</div>;
};

export default function OtherOptions() {
  return (
    <div className="flex justify-center gap-12">
      <IconBox>
        <GoogleIcon />
      </IconBox>
      <IconBox>
        <PhoneIcon />
      </IconBox>
      <IconBox>
        <FacebookIcon />
      </IconBox>
    </div>
  );
}
