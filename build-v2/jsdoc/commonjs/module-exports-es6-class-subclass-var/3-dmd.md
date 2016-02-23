<a name="module_es6-class"></a>
## es6-class
ES6 Class (with sub-class) exported indirectly by a variable on module.exports.

  

* es6-class
    * [ExportedClass](#exp_module_es6-class--ExportedClass) ⏏
        * [new ExportedClass(one, two)](#new_module_es6-class--ExportedClass_new)
        * _instance_
            * [.propOne](#module_es6-class--ExportedClass.ExportedClass+propOne) : `number`
            * [.methodOne()](#module_es6-class--ExportedClass+methodOne)
            * [.methodTwo()](#module_es6-class--ExportedClass+methodTwo)
        * _static_
            * [.shat()](#module_es6-class--ExportedClass.shat)
        * _inner_
            * [~ChildClass](#module_es6-class--ExportedClass..ChildClass) ⇐ ExportedClass
                * _instance_
                    * [.propThree](#module_es6-class--ExportedClass..ChildClass.ChildClass+propThree)


<a name="exp_module_es6-class--ExportedClass"></a>
### ExportedClass ⏏
a class exported from a module

**Kind**: Exported class


<a name="new_module_es6-class--ExportedClass_new"></a>
#### new ExportedClass(one, two)
the class constructor

  

| Param | Type     | Description  |
| ----- | -------- | ------------ |
| one   | `number` | first param  |
| two   | `string` | second param |


**Example**
```js
var one = 1
```


### Category: instance


<a name="module_es6-class--ExportedClass.ExportedClass+propOne"></a>
##### exportedClass.propOne : `number`
an instance property

**Kind**: instance property of [`ExportedClass`](#exp_module_es6-class--ExportedClass)


<a name="module_es6-class--ExportedClass+methodOne"></a>
##### exportedClass.methodOne()
parent method one

**Kind**: instance method of [`ExportedClass`](#exp_module_es6-class--ExportedClass)


<a name="module_es6-class--ExportedClass+methodTwo"></a>
##### exportedClass.methodTwo()
parent method two

**Kind**: instance method of [`ExportedClass`](#exp_module_es6-class--ExportedClass)


### Category: static


<a name="module_es6-class--ExportedClass.shat"></a>
##### ExportedClass.shat()
a static method

**Kind**: static method of [`ExportedClass`](#exp_module_es6-class--ExportedClass)


### Category: inner


<a name="module_es6-class--ExportedClass..ChildClass"></a>
##### ExportedClass~ChildClass ⇐ ExportedClass
the child of exported class

**Kind**: inner class of [`ExportedClass`](#exp_module_es6-class--ExportedClass)  

* [~ChildClass](#module_es6-class--ExportedClass..ChildClass) ⇐ ExportedClass
    * _instance_
        * [.propThree](#module_es6-class--ExportedClass..ChildClass.ChildClass+propThree)


##### Category: instance


<a name="module_es6-class--ExportedClass..ChildClass.ChildClass+propThree"></a>
####### childClass.propThree
an instance property

**Kind**: instance property of [`ChildClass`](#module_es6-class--ExportedClass..ChildClass)


