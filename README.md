#uiBlock

### About
A lightweight jQuery plugin to block the targeted element in DOM. Mostly used for ajax loading snippets of page.

  - It's tiny! Just 2KB
  - Easy to customize
  - Allows callback functions

### Prerequisites
- jQuery library version 1.7.0 and higher

### Installation
- Install via [Bower](http://bower.io) ```bower install --save uiBlock```
- Download via [GitHub](https://github.com/im-s/uiBlock/archive/master.zip)

### Usage

#####Block element
```javascript
$("#myDiv").uiBlock();
```

or

```javascript
$("#myDiv").uiBlock("start");
```

#####Unblock element
```javascript
$("#myDiv").uiBlock("stop");
```

#####Configure
U can change default settings for plugin

```javascript
$.fn.uiBlock.defaults.text = "Processing";
```

or u can pass it with initializaiton

```javascript
$("#myDiv").uiBlock("start", {
text: "Processing"
});
```

#####Callbacks
u can define callback onStart

```javascript
$.fn.uiBlock.defaults.onStart = function(element) {
console.log(element.id + " was blocked");
};
```

and callback onStop

```javascript
$.fn.uiBlock.defaults.onStop = function(element) {
console.log(element.id + " was unblocked");
};
```

### Contact on author
E-mail: [pustka.ivo@gmail.com](mailto:pustka.ivo@gmail.com)

### License
MIT
