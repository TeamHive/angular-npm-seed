# angular-npm-seed

## Get the Seed

Clone the package to some location. (Recommended: a tooling directory or the root of the development folder)

```bash
git clone https://github.com/TeamHive/angular-npm-seed.git
```

## Start a package

```bash
npm run g [package-name] [root-directory]
```

The generate command (g for short) accepts 2 inputs.
| input | description | default |
|---|---|---|
| package-name | The name of the package. It will be scoped at `@teamhive/package-name`. Do not lead the name with `@teamhive` | none |
| root-directory | The root directory to create the root folder of the project in. Example: If you wanted to create a package named `my-pack` in the folder called `Documents/Development`. You would supply only `Documents/Development` as the `my-pack` will be created by the generate command. | current directory (`./`) |


#### Examples 

* Assuming the seed is cloned to a `tooling` folder:

```bash
npm run g my-pack ~/Documents/Development/packages`
```

* Assuming the seed is in the root of the `development` folder

```bash
npm run g my-pack ../packages`
```

* Assuming the seed is in the root of the `packages` folder

```bash
npm run g my-pack ../`
```