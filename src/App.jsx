import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import countriesData from "./data/countries-data.json";

function App() {
  const countries = countriesData;
  const [searchResult, setSearchResult] = React.useState([]);

  function handleSearch(searchInput) {
    if (searchInput === "") {
      setSearchResult([]);
    } else {
      const filteredCountries = countries.filter((country) =>
        country.country.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      console.log(filteredCountries);
      setSearchResult(filteredCountries);
    }
  }

  return (
    <div className="App">
      <div className="search-container">
        <SearchBar handleSearch={handleSearch} />
        {searchResult.length > 0 && (
          <SearchResults searchResult={searchResult} />
        )}
      </div>
    </div>
  );
}

export default App;
