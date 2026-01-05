import React, { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users`);
      if (!res.ok) throw new Error("Users Not Found...");
      const data = await res.json();
      setAllUsers(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getUsers();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#18181B] text-white flex items-center justify-center">
      <UsersList
        allUsers={allUsers}
        isLoading={isLoading}
        setIsloading={setIsloading}
      />
    </div>
  );
};

export default App;
