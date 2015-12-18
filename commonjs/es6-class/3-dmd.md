<a name="module_es6-class"></a>
## es6-class

* [es6-class](#module_es6-class)
    * [ExportedClass](#exp_module_es6-class--ExportedClass) ⏏
        * [new ExportedClass(one, two)](#new_module_es6-class--ExportedClass_new)
        * _instance_
            * [.propOne](#module_es6-class--ExportedClass.ExportedClass+propOne) : <code>number</code>
            * [.methodOne()](#module_es6-class--ExportedClass+methodOne)
            * [.methodTwo()](#module_es6-class--ExportedClass+methodTwo)
        * _static_
            * [.shat()](#module_es6-class--ExportedClass.shat)
        * _inner_
            * [~ChildClass](#module_es6-class--ExportedClass..ChildClass) ⇐ <code>ExportedClass</code>
                * [.propThree](#module_es6-class--ExportedClass..ChildClass.ChildClass+propThree)

<a name="exp_module_es6-class--ExportedClass"></a>
### ExportedClass ⏏
a class exported from a module

**Kind**: Exported class  
<a name="new_module_es6-class--ExportedClass_new"></a>
#### new ExportedClass(one, two)
the class constructor

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
<a name="module_es6-class--ExportedClass.ExportedClass+propOne"></a>
#### exportedClass.propOne : <code>number</code>
an instance property

**Kind**: instance property of <code>[ExportedClass](#exp_module_es6-class--ExportedClass)</code>  
<a name="module_es6-class--ExportedClass+methodOne"></a>
#### exportedClass.methodOne()
parent method one

**Kind**: instance method of <code>[ExportedClass](#exp_module_es6-class--ExportedClass)</code>  
<a name="module_es6-class--ExportedClass+methodTwo"></a>
#### exportedClass.methodTwo()
parent method two

**Kind**: instance method of <code>[ExportedClass](#exp_module_es6-class--ExportedClass)</code>  
<a name="module_es6-class--ExportedClass.shat"></a>
#### ExportedClass.shat()
a static method

**Kind**: static method of <code>[ExportedClass](#exp_module_es6-class--ExportedClass)</code>  
<a name="module_es6-class--ExportedClass..ChildClass"></a>
#### ExportedClass~ChildClass ⇐ <code>ExportedClass</code>
the child of exported class

**Kind**: inner class of <code>[ExportedClass](#exp_module_es6-class--ExportedClass)</code>  
**Extends:** <code>ExportedClass</code>  
<a name="module_es6-class--ExportedClass..ChildClass.ChildClass+propThree"></a>
##### childClass.propThree
an instance property

**Kind**: instance property of <code>[ChildClass](#module_es6-class--ExportedClass..ChildClass)</code>  
