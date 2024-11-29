import { useContext } from "react";
import { AuthContext } from "../FakeAuthContext";
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("You are using the useAuth outside the CititesProvider");
  return context;
}

export default useAuth;
