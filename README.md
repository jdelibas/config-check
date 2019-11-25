# config-check
<!-- vscode-markdown-toc -->
* [Install](#Install)
* [Usage](#Usage)
	* [Methods](#Methods)
		* [required()](#required)
		* [default(value)](#defaultvalue)
		* [int()](#int)
		* [float()](#float)
		* [list(delimiter)](#listdelimiter)
		* [exec()](#exec)
	* [Development](#Development)
		* [Requirements](#Requirements)
		* [Npm run commands](#Npmruncommands)
* [LICENSE](#LICENSE)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->

## <a name='Install'></a>Install

```shell
$  npm i config-check
```

## <a name='Usage'></a>Usage

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
### <a name='Methods'></a>Methods

#### <a name='required'></a>required()
Enforces env var existence
```javascript
  cc('SOME_ENV_VAR').required()
```

#### <a name='defaultvalue'></a>default(value)
Adds default value
```javascript
  cc('SOME_ENV_VAR').default('default value')
```

#### <a name='int'></a>int()
Enforces the value is an integer with casting
```javascript
  cc('SOME_ENV_VAR').int()
```

#### <a name='float'></a>float()
Enforces the value is a float with casting
```javascript
  cc('SOME_ENV_VAR').float()
```

#### <a name='listdelimiter'></a>list(delimiter)
Splits a string into a list, not safe
Default delimiter is ','
```javascript
  const delimiter = ' '
  cc('SOME_ENV_VAR').list(delimiter)
```

#### <a name='exec'></a>exec()
Returns the final value
```javascript
  cc('SOME_ENV_VAR').exec()
```

### <a name='Development'></a>Development

#### <a name='Requirements'></a>Requirements

- standardjs linting
- 100% test coverage

#### <a name='Npmruncommands'></a>Npm run commands

|Command|Description|
|---|---|
|lint|Checks project linting|
|lint:fix|Auto fixes project lint errors|
|test|Test runner|
|test:watch|Test runner with watch|
|coverage|Coverage checker|
|changelog|Generate changelog|

## <a name='LICENSE'></a>LICENSE

[DBAD](./LICENSE.md) for more [info](https://dbad-license.org/)