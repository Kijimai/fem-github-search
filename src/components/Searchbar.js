import React from "react"
import { search } from "../assets/assets"
import { useGlobalContext } from "../utils/context"
const Searchbar = () => {
  const { searchGithubUser, searchValue, setSearchValue } = useGlobalContext()

  return (
    <>
      <div className="searchbar">
        <form onSubmit={searchGithubUser} className="searchbar__form">
          <label htmlFor="search">
            <img className="icon" src={search} alt="search magnifying glass" />
          </label>
          <input
            id="search"
            className="search"
            type="text"
            placeholder="Search Github username"
            value={searchValue}
            spellCheck="false"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn blue">Search</button>
        </form>
        <span className="searchbar__errorMsg">No Results</span>
      </div>
    </>
  )
}

export default Searchbar
