import { useMemo } from "react";
import { useSession as useSessions } from "next-auth/react";

function useSession() {
  const { data: session, status } = useSessions();
  return useMemo(() => ({ session, status }), [session, status]);
}
export default useSession;
