import React from "react";

function RepoItem(props) {
  const repo = JSON.parse(props.repo);
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}

export default RepoItem;
