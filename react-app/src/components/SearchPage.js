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
            <p>{result.name}</p>
            <p>{result.category}</p>
            <Link to={`/products/${result.id}`}>
              <img src={result.imageUrl}/>
              </Link>
          </div>
        ))
      }
    </>
  )
}

export default SearchPage;
