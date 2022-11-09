import { observer } from "mobx-react-lite";
import { useContext } from "react";
import AppContext from "../context";

const Profile = observer(() => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <button>Добавить товарь</button>
      <h2>Profile</h2>
      <h2>{user.user.email}</h2>
    </div>
  );
});

export default Profile;
