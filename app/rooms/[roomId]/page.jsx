import { getroom } from "@/lib/data-access/rooms";
import RoomCard from "@/components/roomCard";
export default async function RoomPage(props) {

    const room = await getroom({ roomid: props.params.roomId });
    console.log(room)
    console.log(props)
    return (
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3"></div>
            <div className="col-span-1">
                <RoomCard room={room} addbuttonornot={false} />
            </div>
        </div>
    )
}