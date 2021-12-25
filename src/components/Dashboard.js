import React from "react"
import Avatar from "./Avatar"
import {
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  CompanyIcon,
} from "./icons/Icons"
import { mockData } from "../utils/data"
import dayjs from "dayjs"

const Dashboard = () => {
  const {
    login,
    name,
    html_url: githubUrl,
    followers,
    following,
    bio,
    location,
    company,
    blog,
    public_repos,
    created_at,
  } = mockData

  console.log(dayjs("2014-06-06T04:17:00Z"))

  return (
    <section className="section section-dashboard">
      <Avatar mode={"tab-desk"} />
      <div className="section-dashboard__main">
        <div className="top">
          <Avatar mode={"mobile"} />
          <div className="user-info">
            <h2 className="user-info__name">The Octocat</h2>
            <a
              className="user-info__github-link"
              href="#"
              target="_blank"
              rel="noreferrer noopener"
            >
              @octocat
            </a>
            <p className="user-info__date">Joined {created_at}</p>
          </div>
        </div>
        <div className="user-bio">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            labore debitis ipsa animi, sed, tempore culpa illo saepe sequi non
            error? Officia quidem culpa quia.
          </p>
        </div>
        <div className="user-stats">
          <div className="user-stats__stat">
            <p>
              Repos <span>8</span>
            </p>
          </div>
          <div className="user-stats__stat">
            <p>
              Followers <span>23000</span>
            </p>
          </div>
          <div className="user-stats__stat">
            <p>
              Following <span>9</span>
            </p>
          </div>
        </div>
        <div className="user-links">
          <div>
            <LocationIcon color={"white"} />
            <p>Location</p>
          </div>
          <div>
            <WebsiteIcon color={"white"} />
            <p>Website</p>
          </div>
          <div>
            <TwitterIcon color={"white"} />
            <p>Twitter</p>
          </div>
          <div>
            <CompanyIcon color={"white"} />
            <p>Company</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
