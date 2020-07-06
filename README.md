## hql-cli: GraphiQL playground

This is a CLI tool which initates a GraphiQL playground with [hql-tag](https://github.com/product-ride/hql-tag) support.

To initate a fresh GraphiQL: 

```sh
npx hql-cli -i <URL-OF-THE-GRAPHQL-ENDPOINT>

or 

npx hql-cli --init <URL-OF-THE-GRAPHQL-ENDPOINT>

or 

npx hql-cli // 'http://localhost:4000/graphql' is considered as endpoint
```

This creates a new folder `hql-graphiql` in the current directory with complete configurations. If no URL is passed, `http://localhost:4000/graphql` is considered as default value.

### Modify URL

In an existing GraphiQL playground:

#### Setup using hql-cli
Change the fetch URL `graphQLFetcher` function in `hql-graphiql/src/index.js` file

#### Pre-existing setup
Refer to `template/index.js` template to add support for `hql-tag` in your setup.



### TODO:

- Fix GraphiQL warning for hql-specific arguements
