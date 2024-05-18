import { getroom } from "@/lib/data-access/rooms"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CiEdit } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default async function RoomPage(props) {

    const room = await getroom({ roomid: props.params.roomId });
    console.log(room)
    console.log(props)
    return (
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3"></div>
            <div className="col-span-1">
                <Card>
                    <CardHeader>
                        <div className="flex flex-row justify-between">
                            <CardTitle className="text-xl">{room.name}</CardTitle>

                            <CiEdit size="25px" />
                        </div>
                        <CardDescription>{room.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* {room.primary_programming_language} */}

                        <Link href={room.github_repo} className="flex items-center gap-2">
                            Github Repo
                            <FaGithub />
                        </Link>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}