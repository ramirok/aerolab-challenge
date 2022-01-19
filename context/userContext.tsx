import React, {
  ReactComponentElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Get } from "../lib/FetchService";
import toasts from "../lib/Toasts";
import { UserData } from "../types";

interface UserContexType {
  isLoading: boolean;
  userData: UserData;
  addRemoveUserPoints: (points: number) => void;
}

const UserContex = React.createContext({} as UserContexType);

export const UserProvider: React.FunctionComponent = (props) => {
  const [userData, setUserData] = useState({} as UserData);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    const response = await Get("user/me");
    if (response.success) {
      setUserData(response.data);
      setIsLoading(false);
    } else {
      toasts.fail("Failed to authenticate");
    }
  };

  const addRemoveUserPoints = (points: number) => {
    setUserData((prev) => ({ ...prev, points: prev.points + points }));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const value = { userData, isLoading, addRemoveUserPoints };
  return (
    <UserContex.Provider value={value}>{props.children}</UserContex.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContex);

  if (!context) {
    throw new Error("useUser must be used within UserContext");
  }
  return context;
};
