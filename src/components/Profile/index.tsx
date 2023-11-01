"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { signOut } from "next-auth/react";
import Images from "@/components/coreUI/Image";
import useSession from "@/hooks/useSession";
import { useRouter } from "next/navigation";

const Profile = () => {
  //hooks
  const { session } = useSession();
  const router = useRouter();
  return (
    <div>
      {session && (
        <Images
          onClick={() => {
            signOut({ callbackUrl: "/landing" });
          }}
          src={session?.user?.image!}
          alt="Profile iamges"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Profile;
