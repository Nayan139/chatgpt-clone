import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/Sidebar";
import SessionProvider from "@/provider/sessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "@/components/Login";
import ChatProvider from "@/provider/chatProvider";
import ClientProvider from "@/provider/clientProvider";
import MessageProvider from "@/provider/messageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat GPT Clone",
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
            <MessageProvider>
              {!session ? (
                <Login />
              ) : (
                <div className="flex">
                  <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto lg:min-w-[20rem]">
                    {/* Sidebar */}
                    <Sidebar />
                  </div>
                  {/* Client Provider Notification */}
                  <ClientProvider />

                  <div className="bg-[#565869] flex-1 ">{children}</div>
                </div>
              )}
            </MessageProvider>
          </ChatProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
