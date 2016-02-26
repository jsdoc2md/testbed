<a name="GlobalClass"></a>
## GlobalClass
a global class

**Kind**: global class  

* [GlobalClass](#GlobalClass)
    * [new GlobalClass(one, two)](#new_GlobalClass_new)
    * [.propOne](#GlobalClass+propOne) : `number`
    * [.shat()](#GlobalClass.shat)
    * [.methodOne()](#GlobalClass+methodOne)
    * [.methodTwo()](#GlobalClass+methodTwo)


<a name="new_GlobalClass_new"></a>
### new GlobalClass(one, two)
the global class constructor

  

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| one   | `number` | first param  |
| two   | `string` | second param |


**Example**
```js
var one = 1
```


<a name="GlobalClass+propOne"></a>
### globalClass.propOne : `number`
an instance property

**Kind**: instance property of [`GlobalClass`](#GlobalClass)


<a name="GlobalClass.shat"></a>
### GlobalClass.shat()
a static method

**Kind**: static method of [`GlobalClass`](#GlobalClass)


<a name="GlobalClass+methodOne"></a>
### globalClass.methodOne()
parent method one

**Kind**: instance method of [`GlobalClass`](#GlobalClass)


<a name="GlobalClass+methodTwo"></a>
### globalClass.methodTwo()
parent method two

**Kind**: instance method of [`GlobalClass`](#GlobalClass)


<a name="GlobalChildClass"></a>
## GlobalChildClass ⇐ GlobalClass
the child of global class

**Kind**: global class  

* [GlobalChildClass](#GlobalChildClass) ⇐ GlobalClass
    * [.propThree](#GlobalChildClass+propThree)
    * [.methodTwo()](#GlobalChildClass+methodTwo)
    * [.propOne](#the anchor of the super class) : `number`
    * [.methodOne()](#the anchor of the super class)


<a name="GlobalChildClass+propThree"></a>
### globalChildClass.propThree
an instance property

**Kind**: instance property of [`GlobalChildClass`](#GlobalChildClass)


<a name="GlobalChildClass+methodTwo"></a>
### globalChildClass.methodTwo()
overridden child methodTwo

**Kind**: instance method of [`GlobalChildClass`](#GlobalChildClass)


<a name="the anchor of the super class"></a>
### globalChildClass.propOne : `number`
an instance property

**Kind**: instance property of [`GlobalChildClass`](#GlobalChildClass)


<a name="the anchor of the super class"></a>
### globalChildClass.methodOne()
parent method one

**Kind**: instance method of [`GlobalChildClass`](#GlobalChildClass)


