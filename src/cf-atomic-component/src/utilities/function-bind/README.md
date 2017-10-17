# Function-bind

Utility used to create a new function which is bound to a particular context.

## Example

### JS

```
var bind = require( '@cfpb/function-bind' );
var assert = require( 'assert' );
var context = { testing: true };
var mockFunction = function(){ return this };
var boundFunction = bind( mockFunction, context );
assert.equal( boundFunction() === context, true );
```

## Installation

```npm install @cfpb/function-bind```

## Contributing

We welcome your feedback and contributions.
See the [contribution guidelines](CONTRIBUTING.md) for more details.

Additionally, you may want to consider
[contributing to the Capital Framework](https://cfpb.github.io/capital-framework/contributing/),
which is the front-end pattern library used in this project.

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
