<a name="GlobalClass"></a>

## GlobalClass
a global class

**Kind**: global class  

* [GlobalClass](#GlobalClass)
    * [new GlobalClass(one, two)](#new_GlobalClass_new)
    * _instance_
        * [.propOne](#GlobalClass+propOne) : <code>number</code>
        * [.methodOne()](#GlobalClass+methodOne)
        * [.methodTwo()](#GlobalClass+methodTwo)
    * _static_
        * [.shat()](#GlobalClass.shat)

<a name="new_GlobalClass_new"></a>

### new GlobalClass(one, two)
the global class constructor

**Throws**:

- <code>string</code> A serious error occurred.


| Param | Type | Description |
| --- | --- | --- |
| one | <code>number</code> | first param |
| two | <code>string</code> | second param |

**Example**  
```js
var one = 1
```
<a name="GlobalClass+propOne"></a>

### globalClass.propOne : <code>number</code>
an instance property

**Kind**: instance property of [<code>GlobalClass</code>](#GlobalClass)  
<a name="GlobalClass+methodOne"></a>

### globalClass.methodOne()
parent method one

**Kind**: instance method of [<code>GlobalClass</code>](#GlobalClass)  
<a name="GlobalClass+methodTwo"></a>

### globalClass.methodTwo()
parent method two

**Kind**: instance method of [<code>GlobalClass</code>](#GlobalClass)  
<a name="GlobalClass.shat"></a>

### GlobalClass.shat()
a static method

**Kind**: static method of [<code>GlobalClass</code>](#GlobalClass)  
<a name="GlobalChildClass"></a>

## GlobalChildClass ⇐ [<code>GlobalClass</code>](#GlobalClass)
the child of global class

**Kind**: global class  
**Extends**: [<code>GlobalClass</code>](#GlobalClass)  

* [GlobalChildClass](#GlobalChildClass) ⇐ [<code>GlobalClass</code>](#GlobalClass)
    * [.propThree](#GlobalChildClass+propThree)
    * [.propOne](#GlobalClass+propOne) : <code>number</code>
    * [.methodTwo()](#GlobalChildClass+methodTwo)
    * [.methodOne()](#GlobalClass+methodOne)

<a name="GlobalChildClass+propThree"></a>

### globalChildClass.propThree
an instance property

**Kind**: instance property of [<code>GlobalChildClass</code>](#GlobalChildClass)  
<a name="GlobalClass+propOne"></a>

### globalChildClass.propOne : <code>number</code>
an instance property

**Kind**: instance property of [<code>GlobalChildClass</code>](#GlobalChildClass)  
**Overrides**: [<code>propOne</code>](#GlobalClass+propOne)  
<a name="GlobalChildClass+methodTwo"></a>

### globalChildClass.methodTwo()
overridden child methodTwo

**Kind**: instance method of [<code>GlobalChildClass</code>](#GlobalChildClass)  
**Overrides**: [<code>methodTwo</code>](#GlobalClass+methodTwo)  
<a name="GlobalClass+methodOne"></a>

### globalChildClass.methodOne()
parent method one

**Kind**: instance method of [<code>GlobalChildClass</code>](#GlobalChildClass)  
**Overrides**: [<code>methodOne</code>](#GlobalClass+methodOne)  
