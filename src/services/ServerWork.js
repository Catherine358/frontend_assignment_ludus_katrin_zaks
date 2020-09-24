import { BASE_URL } from "../constants/Constants";

export const getChallengesList = (sortParam, pageNum) => {
    return fetch(`${BASE_URL}?sortBy=${sortParam}&page=${pageNum}`)
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
