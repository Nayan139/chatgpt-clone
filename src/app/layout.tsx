import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/Sidebar";
import SessionProvider from "@/provider/sessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "@/components/Login";
import ChatProvider from "@/provider/chatProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ChatProvider>
            {!session ? (
              <Login />
            ) : (
              <div className="flex">
                <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                  {/* Sidebar */}
                  <Sidebar />
                </div>
                {/* Client Provider Notification */}

                <div className="bg-[#565869] flex-1">{children}</div>
              </div>
            )}
          </ChatProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
