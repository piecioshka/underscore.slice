# [Underscore.js][1] create nesting arrays

<pre>
_____     _________
_____________________  /___________  /
__  __ \  _ \_  ___/  __/  _ \  __  / 
_  / / /  __/(__  )/ /_ /  __/ /_/ /  
/_/ /_/\___//____/ \__/ \___/\__,_/   
</pre>

Usage
=====

```javascript
var list = [1, 2, 3, 4, 5];
_.nested(list, 2); // [[1, 2], [3, 4], [5]]
_.nested(list, 4); // [[1, 2, 3, 4], [5]]
```

# License

[The MIT License][0]

[0]: http://piecioshka.mit-license.org
[1]: http://underscorejs.org/
[2]: http://pivotal.github.io/jasmine/
