# Javascript Fundamentals Workshop

## Modern Javascript

It is not related with Java, was named "javascript" just for marketing.

## Fundamentals agenda

* Variables and Constants
* Data types
* Scope
* Flow control
* Arrays & objects

### Variables

Can be reassigned
```
var validNumber = 3;

let myVar = 4;
```

### Constants

Can not change the value during the execution
```
const MY_CONST = 'something';
```

### Data types

The values have data types, but not the variables. This means JS is typeless.

```
let myVar = 'some string here';

typeof myVar // string
```

*What is the type for a variable declared without value?*  
When you declare a variable empty, the data type is "undefined".
```
let myVar;

typeof myVar // undefined
```

### Arrays

Properties for arrays
* length

Some methods for array manipulation
* push() - Add an element at the end
* pop() - Remove the last element
* unshift() - Add an element at the beginning
* shift() - Remove the first element
* slice() - Get a copy piece of the array (start, end)
* forEach()
* sort()

*How will you apply a shift with slice?*
```
// myArray.shift();
myArray = myArray.slice(1);
```
