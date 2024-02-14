"use client"

import { CardProps } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";



const DeleteBlock = ({ id }: CardProps) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div >
      <IoMdClose
      onClick={deleteTicket}
      className="text-red-400 hover:cursor-pointer hover:text-red-200" />
    </div>
  )
}

export default DeleteBlock