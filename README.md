# config-check

## Install

```shell
$  npm i config-check
```

## Usage

```javascript
  const cc = require('config-check')

  const config = {
    env: cc('NODE_ENV').default('production').exec(),
    port: cc('PORT').default(8080).int().exec(),
    redis: {
      uri: cc('REDIS_URI').required().exec()
    },
    aws: {
      secret: cc('AWS_SECRET').required().exec(),
      key: cc('AWS_KEY').required().exec(),
      region: cc('AWS_REGION').default('us-east-1').exec(),
      endpoint: cc('AWS_ENDPOINT').exec(),
    },
  }

```
### Methods

#### required()
Enforces env var existence
```javascript
  cc('SOME_ENV_VAR').required()
```

#### default(value)
Adds default value
```javascript
  cc('SOME_ENV_VAR').default('default value')
```

#### int()
Enforces the value is an integer with casting
```javascript
  cc('SOME_ENV_VAR').int()
```

#### list(delimiter)
Splits a string into a list, not safe
Default delimiter is ','
```javascript
  const delimiter = ' '
  cc('SOME_ENV_VAR').list(delimiter)
```

#### exec()
Returns the final value
```javascript
  cc('SOME_ENV_VAR').exec()
```

### Development

#### Requirements

- standardjs linting
- 100% test coverage

#### Npm run commands

|Command|Description|
|---|---|
|lint|Checks project linting|
|lint:fix|Auto fixes project lint errors|
|test|Test runner|
|test:watch|Test runner with watch|
|coverage|Coverage checker|
|changelog|Generate changelog|

## LICENSE

[DBAD](./LICENSE.md) for more [info](https://dbad-license.org/)