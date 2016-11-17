## React Redux Demo 1
### Overview
This is the simplest React-Redux Demo application I could think of. Its a single page application which adds text field input to al list - that's it.

I did this because I had trouble finding a simple, fulling working example and lots of Functional Programming gobbledegook instead.

This is the first of several demos, each of which adds new pieces of Redux capability and is as much for me as it is for you!

### Technology
* react-redux
* webpack


Redux Features:
* no usage of react-redux connect function
* store.dispatch and store.subscribe - the simplest method for creating actions
* combineReducers is used, even though I only have a single reducer function.


### How to Run

Clone the project and install webpack (linux command line versions shown):

```
sudo npm install webpack -g
sudo npm install webpack webpack-dev-server --save-dev
sudo npm install webpack css-loader style-loader --save-dev
sudo npm install json-loader --save-dev
```

Then run:
```
webpack
```

```
open build/index.html in your browser
```

#### Hot Module Replacement

run the batch file 
```
run_dev_webpack_server
```
The server will host the index.html page at (http://localhost:8080)

### Directories

   build/ ==> location of HTML, CSS and generated javascript file
   
   src/	  ==> All the source in single directory (rather than usual directory structure) 	


