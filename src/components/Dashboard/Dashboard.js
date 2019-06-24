import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.getAllRepos();
  }

  getAllRepos = () => {
    axios({
      method: "GET",
      url: "https://api.github.com/users/mralexgray/repos"
    })
      .then(res => {
        this.setState({
          repos: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.repos);
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            {this.state.repos.map(repo => (
              <div className="col-md-6 col-sm-12 repo py-3" key={repo.id}>
                <div className="row">
                  <div className="col-2">
                    <img
                      className="repoImg"
                      src={repo.owner.avatar_url}
                      alt="avatar"
                    />
                  </div>
                  <div className="col-10">
                    <div className="text-left">
                      <Link
                        to={{ pathname: `/details/${repo.id}`, repo: { repo } }}
                      >
                        {repo.name}
                      </Link>
                      <p className="repoDescription">{repo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
