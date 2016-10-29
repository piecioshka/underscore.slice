# underscore.slice ([npm](https://www.npmjs.com/package/underscore.slice))

[![npm version](https://badge.fury.io/js/underscore.slice.svg)](https://badge.fury.io/js/underscore.slice)
![](https://img.shields.io/npm/dt/underscore.slice.svg)
[![Travis](https://img.shields.io/travis/piecioshka/underscore.slice.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/underscore.slice)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/underscore.slice/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/underscore.slice?branch=master)

> :hammer: Plugin for Underscore.js: slice array to deep-levels array

<pre>
       .__  .__              
  _____|  | |__| ____  ____  
 /  ___/  | |  |/ ___\/ __ \ 
 \___ \|  |_|  \  \__\  ___/ 
/____  >____/__|\___  >___  >
     \/             \/    \/ 
</pre>

### Install

```
npm install underscore.slice
```

## Usage

```javascript
var _ = require('underscore');
var slice = require('underscore.slice');
_.mixin({ slice: slice });

var list = [1, 2, 3, 4, 5];
_.slice(list, 2); // [[1, 2], [3, 4], [5]]
_.slice(list, 4); // [[1, 2, 3, 4], [5]]
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2014
