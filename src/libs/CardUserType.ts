interface CardUserProps{
  name : string,
  imgUrl :string,
  address :string,
  email :string
};
export type { CardUserProps };

// ทำการ import type สำหรับ props ของ UserCardDetail
interface UserCardDetailProps {
  email: string;
  address: string;
}
export type { UserCardDetailProps };