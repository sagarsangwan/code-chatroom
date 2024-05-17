import { getrooms } from "./data-access/rooms";
// import instance from "@/services/authService"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function RoomCard({ room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{room.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <button>Join</button>
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-4xl font-bold">Rooms</h1>
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />
      })}





    </main>
  );
}

