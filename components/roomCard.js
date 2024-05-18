
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
function RoomCard({ room, addbuttonornot }) {
    // const { current_user } = useUser();
    console.log(addbuttonornot)
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{room.name}</CardTitle>

                <CardDescription>{room.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {/* {room.primary_programming_language} */}

                <Link href={room.github_repo} className="flex items-center gap-2">
                    Github Repo
                    <FaGithub />
                </Link>
            </CardContent>
            {addbuttonornot &&
                <CardFooter>
                    <Button > <Link href={`/rooms/${room.id}`}> Join Room</Link></Button>
                </CardFooter>}
        </Card>
    )
}
export default RoomCard;