#!/usr/bin/env node
const cli = require('commander');
const execSync = require('child_process').execSync;
const getComponent = require('../template/index');
const fs = require('fs');

const updateIndexFile = (url) => {
    fs.writeFile('./hql-graphiql/src/index.js', getComponent(url), function (err) {
      if (err) return console.log('\x1b[31m%s\x1b[0m', err);
    });
}

cli
    .version('1.0.0')
    .option('-i, --init [init]', 'Hasura endpoint to run GraphiQL', 'http://localhost:4000/graphql')
    .action((options) => {
        execSync('npx create-react-app hql-graphiql',{stdio: 'inherit'})
        execSync('cd hql-graphiql && yarn add graphql graphiql isomorphic-fetch graphql-tag hql-tag',{stdio: 'inherit'})
        execSync('cp -R ./template/index.html ./hql-graphiql/public/index.html')
        execSync('rm -f ./hql-graphiql/src/App.css ./hql-graphiql/src/App.js ./hql-graphiql/src/App.test.js ./hql-graphiql/src/logo.svg ./hql-graphiql/src/serviceWorker.js')
        execSync('cp -R ./README.md ./hql-graphiql/README.md')
        updateIndexFile(options.init);
        console.log('\x1b[32m%s\x1b[0m','GraphiQL playground is initated with HQL-TAG support');
    })

cli.parse(process.argv);