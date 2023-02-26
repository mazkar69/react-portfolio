import { ProtectedType } from "../type/Type"
import NotFound from "../page/NotFound"

const Protected = ({ children }: ProtectedType) => {

const token = sessionStorage.getItem('token')

if(token){
    return <>{children}</>
}
else{
    return <><NotFound/></>
}



}

export default Protected