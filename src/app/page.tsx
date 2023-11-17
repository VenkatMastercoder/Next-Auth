// // Via Client

"use client";
import { useSession } from "next-auth/react";

 export default function Home() {
    const { data } = useSession();
    return <main>{data ? JSON.stringify(data) : "Please sign in"}</main>;
 }

{/* // Via Server
// import { getServerSession } from "next-auth";
// import { authOption } from "./api/auth/[...nextauth]/route";

// export default function Home() {
//   return (
//     <div>
//       <p>HEllos</p>
//     </div>
//   );
//   // const data = await getServerSession(authOption);

//   // return <main>{data ? JSON.stringify(data) : "Please sign in"}</main>;
// } */}
