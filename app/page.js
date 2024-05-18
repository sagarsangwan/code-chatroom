import { getrooms } from "../lib/data-access/rooms";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";


function RoomCard({ room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={room.github_repo} className="flex items-center gap-2">
          Github Repo
          <FaGithub />
        </Link>
      </CardContent>
      <CardFooter>
        <Button > <Link href={`/rooms/${room.id}`}> Join Room</Link></Button>
      </CardFooter>
    </Card>
  )
}

export default async function Home() {
  let rooms;
  try {
    rooms = await getrooms()
    console.log(rooms)

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

