import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
  const auth=useSelector((state)=>{
    return state.AuthReducer.isAuth
  })
  console.log(auth)
  const location=useLocation()
  if(auth===false){
    return <Navigate to="/login" replace={true} state={{data:location.pathname}} />
    }


  return children

};
export default ReqAuth;
