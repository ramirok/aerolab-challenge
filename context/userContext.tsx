import React, {
  ReactComponentElement,
  useContext,
  useEffect,
  useState,
} from "react";
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
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/user/me",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUyZDZhMWJjNDgzYTAwMjE2ZGE5NjgiLCJpYXQiOjE2NDIyNTYwMzN9.VVA-ablaYVIMKITor6C3F5DnVb9CjfrD-egzU_mAwyY",
        },
      }
    );
    const parsedResponse: UserData = await response.json();
    setUserData(parsedResponse);
    setIsLoading(false);
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
