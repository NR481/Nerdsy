import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchResults } from "../store/search";
import { useHistory } from "react-router-dom";
import '../components/MainPage.css'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const submitSearch = async (e) => {
    e.preventDefault()
    const query = { query: input }
    await dispatch(searchResults(query))
    setInput('')
    history.push('/search/')
  }

  return (
    <form onSubmit={submitSearch}>
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-field"
      />
      <button className="search-button"><i className="fas fa-search"></i></button>
    </form>
  )
}

export default SearchBar;
