import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs";

//ทำการ import type สำหรับ props ของ UserCardDetail
import { type UserCardDetailProps } from "../libs/CardUserType";

export const UserCardDetail = ({ email, address }: UserCardDetailProps) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {email}
      </p>
      <p>
        <BsFillPinMapFill /> {address}
      </p>
    </div>
  );
};