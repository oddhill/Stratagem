# Stratagem - A Lightweight animation library - Alpha 0.1

Stratagem is a simple, lightweight animation library that consists of mixins that are designed to be easy to use and simple. 
The library consists of many animations, but none will be printed unless you use them. No duplicate code, use what you want and leave the rest.

Stratagem uses SCSS syntax.

[Documentation](http://oddhill.github.io/Stratagem/documentation/)

## Requirements
Sass 3.4

This plugin is released under the MIT license.
[More Information](http://opensource.org/licenses/MIT)

## Installation

In your main import file (main.scss perhaps?) before importing your variables, helpers etc.
```
@import {filepath}/stratagem;
```

In your main import file but after you've imported all your Scss.
```
@import {filepath}/stratagem-two;
```

So your main import file should look something like this.
```
@import {filepath}/stratagem;

// Your other Scss code here

@import {filepath}/stratagem-two;
```
### Why is needed to import Stratagem two times? 
First we import Stratagems helper functions and all keyframes. Since Stratagem uses a "guard" function to prevent duplicate/unused code to be printed we need to split them up so the "guard" function can work properly.

******

Development is sponsored by [Odd Hill](http://oddhill.se)
