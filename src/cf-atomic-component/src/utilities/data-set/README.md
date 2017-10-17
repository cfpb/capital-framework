# element-data-set

Utility for retrieving HTMLElement.dataset as a JSON object

## Example


### HTML

```
<div id='element' data-foo="bar"></div>
```

### JS

```
var assert = require( 'assert' );
var dataSet = require( 'element-data-set' ).dataSet;
var element = document.querySelector( '#element' );
var data = dataSet( element );
assert.equal( data.foo, 'bar' );
```

## Installation

```npm install element-data-set```

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
