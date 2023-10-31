/* eslint-disable @next/next/no-img-element */
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Images from "@/components/coreUI/Image";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session && (
        <Images
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt="Profile iamges"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Profile;
