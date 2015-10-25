# underscore.nested

![](https://img.shields.io/npm/v/underscore.nested.svg)
![](https://img.shields.io/npm/dt/underscore.nested.svg)
![](https://img.shields.io/npm/l/underscore.nested.svg)

> Underscore.js slice array to deep-levels array

<pre>
_____     _________
_____________________  /___________  /
__  __ \  _ \_  ___/  __/  _ \  __  / 
_  / / /  __/(__  )/ /_ /  __/ /_/ /  
/_/ /_/\___//____/ \__/ \___/\__,_/   
</pre>

### Install

```
npm install underscore.nested
```

## Usage

```javascript
var list = [1, 2, 3, 4, 5];
_.nested(list, 2); // [[1, 2], [3, 4], [5]]
_.nested(list, 4); // [[1, 2, 3, 4], [5]]
```

## License

[The MIT License](http://piecioshka.mit-license.org)
