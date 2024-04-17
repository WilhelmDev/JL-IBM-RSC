import { SessionContext } from "@/context/session"
import { useContext } from "react"

interface ContextSessionChecked {
  //  TODO: create types
  saveToken?: (newToken: string, newRol:string) => void
    isLoged: boolean
  }

const useSession = () => {
  return useContext(SessionContext)
}

export default useSession as () => ContextSessionChecked