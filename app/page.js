import Googlelogin from "./googlelogin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Googlelogin />

      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
        {/* <AvatarImage src={user.user_profile.picture} /> */}


      </Avatar>




    </main>
  );
}
