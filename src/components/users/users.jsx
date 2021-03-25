import React, { useContext } from "react";
import User from "./user";
import Spinner from "../utils/spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) return <Spinner />;
  else {
    return (
      <div className="grid-3" style={usersStyle}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const usersStyle = {
  gridGap: "1rem",
};
export default Users;
