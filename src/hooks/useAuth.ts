import { useSelector } from "react-redux";
import { RootState } from "@/src/store";

export function useAuth() {
  const user = useSelector((state: RootState) => state.user);
  return user;
}
