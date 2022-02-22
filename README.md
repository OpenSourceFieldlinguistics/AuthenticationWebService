[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]

# fieldb-auth

Authentication web services for FieldDB

## Getting Started
Install the module with: `npm install fieldb-auth`

```javascript
var fieldb_auth = require('fieldb-auth');
```

## Documentation & Dev Sandbox
* https://authdev.fielddb.org

## Examples
* https://authdev.fielddb.org

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using the scipts in package.json.

### Recording tests

Edit your /etc/hosts to add an entry for example.org:

```bash
127.0.0.1       localhost
127.0.0.1       corpusdev.example.org
```

Turn on your local couchdb and make sure it is running on http://127.0.0.1:5984/_utils Record tests by adding `.only` on the tests you wish to record:

```bash
$ DEBUG=*user*,*nock*,*replay* REPLAY=record npm test
```

As a result you should see a directory corresponding to the server, and files with-in it representing the requests:

```bash
$ tree test/fixtures/
test/fixtures/
└── corpusdev.example.org-5984
    └── 154417467505825257
```

### Running tests against a given URL

To run tests against the local instance:

```
$ URL=https://localhost:3183 npm test
```

### Running tests against a local couchdb

```bash
$ npm run docker:test
```

Turn off the docker container
```bash
$ docker-compose stop
$ docker-compose rm -f
```

Exec into the docker container

```bash
$ docker container list
$ docker exec -it cda63fa5d348 /bin/bash
```

## Release History
* v1.16  mongoose auth & everyauth
* v1.32  switched to couchdb
* v1.62  gravatars
* v1.72  server side support for user creation for spreadsheet (without the offline prototype)
* v1.102 support for Learn X users
* v2.12.0 support for psycholinguistics dashboard users and branded emails depending on the client side
* v2.44.22 updated architecture from nodejs 0.6 to 0.12 to build consitent api for v2


## License
Licensed under the Apache, 2.0 licenses.


[travis-image]: https://travis-ci.org/FieldDB/AuthenticationWebService.svg?branch=master
[travis-url]: https://travis-ci.org/FieldDB/AuthenticationWebService
[coverage-image]: https://coveralls.io/repos/github/FieldDB/AuthenticationWebService/badge.svg?branch=main
[coverage-url]: https://coveralls.io/github/FieldDB/AuthenticationWebService?branch=main
