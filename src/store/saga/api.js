import { SET_ARTICLE_DETAILS, API, FETCH_ARTICLE_DETAILS } from "../actions/actionTypes.js";

export function fetchArticleDetails() {
  return apiAction({
    url: "https://anapioficeandfire.com/api/characters/",
    onSuccess: setArticleDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_ARTICLE_DETAILS
  });
}

function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}