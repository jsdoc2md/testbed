<a name="module_farm"></a>
## farm
test to check deep trees render ok

  

* farm
    * [Farm](#exp_module_farm--Farm) ⏏
        * [new Farm()](#new_module_farm--Farm_new)
        * _instance_
            * [.equipment](#module_farm--Farm.Farm+equipment) : [`Equipment`](#module_farm--Farm..Equipment)
        * _inner_
            * [~Equipment](#module_farm--Farm..Equipment)
                * _instance_
                    * [.tractor](#module_farm--Farm..Equipment.Equipment+tractor) : [`Tractor`](#module_farm--Farm..Tractor)
            * [~Tractor](#module_farm--Farm..Tractor)
                * _instance_
                    * [.engine](#module_farm--Farm..Tractor.Tractor+engine)
                        * _static_
                            * [.manufacturer](#module_farm--Farm..Tractor.Tractor+engine.manufacturer)
                            * [.size](#module_farm--Farm..Tractor.Tractor+engine.size)


<a name="exp_module_farm--Farm"></a>
### Farm ⏏
the farm

**Kind**: Exported class


<a name="new_module_farm--Farm_new"></a>
#### new Farm()
the constructor


### Category: instance


<a name="module_farm--Farm.Farm+equipment"></a>
##### farm.equipment : [`Equipment`](#module_farm--Farm..Equipment)
farm equipment

**Kind**: instance property of [`Farm`](#exp_module_farm--Farm)


### Category: inner


<a name="module_farm--Farm..Equipment"></a>
##### Farm~Equipment
Equipment class

**Kind**: inner class of [`Farm`](#exp_module_farm--Farm)  

* [~Equipment](#module_farm--Farm..Equipment)
    * _instance_
        * [.tractor](#module_farm--Farm..Equipment.Equipment+tractor) : [`Tractor`](#module_farm--Farm..Tractor)


##### Category: instance


<a name="module_farm--Farm..Equipment.Equipment+tractor"></a>
####### equipment.tractor : [`Tractor`](#module_farm--Farm..Tractor)
the tractor

**Kind**: instance property of [`Equipment`](#module_farm--Farm..Equipment)


<a name="module_farm--Farm..Tractor"></a>
##### Farm~Tractor
Tractor class

**Kind**: inner class of [`Farm`](#exp_module_farm--Farm)  

* [~Tractor](#module_farm--Farm..Tractor)
    * _instance_
        * [.engine](#module_farm--Farm..Tractor.Tractor+engine)
            * _static_
                * [.manufacturer](#module_farm--Farm..Tractor.Tractor+engine.manufacturer)
                * [.size](#module_farm--Farm..Tractor.Tractor+engine.size)


##### Category: instance


<a name="module_farm--Farm..Tractor.Tractor+engine"></a>
####### tractor.engine
engine details

**Kind**: instance property of [`Tractor`](#module_farm--Farm..Tractor)  

* [.engine](#module_farm--Farm..Tractor.Tractor+engine)
    * _static_
        * [.manufacturer](#module_farm--Farm..Tractor.Tractor+engine.manufacturer)
        * [.size](#module_farm--Farm..Tractor.Tractor+engine.size)


####### Category: static


<a name="module_farm--Farm..Tractor.Tractor+engine.manufacturer"></a>
######### engine.manufacturer
who built

**Kind**: static property of [`engine`](#module_farm--Farm..Tractor.Tractor+engine)


<a name="module_farm--Farm..Tractor.Tractor+engine.size"></a>
######### engine.size
the size

**Kind**: static property of [`engine`](#module_farm--Farm..Tractor.Tractor+engine)


