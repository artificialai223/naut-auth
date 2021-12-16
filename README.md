# naut-auth

[![Downloads badge](https://img.shields.io/npm/dw/naut-auth)](https://nautauth.xyz)

The api package for the next generation in roblox script protection.

## Install

npm:

```sh
npm install naut-auth
```

### Dependencies

- [API Key](https://discord.gg/E4AR7JaUAj), Requirements:
    - 600 Clients that have bought from your studio
    - Application approval
    - $20 sign-up fee on approval

## Usage

Example of checking if a user has a whitelist:

```javascript
var naut = require("naut-auth")(API_KEY)

naut.check_whitelist(USER_ID, PRODUCT_NAME, STUDIO_NAME)
```

Example of whitelisting a product for a user:

```javascript
var naut = require("naut-auth")(API_KEY)

naut.whitelist(USER_ID, PRODUCT_NAME)
```


## Contributing

Please do! Open an merge request!

