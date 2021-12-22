import React from "react"
import search from "../assets/icon-search.svg"
const Searchbar = () => {
  return (
    <div className="searchbar">
      <form onSubmit={(e) => e.preventDefault()} className="searchbar__form">
        <img className="icon" src={search} alt="search magnifying glass" />
        <input
          className="search"
          type="email"
          placeholder="Search Github username"
        />
        <button className="btn blue">Search</button>
      </form>
    </div>
  )
}

export default Searchbar
