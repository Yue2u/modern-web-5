import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function useLoginState(): { isLoggedIn: boolean; username: string } {
    const { isLoggedIn, username } = useSelector((state: RootState) => state.auth);
    return { isLoggedIn, username };
}
