import SignIn from "@/components/Signin";
import { auth } from "../auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <SignIn />

      {session?.user && (
        <div className="size-5 roundeed-full overflow-hidden">
          <img
            src={session.user.image || "Hello.png"}
            alt="User Avatar"
            className="object-cover"
          />
        </div>
      )}
    </>
  );
}
