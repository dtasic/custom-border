# custom-border.js #

Small Jquery plugin to add custom border with image pattern to any div.

### What is this repository for? ###

* Small Jquery plugin to add custom border with image pattern to any div.

### How do I get set up? ###

* add jquery.custom-border.js to your page
* usage: $("#your-element").customBorder();
* Dependencies: jquery 1.6.4 or higher.

### Properties ###

* borderSize (default: '5px') // width of custom border
* borderBgImg (default: '') // image filename with relative image path ('path/to/file/example.png')
* borderColor (default: '') // solid background color, just in case you need it
* backgroundColor (default: inherit from element. If none or transparent it will be changed to '#FFF') // change background color of element
* innerPadding (default: '') // change padding of element

example of options:

```
$("#your-element").customBorder({
    borderSize: '5px',
    borderBgImg: '',
    borderColor: '',
    backgroundColor: '',
    innerPadding: ''
});

```

### Demo ###

https://jsfiddle.net/308772ye/2/

### Who do I talk to? ###

* dtasic@gmail.com
