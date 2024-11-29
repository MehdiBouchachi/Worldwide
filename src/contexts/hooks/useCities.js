import { useContext } from "react";
import { CitiesContext } from "../CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("You are using the useCitites outside the CititesProvider");
  return context;
}
export default useCities;
