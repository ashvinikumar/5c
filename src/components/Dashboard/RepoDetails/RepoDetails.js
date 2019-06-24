import React from "react";
import "./RepoDetails.css";

const RepoDetails = () => (
  <div className="container pt-5">
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="">
          <img
            src="https://avatars3.githubusercontent.com/u/262517?v=4"
            alt="avatar"
            className="detailAvatar"
          />
        </div>
        <p>Verified by GitHub</p>
        <p>GitHub confirms this repo meets the requirements of verification</p>

        <p>Categories</p>
        <p>
          <span>Code review</span>
          <span>IDEs</span>
          <span>Free</span>
          <span>Paid</span>
        </p>
      </div>

      <div className="col-md-8 col-sm-12 text-left">
        <p>Application</p>
        <h1>gitpot.io</h1>
        <button type="button" className="btn btn-success">
          Set up a plan
        </button>
        <p>Gitpot is an online IDE for GitHub</p>
        <p>
          It launches a complete dev environment for any github project, by
          simply prefixing the github url
        </p>
        <p>
          Install this app and get your project prebuilt, so you dont have to
          wait for the build downloading the internwt when starting the gitpot workspace.
        </p>
        <p>GitPot is the first IDE that builds your project before you event open it</p>
      </div>
    </div>
  </div>
);

export default RepoDetails;
