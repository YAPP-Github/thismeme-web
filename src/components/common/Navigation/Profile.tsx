import { useIsMount } from "@/application/hooks";
import { safeLocalStorage } from "@/application/util";

import { Icon } from "../Icon";

export const Profile = () => {
  const isMount = useIsMount();
  if (!isMount) return null;
  const loginState = safeLocalStorage.get("loginState");

  return <div>{loginState ? <Icon name="loginprofile" /> : <Icon name="notloginprofile" />}</div>;
};
