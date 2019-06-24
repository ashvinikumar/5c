import React from "react";
import "./RepoDetails.css";
import { NavLink } from "react-router-dom";

const RepoDetails = props => {
  const { repo } = props.location.repo;
  console.log("repo: ", repo);
  return (
    <div className="container pt-5">
      <div className="py-4">
        <NavLink to="/">
          <span className="mx-3 cursorPointer">Back to all Repos</span>
        </NavLink>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="">
            <img
              src="https://avatars3.githubusercontent.com/u/262517?v=4"
              alt="avatar"
              className="detailAvatar"
            />
          </div>
          <div className="text-left pl-5 pt-2">
            {/* <p>Verified by GitHub</p> */}
            {/* <p>
              GitHub confirms this repo meets the requirements of verification
            </p> */}

            {/* <p>Categories</p>
            <p>
              <span>Code review</span>
              <span>IDEs</span>
              <span>Free</span>
              <span>Paid</span>
            </p> */}
          </div>
        </div>

        <div className="col-md-8 col-sm-12 text-left">
          <p>Application</p>
          <h1>{repo.name}</h1>
          <button type="button" className="btn btn-success">
            Set up a plan
          </button>
          <p className="pt-3">
            <span className="repoDesName">{repo.name}</span> {repo.description}
          </p>
          <p>{repo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
