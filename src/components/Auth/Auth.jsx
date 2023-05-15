import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";
import user1 from "../../assets/user1.png";



export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      <button onClick={logIn} > <img src={user1}></img> </button>
    </span>
  );
  
  // показывается пользователю
  if (user) {
    output = (
      <span>
        <Link to="/orders">{user.displayName}</Link>
        {/* {user.displayName} */}
        <button onClick={logOut}></button>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}