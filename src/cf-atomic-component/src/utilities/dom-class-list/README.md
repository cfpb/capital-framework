# Class-list

Utility used to perform CRUD (create, read, update and delete) operations on DOM classes.

## Example


### HTML

```
<div id="test-block-a" class="test-class test-class-a">
 	<div id="test-block-b" class="test-class-b" >
		<div id="test-block-c" class="test-class-c"></div>
	</div>
</div>;
```

### JS

```
var assert = require( 'assert' );
var classList = require( 'class-list' );
var testBlockA = document.getElementById( 'test-block-a' );
assert( classList.contains( testBlockA, 'test-class-b' ), false );
classList.addClass( testBlockA, 'test-class-b' )
assert( classList.contains( testBlockA, 'test-class-b' ), true );
```

## Installation

```npm install class-list```

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
