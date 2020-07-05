const getComponent = url => `import React from "react";
import ReactDOM from "react-dom";
import GraphiQL from "graphiql";
import fetch from "isomorphic-fetch";
import hql from "hql-tag";
import { print } from "graphql/language";

function graphQLFetcher(graphQLParams) {
  graphQLParams.query = print(hql` + '`${graphQLParams.query}`' + `);
  return fetch('${url}', {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

const rootElement = document.getElementById("root");

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, rootElement);`;

module.exports = getComponent;
