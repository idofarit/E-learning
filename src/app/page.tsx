import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "antd";

export default async function Home() {
  let name = "";
  let email = "";

  const user: any = await currentUser();
  console.log(user);
  name = user?.fullName;
  email = user.emailAddresses[0].emailAddress;

  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <UserButton />
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
      </div>
    </div>
  );
}
