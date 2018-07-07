# Javascript Fundamentals Workshop

## Modern Javascript

It is not related with Java, was named "javascript" just for marketing.

## Fundamentals agenda

* Variables and Constants
* Data types
* Functions
* Control structures
* Flow control
* Scope
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

### Functions

Functions can return or not values.  
JS have named functions

```
function sum(x,y) {
    return x + y;
}
```

The functions can be assigned to a variable and use it.

```
const myFunc = function sum(x,y) {
    return x + y;
}

myFunc();
```

### Conditionals

Single conditional
```
let status;
if ( temperature > 25 ) {
    status = 'hot';
}
```

Double conditional
```
let status;
if ( temperature > 25 ) {
    status = 'hot';
} else {
    status = 'cold'
}
```
Ternary
```
let status =  temperature > 25 ? 'hot' : 'cold';
```
Switch
```
let option;

switch(option) {
    case 1:
        console.log('something');
        break;
    case 2:
        console.log('something else');
        break;      
    default:
        console.log('default');
}
```

### Operators

### Scope

There is global, function and block scope.

### Objects

### Arrow functions

Help to avoid the mess to access `this`

In arrow functions, `this` is the function itself, and not the `this` from the parent object.
