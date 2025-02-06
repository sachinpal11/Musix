"use client";

import { signIn, signOut, useSession } from "next-auth/react";

function Appbar() {
  const session = useSession();
  return (
    <div className="flex justify-between items-center p-4">
      <div>Muzer</div>
      {session.data?.user ? <button className="bg-red-400 p-3" onClick={() => signOut()} >sign Out</button> : <button className="bg-blue-400 p-3" onClick={() => signIn()} >sign in</button>}

    </div>
  )
}

export default Appbar
