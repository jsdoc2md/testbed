## es6-class
ES6 Class (with sub-class) exported indirectly by a variable on module.exports.


* [es6-class](#markdown-header-es6class)
    * [ExportedClass](#markdown-header-exportedclass) ⏏
        * [new ExportedClass(one, two)](#markdown-header-new-exportedclassone-two)
        * _instance_
            * [.propOne](#markdown-header-exportedclasspropone-number) : number
            * [.methodOne()](#markdown-header-exportedclassmethodone)
            * [.methodTwo()](#markdown-header-exportedclassmethodtwo)
        * _static_
            * [.shat()](#markdown-header-exportedclassshat)
        * _inner_
            * [~ChildClass](#markdown-header-exportedclasschildclass-exportedclass) ⇐ ExportedClass
                * [.propThree](#markdown-header-childclasspropthree)

### ExportedClass ⏏
a class exported from a module

**Kind**: Exported class  
#### new ExportedClass(one, two)
the class constructor

**Throws**:

- string A serious error occurred.


| Param | Type | Description |
| --- | --- | --- |
| one | number | first param |
| two | string | second param |

**Example**  
```js
var one = 1
```
#### exportedClass.propOne : number
an instance property

**Kind**: instance property of [ExportedClass](#markdown-header-new-exportedclassone-two)  
#### exportedClass.methodOne()
parent method one

**Kind**: instance method of [ExportedClass](#markdown-header-new-exportedclassone-two)  
#### exportedClass.methodTwo()
parent method two

**Kind**: instance method of [ExportedClass](#markdown-header-new-exportedclassone-two)  
#### ExportedClass.shat()
a static method

**Kind**: static method of [ExportedClass](#markdown-header-new-exportedclassone-two)  
#### ExportedClass~ChildClass ⇐ ExportedClass
the child of exported class

**Kind**: inner class of [ExportedClass](#markdown-header-new-exportedclassone-two)  
**Extends:** [ExportedClass](#markdown-header-new-exportedclassone-two)  
##### childClass.propThree
an instance property

**Kind**: instance property of ChildClass  
