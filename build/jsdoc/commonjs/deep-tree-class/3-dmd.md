<a name="module_farm"></a>

## farm
test to check deep trees render ok


* [farm](#module_farm)
    * [Farm](#exp_module_farm--Farm) ⏏
        * [new Farm()](#new_module_farm--Farm_new)
        * _instance_
            * [.equipment](#module_farm--Farm+equipment) : [<code>Equipment</code>](#module_farm--Farm..Equipment)
            * [.tractor](#module_farm--Farm..Equipment+tractor) : [<code>Tractor</code>](#module_farm--Farm..Tractor)
        * _inner_
            * [~Equipment](#module_farm--Farm..Equipment)
            * [~Tractor](#module_farm--Farm..Tractor)
                * _instance_
                    * [.engine](#module_farm--Farm..Tractor+engine)
                        * [.manufacturer](#module_farm--Farm..Tractor+engine.manufacturer)
                        * [.size](#module_farm--Farm..Tractor+engine.size)
                * _static_
                    * [.something()](#module_farm--Farm..Tractor.something)

<a name="exp_module_farm--Farm"></a>

### Farm ⏏
the farm

**Kind**: Exported class  
<a name="new_module_farm--Farm_new"></a>

#### new Farm()
the constructor

<a name="module_farm--Farm+equipment"></a>

#### farm.equipment : [<code>Equipment</code>](#module_farm--Farm..Equipment)
farm equipment

**Kind**: instance property of [<code>Farm</code>](#exp_module_farm--Farm)  
<a name="module_farm--Farm..Equipment+tractor"></a>

#### farm.tractor : [<code>Tractor</code>](#module_farm--Farm..Tractor)
the tractor

**Kind**: instance property of [<code>Farm</code>](#exp_module_farm--Farm)  
<a name="module_farm--Farm..Equipment"></a>

#### Farm~Equipment
Equipment class

**Kind**: inner class of [<code>Farm</code>](#exp_module_farm--Farm)  
<a name="module_farm--Farm..Tractor"></a>

#### Farm~Tractor
Tractor class

**Kind**: inner class of [<code>Farm</code>](#exp_module_farm--Farm)  

* [~Tractor](#module_farm--Farm..Tractor)
    * _instance_
        * [.engine](#module_farm--Farm..Tractor+engine)
            * [.manufacturer](#module_farm--Farm..Tractor+engine.manufacturer)
            * [.size](#module_farm--Farm..Tractor+engine.size)
    * _static_
        * [.something()](#module_farm--Farm..Tractor.something)

<a name="module_farm--Farm..Tractor+engine"></a>

##### tractor.engine
engine details

**Kind**: instance property of [<code>Tractor</code>](#module_farm--Farm..Tractor)  

* [.engine](#module_farm--Farm..Tractor+engine)
    * [.manufacturer](#module_farm--Farm..Tractor+engine.manufacturer)
    * [.size](#module_farm--Farm..Tractor+engine.size)

<a name="module_farm--Farm..Tractor+engine.manufacturer"></a>

###### engine.manufacturer
who built

**Kind**: static property of [<code>engine</code>](#module_farm--Farm..Tractor+engine)  
<a name="module_farm--Farm..Tractor+engine.size"></a>

###### engine.size
the size

**Kind**: static property of [<code>engine</code>](#module_farm--Farm..Tractor+engine)  
<a name="module_farm--Farm..Tractor.something"></a>

##### Tractor.something()
a static property on Tractor

**Kind**: static method of [<code>Tractor</code>](#module_farm--Farm..Tractor)  
