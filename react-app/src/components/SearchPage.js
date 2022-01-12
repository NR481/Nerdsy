import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const SearchPage = () => {
  const resultsObj = useSelector(state => state.search)

  const results = Object.values(resultsObj)

  return (
    <>
      <h2>Search Results</h2>
      {results?.length &&
        results.map(result => (
          <div>
            <Link to={`/products/${result.id}`}>{result.name}</Link>
            <p>{result.category}</p>
          </div>
        ))
      }
    </>
  )
}

export default SearchPage;
