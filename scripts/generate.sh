#!/bin/bash

# Associative Array Delimiter since bash 3 doesn't have associative arrays => HACK
__="|-|"

exec() {
    
    pushd $2

    # Create the nx workspace
    npx create-nx-workspace $1 --npm-scope=$3 --style=scss
    echo $1 workspace created
    
    # Move to created workspace directory
    pushd $1 
    
    # create angular app    
    echo Choose options for the demo-web app
    ng g app demo-web --minimal=true --routing=true --prefix=app
    echo demo-web app created
    
    # create lib
    echo Choose options for the $1 lib
    ng g lib $1 --parentModule=apps/demo-web/src/app/app.module.ts --prefix=teamhive
    echo npm lib $1 successully created

    # Move back to tooling root
    popd
    popd

    copyFolders $2/$1/apps/demo-web/src
    processTemplates

    # cp -rf _templates/package-core $2/$1/libs

    rm -f $2/$1/apps/demo-web/src/app/app.component.spec.ts
    rm -rf $2/$1/apps/demo-web-e2e

    transformJson $2/$1

    # Move to project root
    pushd $2/$1

    # Prune unneeded packages and install from the current package.json
    npm prune
    npm i
}

getModuleName() {
    moduleName=""

    IFS='-' read -r -a array <<< "$1"

    for element in "${array[@]}"
    do
        upper=`echo ${element:0:1} | tr  '[a-z]' '[A-Z]'`${element:1}
        moduleName+=$upper
    done

    echo "${moduleName}Module"
}

copyFolders() {
    for path in "${CopyRootFolders[@]}"; 
    do 
        cp -rf _templates/$path $1
    done

    for path in "${CopyAppFolders[@]}"; 
    do 
        cp -rf _templates/$path $1/app
    done
}

processTemplates() {
    for i in "${TemplateFiles[@]}"; 
    do 
        templateFile="${i%%$__*}"
        destination="${i##*$__}"

        replaceFileTokens $templateFile $destination
    done
}

# $1=template file name, $2=writelocation   
replaceFileTokens() {
    file_contents=$(<_templates/$1)
    echo "${file_contents//$KEY/$VALUE}" > $2

    for replacement in "${FileTokens[@]}"; 
    do 
        KEY="${replacement%%$__*}"
        VALUE="${replacement##*$__}"

        file_contents=$(<$2)
        echo "${file_contents//$KEY/$VALUE}" > $2
    done
}

transformJson() {
    node scripts/tsconfig-app.transform.js $1/apps/demo-web/tsconfig.app.json
    node scripts/angular-json.transform.js $1/angular.json
}

scope=teamhive

# https://stackoverflow.com/questions/1494178/how-to-define-hash-tables-in-bash/40999140
FileTokens=(
    "{{PACKAGE_NAME}}$__$1"
    "{{GITHUB_SCOPE}}$__$scope"
    "{{NPM_SCOPE}}$__$scope"
    "{{MODULE_NAME}}$__$(getModuleName $1)")

TemplateFiles=(
    "index.lib.ts$__$2/$1/libs/$1/index.ts"
    "package.json$__$2/$1/package.json"
    "lib-package.json$__$2/$1/libs/$1/package.json"
    "README.md$__$2/$1/README.md"
    "CONTRIBUTION.md$__$2/$1/CONTRIBUTION.md"
    "environment.ts$__$2/$1/apps/demo-web/src/environments/environment.ts"
    "environment.prod.ts$__$2/$1/apps/demo-web/src/environments/environment.prod.ts"
    "favicon.ico$__$2/$1/apps/demo-web/src/favicon.ico"
    "index.html$__$2/$1/apps/demo-web/src/index.html"
    "styles.scss$__$2/$1/apps/demo-web/src/styles.scss"
    "app/app.component.ts$__$2/$1/apps/demo-web/src/app/app.component.ts"
    "app/app.component.html$__$2/$1/apps/demo-web/src/app/app.component.html"
    "app/app.component.scss$__$2/$1/apps/demo-web/src/app/app.component.scss"
    "app/app.routes.ts$__$2/$1/apps/demo-web/src/app/app.routes.ts"
    "app/app.module.ts$__$2/$1/apps/demo-web/src/app/app.module.ts"    
)

CopyRootFolders=(
    "assets"
    "css"
)

CopyAppFolders=(
    "pages"
    "examples"
    "models"
)

# Inputs $1= package-name $2= desired directory (defaults to current)
exec $1 $2 $scope