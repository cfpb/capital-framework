## cfv2 notes

### general to-do

1. verify `capital-framework.css` integrity. just because there are no errors 
during compilation doesn't mean the resulting file is what we want it to be.

### npm

#### to-do

- the `postinstall` script should only happen for contributors? not consumers
who are `npm install capital-framework`ing?
- when preparing npm modules, auto-add the `less` and `style` properties
- less gets compiled from `src` to components' root dirs, the same should happen
to js. strip comments but don't minify for the `component.js` file. minify for 
the `component.min.js` file.
- remove all `package.json` properties with a `//` key.
- alphabetize properties by key.

#### how npm publishing works

1. `tmp` dir in project root is created.
1. `package.json` files in component dirs are merged with capital-framework's 
`package.json`. so if you want to override a package.json property, add it to 
the component's package.json. otherwise it will default to whatever is in cf's 
manifest.

#### npm notes

- why are there `style` and `less` properties? `package.json` is schemaless so you
can add whatever properties you want. UI frameworks have adopted [style and less
properties](https://github.com/twbs/bootstrap/blob/50bea4625a09d14cec93e4dbdd9d336005ac7d85/package.json#L19-L21)
to point to stylesheets.

