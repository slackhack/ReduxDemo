## React Redux Demo 1
### Overview
This is the simplest React-Redux Demo application I could think of. It's a single page application which adds text field input to a list - that's it.

I did this because I had trouble finding a super simple, fully working example, and had to wade through lots of partially helpful documentation to get to this point.

This is the first of several demos, each of which adds new pieces of Redux capability and is as much for me as it is for you!

Also, the CSS got about 12 seconds of effort, so the pig is wearing very cheap lipstick.

### Technology
* react-redux
* webpack


Redux Features:
* no usage of react-redux's 'connect' function
* store.dispatch and store.subscribe - the simplest method for creating actions
* combineReducers is used, even though I only have a single reducer function.


### How to Run

Clone the project and install webpack (linux command line versions shown ... use -g or --save-dev flags to your taste):

```
sudo npm install webpack
sudo npm install webpack webpack-dev-server
sudo npm install webpack css-loader style-loader
sudo npm install json-loader
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

   build/ ==> location of HTML, CSS and generated javascript files

   src/	  ==> All the source in single directory (rather than usual directory structure)


#### Feedback

If you have gotten this far down the document or even cloned the project - that make two of us. Hope it was useful.
If you have found an issue or are annoyed at something, send me an email at  **smerzlia**  SECRET_EMAIL_THINGY_SYMBOL **gmail.com**.
