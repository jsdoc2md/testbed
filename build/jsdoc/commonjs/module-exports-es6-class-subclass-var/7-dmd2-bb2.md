## es6-class
ES6 Class (with sub-class) exported indirectly by a variable on module.exports.

  

* es6-class
    * [ExportedClass](#exp_module_es6-class--ExportedClass) ⏏
        * [new ExportedClass(one, two)](#new_module_es6-class--ExportedClass_new)
        * [.propOne](#module_es6-class--ExportedClass.ExportedClass+propOne) : number
        * [.shat()](#BITBUCKET-module:es6-class--ExportedClass.shat)
        * [.methodOne()](#BITBUCKET-module:es6-class--ExportedClass#methodOne)
        * [.methodTwo()](#BITBUCKET-module:es6-class--ExportedClass#methodTwo)
        * [~ChildClass](#module_es6-class--ExportedClass..ChildClass) ⇐ ExportedClass
            * [.propThree](#module_es6-class--ExportedClass..ChildClass.ChildClass+propThree)


### ExportedClass ⏏
a class exported from a module

**Kind**: Exported class


#### new ExportedClass(one, two)
the class constructor

  

| Param | Type   | Description  |
| ----- | ------ | ------------ |
| one   | number | first param  |
| two   | string | second param |


**Example**
```js
var one = 1
```


#### exportedClass.propOne : number
an instance property

**Kind**: instance property of [ExportedClass](#exp_module_es6-class--ExportedClass)


#### ExportedClass.shat()
a static method

**Kind**: static method of [ExportedClass](#exp_module_es6-class--ExportedClass)


#### exportedClass.methodOne()
parent method one

**Kind**: instance method of [ExportedClass](#exp_module_es6-class--ExportedClass)


#### exportedClass.methodTwo()
parent method two

**Kind**: instance method of [ExportedClass](#exp_module_es6-class--ExportedClass)


#### ExportedClass~ChildClass ⇐ ExportedClass
the child of exported class

**Kind**: inner class of [ExportedClass](#exp_module_es6-class--ExportedClass)


##### childClass.propThree
an instance property

**Kind**: instance property of [ChildClass](#module_es6-class--ExportedClass..ChildClass)


