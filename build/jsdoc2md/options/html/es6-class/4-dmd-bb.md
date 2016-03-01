
## Classes
Global | Description
------ | -----------
GlobalClass | a global class
GlobalChildClass ⇐ [GlobalClass](#markdown-header-new-globalclassone-two) | the child of global class

## GlobalClass
a global class

**Kind**: global class  

* [GlobalClass](#markdown-header-globalclass)
    * [new GlobalClass(one, two)](#markdown-header-new-globalclassone-two)
    * _instance_
        * [.propOne](#markdown-header-globalclasspropone-number) : number
    * _static_
        * [.shat()](#markdown-header-globalclassshat)
    * _instance_
        * [.methodOne()](#markdown-header-globalclassmethodone)
        * [.methodTwo()](#markdown-header-globalclassmethodtwo)

### new GlobalClass(one, two)
the global class constructor

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
### globalClass.propOne : number
an instance property

**Kind**: instance property of [GlobalClass](#markdown-header-new-globalclassone-two)  
### GlobalClass.shat()
a static method

**Kind**: static method of [GlobalClass](#markdown-header-new-globalclassone-two)  
### globalClass.methodOne()
parent method one

**Kind**: instance method of [GlobalClass](#markdown-header-new-globalclassone-two)  
### globalClass.methodTwo()
parent method two

**Kind**: instance method of [GlobalClass](#markdown-header-new-globalclassone-two)  
## GlobalChildClass ⇐ [GlobalClass](#markdown-header-new-globalclassone-two)
the child of global class

**Kind**: global class  
**Extends:** [GlobalClass](#markdown-header-new-globalclassone-two)  

* [GlobalChildClass](#markdown-header-globalchildclass-globalclass) ⇐ [GlobalClass](#markdown-header-new-globalclassone-two)
    * [.propThree](#markdown-header-globalchildclasspropthree)
    * [.methodTwo()](#markdown-header-globalchildclassmethodtwo)
    * [.propOne](#markdown-header-globalchildclasspropone-number) : number
    * [.methodOne()](#markdown-header-globalchildclassmethodone)

### globalChildClass.propThree
an instance property

**Kind**: instance property of [GlobalChildClass](#markdown-header-globalchildclass-globalclass)  
### globalChildClass.methodTwo()
overridden child methodTwo

**Kind**: instance method of [GlobalChildClass](#markdown-header-globalchildclass-globalclass)  
**Overrides:** methodTwo  
### globalChildClass.propOne : number
an instance property

**Kind**: instance property of [GlobalChildClass](#markdown-header-globalchildclass-globalclass)  
### globalChildClass.methodOne()
parent method one

**Kind**: instance method of [GlobalChildClass](#markdown-header-globalchildclass-globalclass)  
