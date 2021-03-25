import React from "react";
import RepoItem from "./repoItem";

function Repos({ repos }) {
  return repos.map((repo) => (
    <RepoItem repo={JSON.stringify(repo)} key={repo.id} />
  ));
}

export default Repos;
