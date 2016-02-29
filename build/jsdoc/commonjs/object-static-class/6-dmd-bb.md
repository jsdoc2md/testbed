## heaven
factory module creating dodgy cloud. object-with-static-class.


* [heaven](#markdown-header-heaven)
    * _static_
        * [.Cloud](#markdown-header-heavencloud-moduleheavencloud) : [Cloud](#markdown-header-heavencloud-moduleheavencloud)
        * [.createCloud()](#markdown-header-heavencreatecloud-moduleheavencloud) ⇒ [Cloud](#markdown-header-heavencloud-moduleheavencloud)
    * _inner_
        * [~Cloud](#markdown-header-heavencloud)
            * [new Cloud(options)](#markdown-header-new-cloudoptions)
            * _instance_
                * [.size](#markdown-header-cloudsize-number) : number
                * [.rain](#markdown-header-cloudrain-boolean) : boolean
            * _static_
                * [.SPACES](#markdown-header-cloudspaces-number) : number
                * [.classMethod()](#markdown-header-cloudclassmethod)
        * [~FACT](#markdown-header-heavenfact-boolean) : boolean

### heaven.Cloud : [Cloud](#markdown-header-heavencloud)
access to the Cloud class

**Kind**: static property of [heaven](#markdown-header-heaven)  
### heaven.createCloud() ⇒ [Cloud](#markdown-header-heavencloud)
**Kind**: static method of [heaven](#markdown-header-heaven)  
### heaven~Cloud
The main class for a cloud

**Kind**: inner class of [heaven](#markdown-header-heaven)  

* [~Cloud](#markdown-header-heavencloud)
    * [new Cloud(options)](#markdown-header-new-cloudoptions)
    * _instance_
        * [.size](#markdown-header-cloudsize-number) : number
        * [.rain](#markdown-header-cloudrain-boolean) : boolean
    * _static_
        * [.SPACES](#markdown-header-cloudspaces-number) : number
        * [.classMethod()](#markdown-header-cloudclassmethod)

#### new Cloud(options)
cloud constructor


| Param | Type | Description |
| --- | --- | --- |
| options | object | the options |

#### cloud.size : number
**Kind**: instance property of [Cloud](#markdown-header-new-cloudoptions)  
**Default**: `4`  
#### cloud.rain : boolean
**Kind**: instance property of [Cloud](#markdown-header-new-cloudoptions)  
**Default**: `false`  
#### Cloud.SPACES : number
a class constant

**Kind**: static constant of [Cloud](#markdown-header-new-cloudoptions)  
#### Cloud.classMethod()
a class method

**Kind**: static method of [Cloud](#markdown-header-new-cloudoptions)  
### heaven~FACT : boolean
an inner constant

**Kind**: inner constant of [heaven](#markdown-header-heaven)  
