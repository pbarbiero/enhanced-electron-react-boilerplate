# Modern and Minimal Electron + React Starter Kit
_Electron, React, Webpack -- Modern and up-to-date, with a handful of quality of life features included_

I made this starter kit as most boilerplates were either out-of-date, heavy handed, or enforced a structure on me that I just didn't like.
This project utilizes Redux and uses the "ducks" proposal as the basis for the layout and structure of the application views. CSS files are treated as globals, with any less files being compiled as a css module.
The goal is to provide a ready to use, easy to adopt boilerplate and starter kit to get rolling with a modern environment, without too much of a "personal" twist on things.

Production builds do NOT use UglifyJS, instead Babili is used and NO ES2015/ES6 transpilation is provided -- As modern node and chromium versions support 99%+ of the ES6 feature set, I feel those steps are unnecessary.

If you like this project (or think its too heavy handed and want something more minimal), check out [basic-electron-react-boilerplate](https://github.com/pbarbiero/basic-electron-react-boilerplate) which is a cut down version of this project without any decisions made on what you should be using or how to structure your application. Its the bare minimum to get up and running with electron+react+webpack.

### Main features
* Latest React, Redux, and Webpack 2
* Uses ES6 natively without babel transpilation thanks to modern Electron environments
* Minified with Babili
* Uses react-router-dom (React Router v4) with connected-react-router to sync with Redux (uni-directional, use react-router directly)
* LessCSS (easily swapped to Sass if that's more to your liking) using CSS Modules
* Provides a basic component/view structure based on Redux "ducks" proposals, with an included utility helper to make writing your 'views' easier and understandable, with the advantage of minimizing the amount of required files and directory switching
* Embeds [PhotonKit](http://photonkit.com/) for a very basic head start on layouts and styling. Its lightweight and easy to rip out or build on top of.
* _More to come! Feel free to contribute your suggestions and/or ideas_

### To get started:
* Run `npm install`

##### Development
* Run `npm run dev` to start webpack-dev-server
* In another terminal window run `npm run testDev` to start electron

##### Production
_You have two options, an automatic build or two manual steps_

###### One Shot
* Run `npm run package` to have webpack compile your application into `dist/bundle.js` and `dist/index.html`, and then an electron-packager run will be triggered for the current platform/arch, outputting to `builds/`

###### Manual
_Recommendation: Update the "postpackage" script call in package.json to specify parameters as you choose and use the `npm run package` command instead of running these steps manually_
* Run `npm run build` to have webpack compile and output your bundle to `dist/bundle.js`
* Then you can call electron-packager directly with any commands you choose

If you want to test the production build (In case you think Babili might be breaking something) after running `npm run build` you can then call `npm run testProd`. This will cause electron to load off of the `dist/` build instead of looking for the webpack-dev-server instance.

### Scaffold Utility
This project comes with a basic scaffold utility (built on inquirer) to quickly add new components to the application. It lets you create both stateful and stateless components, and you also have the option of spinning up Redux boilerplate to integrate them initially to the redux store with a dummy action that you should swap out immediately. Its written in pure node `fs` calls to be cross platform.
* Run `npm run scaffold`
* Fill out the prompts
* Profit!
