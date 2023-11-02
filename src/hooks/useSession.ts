import { useMemo } from "react";
import { useSession as useSessions } from "next-auth/react";

function useSession() {
  const { data: session, status } = useSessions();
  if (session === undefined && session === null) {
    throw new Error("useChat must be within a app");
  }
  return useMemo(() => ({ session, status }), [session, status]);
}
export default useSession;
