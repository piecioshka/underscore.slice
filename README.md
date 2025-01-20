# underscore.slice

[![node version](https://img.shields.io/node/v/underscore.slice.svg)](https://www.npmjs.com/package/underscore.slice)
[![npm version](https://badge.fury.io/js/underscore.slice.svg)](https://badge.fury.io/js/underscore.slice)
[![downloads count](https://img.shields.io/npm/dt/underscore.slice.svg)](https://www.npmjs.com/package/underscore.slice)
[![size](https://packagephobia.com/badge?p=underscore.slice)](https://packagephobia.com/result?p=underscore.slice)
[![license](https://img.shields.io/npm/l/underscore.slice.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/underscore.slice/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/underscore.slice/actions/workflows/testing.yml)

🔨 Plugin for Underscore.js: add `_.slice()`, which slice array to deep-levels array

```
       .__  .__
  _____|  | |__| ____  ____
 /  ___/  | |  |/ ___\/ __ \
 \___ \|  |_|  \  \__\  ___/
/____  >____/__|\___  >___  >
     \/             \/    \/
```

## Usage

Installation:

```bash
npm install underscore.slice
```

```javascript
var _ = require("underscore");
var slice = require("underscore.slice");
_.mixin({ slice: slice });

var list = [1, 2, 3, 4, 5];
_.slice(list, 2); // [[1, 2], [3, 4], [5]]
_.slice(list, 4); // [[1, 2, 3, 4], [5]]
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2014
