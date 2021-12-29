import React from "react"
import { search } from "../assets/assets"
const Searchbar = () => {
  return (
    <>
      <div className="searchbar">
        <form onSubmit={(e) => e.preventDefault()} className="searchbar__form">
          <label htmlFor="search">
            <img className="icon" src={search} alt="search magnifying glass" />
          </label>
          <input
            id="search"
            className="search"
            type="email"
            placeholder="Search Github username"
          />
          <button className="btn blue">Search</button>
        </form>
        <span className="searchbar__errorMsg">No Results</span>
      </div>
    </>
  )
}

export default Searchbar
