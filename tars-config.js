module.exports = {
    "postcss": [{
        name: 'postcss-pxtorem',
        options: {
            rootValue: 10,
            propList: ["*", "!*border*"],
            selectorBlackList: [/^html$/]
        }
    },{
        name: 'postcss-rgb'
    },{
        name: 'postcss-inline-svg',
        options: {
            paths: ["./dev/static/img/minified-svg/"]
        }
    },{
        name: 'postcss-object-fit-images'
    }],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "concat"
    },
    "js": {
        "workflow": "modular",
        "bundler": "webpack",
        "lint": false,
        "useBabel": true,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false,
            "providePlugin": {}
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "devPath": "./dev/",
    "buildPath": "./builds/",
    "useBuildVersioning": false,
    "useArchiver": false,
    "ulimit": 4096,
    "templater": "pug",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    },
    "staticPrefix": "static/"
};
