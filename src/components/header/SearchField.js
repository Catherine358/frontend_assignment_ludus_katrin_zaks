import React, { useState, useCallback } from "react";
import axios from 'axios';

import { getSearchResults } from "../../services/ServerWork";
import { Link } from "react-router-dom";

const SearchField = (props) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    let cancel = '';

    const fetchSearchResultsHandler = useCallback(() => {
        if(cancel) {
            cancel.cancel();
        }
        cancel = axios.CancelToken.source();
        setIsLoading(true);
        getSearchResults(query)
            .then(data => {
                const resultsNotFound = !data.challengesList.length ? 'There are no more search results' : '';
                setResults(data.challengesList);
                setMessage(resultsNotFound);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
               setMessage(error.message);
            });
    }, [cancel, query]);

    const inputChangeHandler = (event) => {
        const queryTmp = event.target.value;
        if(!queryTmp) {
            setQuery(queryTmp);
            setResults([]);
            setMessage('');
        } else {
            fetchSearchResultsHandler();
            setQuery(queryTmp);
            setMessage('');
        }
    };

    const renderSearchResults = () => {
        if(results.length > 0) {
            const filteredResults = results.filter(res => {
                return res.challengeName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            });
            return (
              <div className="search-results">
                  {
                      filteredResults.length === 0 ? "No more results" :
                       filteredResults.map(result => {
                          return (
                            <Link key={result.challengeId} to={`/challenge/${result.challengeId}`}>
                                <p>{result.challengeName}</p>
                            </Link>
                          );
                      })
                  }
              </div>
            );
        }
    };

    return (
      <div className="search-field">
          <input type="text"
                 name="query"
                 placeholder="Search"
                 className="search-input"
                 value={query}
                 onChange={inputChangeHandler}
          />
          { message && <div className="search-results">{message}</div> }
          { isLoading && <div className="search-results">Loading...</div>}
          { query && renderSearchResults() }
      </div>
    );
};

export default SearchField;
