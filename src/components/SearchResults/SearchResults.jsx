import "./SearchResults.css";

// eslint-disable-next-line react/prop-types
function SearchResults({ searchResult }) {
  return (
    <div className="searchResult-wrapper">
      {/*eslint-disable-next-line react/prop-types*/}
      {searchResult.map((country, index) => (
        <p key={index}>{country.country}</p>
      ))}
    </div>
  );
}

export default SearchResults;
