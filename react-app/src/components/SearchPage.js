import { useSelector } from "react-redux"

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
          </div>
        ))
      }
    </>
  )
}

export default SearchPage;
