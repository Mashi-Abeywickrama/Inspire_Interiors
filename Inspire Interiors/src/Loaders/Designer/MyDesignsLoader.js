import { useSession } from "../../constants/SessionContext";

//Loader
export const DesignLoader = async () => {
  //get designer id from session
  const session = useSession();
  // console.log(session.sessionData.userid);
  const id = session.sessionData.userid.toString();

  const res = await fetch("http://localhost:8080/designer/mydesigns/d/"+id);
  return res.json();
};
