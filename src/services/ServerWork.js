import { BASE_URL } from "../constants/Constants";

export const getChallengesList = (sortParam, pageNum, sortDir, limit) => {
    return fetch(`${BASE_URL}?sortBy=${sortParam}&page=${pageNum}&sortDirection=${sortDir}&limit=${limit}`)
        .then(response => {
            if(response.status !== 200) {
                throw new Error('Could not fetch.')
            }
            return response.json();
        });
};

export const getSearchResults = (query) => {
    return fetch(`${BASE_URL}?search=${query}`)
        .then(response => {
            if(response.status !== 200) {
                throw new Error('Could not fetch.')
            }
            return response.json();
        });
};


export const getChallengeById = (id) => {
  return fetch(`${BASE_URL}/${id}`)
      .then(response => {
          if(response.status !== 200) {
              throw new Error('Could not fetch.')
          }
          return response.json();
      });
};
