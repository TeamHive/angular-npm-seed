# angular-npm-seed

## Get the Seed

Clone the package to some location. (Recommended: a tooling directory or the root of the development folder)

```bash
sudo npm i -g @teamhive/angular-npm-seed
```

## Start a package

navigate to the root directory to create the root folder of the project in. For instance, if you wanted to create a package named `my-pack` in the folder called `Documents/Development`. You would cd into `Documents/Development` as the `my-pack` will be created by the generate command.


```bash
generate-hive-package [package-name]
```

The generate command (g for short) accepts 2 inputs.
| Parameter | Description | Default |
| --- | --- | --- |
| package-name | The name of the package. It will be scoped at `@teamhive/package-name`. Do not lead the name with `@teamhive` | none |


#### Example

```bash
generate-hive-package my-pack
```

## Run the demo site

When the generated package is finished, cd into the new folder and run the start command

```bash
cd my-pack
npm run start
```