import React from "react";
import UserCard from "./UserCard";
import UserCardSkeleton from "./UserCardSkeleton";

const UsersList = ({ allUsers, isLoading }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-10">
      <div className="flex flex-wrap gap-6 justify-center py-10">
        {isLoading
          ? Array.from({ length: 7 }).map((_, i) => (
              <UserCardSkeleton key={i} />
            ))
          : allUsers.slice(1,8).map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default UsersList;
