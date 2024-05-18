import { getrooms } from "../lib/data-access/rooms";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RoomCard from "@/components/roomCard";



export default async function Home() {

  let rooms;
  try {
    rooms = await getrooms()

  } catch (error) {
    console.log(error)
  }


  return (
    <main className=" min-h-screen p-16">
      <div className="flex flex-row justify-between pb-9">

        <h1 className="text-4xl font-bold">Rooms</h1>
        <Button> <Link href={"/create-room"}> Create Room </Link></Button>
      </div>
      {/* grid one on small screen and 3 on large screen */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        {
          rooms.map((room) => {
            return <RoomCard key={room.id} room={room} />
          })
        }

      </div>
    </main>
  );
}

