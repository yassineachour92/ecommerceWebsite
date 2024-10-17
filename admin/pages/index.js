import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./components/Nav";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flew-grew mt-1 mr-2 mb-2 rounded-lg p-4">logged in {session.user.email}</div>
    </div>
  );
}
