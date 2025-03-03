import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {

  const session= await getServerSession(authOptions)
  console.log(session)
  return (
    <div>
      {
        session?.user &&
        <>
        <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
      <h2 className="text-2xl text-center mt-10">Name: {session?.user?.name}</h2>
      <h2 className="text-2xl text-center mt-10">Email: {session?.user?.email}</h2>
      <Image 
      src={session?.user?.image}
      alt={session?.user?.name  }
      width={200}
      height={200}
      className="mx-auto flex rounded-full mt-8"
      />
      
      </>
      }
    </div>
  );
};

export default DashboardPage;
