import { useAuth } from "./AuthContext";

export function SignOutseller() { 
    const { setIsLoggedIn } = useAuth();
    window.localStorage.removeItem("sellerIsLoggedIn");
    setIsLoggedIn(false);
  } 
