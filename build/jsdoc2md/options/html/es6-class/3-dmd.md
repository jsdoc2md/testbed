## Classes

<dl>
<dt><a href="#GlobalClass">GlobalClass</a></dt>
<dd><p>a global class</p>
</dd>
<dt><a href="#GlobalChildClass">GlobalChildClass</a> ⇐ <code><a href="#GlobalClass">GlobalClass</a></code></dt>
<dd><p>the child of global class</p>
</dd>
</dl>

<a name="GlobalClass"></a>

## GlobalClass
a global class

**Kind**: global class  

* [GlobalClass](#GlobalClass)
    * [new GlobalClass(one, two)](#new_GlobalClass_new)
    * _instance_
        * [.propOne](#GlobalClass+propOne) : <code>number</code>
    * _static_
        * [.shat()](#GlobalClass.shat)
    * _instance_
        * [.methodOne()](#GlobalClass+methodOne)
        * [.methodTwo()](#GlobalClass+methodTwo)

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

**Kind**: instance property of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalClass.shat"></a>

### GlobalClass.shat()
a static method

**Kind**: static method of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalClass+methodOne"></a>

### globalClass.methodOne()
parent method one

**Kind**: instance method of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalClass+methodTwo"></a>

### globalClass.methodTwo()
parent method two

**Kind**: instance method of <code>[GlobalClass](#GlobalClass)</code>  
<a name="GlobalChildClass"></a>

## GlobalChildClass ⇐ <code>[GlobalClass](#GlobalClass)</code>
the child of global class

**Kind**: global class  
**Extends:** <code>[GlobalClass](#GlobalClass)</code>  

* [GlobalChildClass](#GlobalChildClass) ⇐ <code>[GlobalClass](#GlobalClass)</code>
    * [.propThree](#GlobalChildClass+propThree)
    * [.methodTwo()](#GlobalChildClass+methodTwo)
    * [.propOne](#GlobalClass+propOne) : <code>number</code>
    * [.methodOne()](#GlobalClass+methodOne)

<a name="GlobalChildClass+propThree"></a>

### globalChildClass.propThree
an instance property

**Kind**: instance property of <code>[GlobalChildClass](#GlobalChildClass)</code>  
<a name="GlobalChildClass+methodTwo"></a>

### globalChildClass.methodTwo()
overridden child methodTwo

**Kind**: instance method of <code>[GlobalChildClass](#GlobalChildClass)</code>  
**Overrides:** <code>[methodTwo](#GlobalClass+methodTwo)</code>  
<a name="GlobalClass+propOne"></a>

### globalChildClass.propOne : <code>number</code>
an instance property

**Kind**: instance property of <code>[GlobalChildClass](#GlobalChildClass)</code>  
<a name="GlobalClass+methodOne"></a>

### globalChildClass.methodOne()
parent method one

**Kind**: instance method of <code>[GlobalChildClass](#GlobalChildClass)</code>  
