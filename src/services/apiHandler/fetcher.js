import fetch from "unfetch";
// import { request } from 'graphql-request'
// const API = 'https://api.graph.cool/simple/v1/movies'
//
// const GraphQLFetcher = query => request(API, query)
//
// const JSONFetcher = url => fetch(url).then(r => r.json())
//
// export { JSONFetcher, GraphQLFetcher }

export function fetcher(path) {
  return fetch(path).then((res) => res.json());
}

export function fetchAndCache(key) {
  const request = fetcher(key);
  mutate(key, request, false);
  return request;
}

export function getCurrentUser() {
  return fetchAndCache("/api/users/current");
}

export function getUsers() {
  return fetchAndCache("/api/users");
}
