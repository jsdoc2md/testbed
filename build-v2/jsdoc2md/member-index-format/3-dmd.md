## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

root

-


* [Animal](#Animal)  
    * [new Animal(species, parents)](#new_Animal_new)  
    * [.age](#Animal+age) : `number`  
    * [.species](#Animal+species) : [`Species`](#Species)  
    * [.eMood](#Animal.eMood) : `enum`  



-

undefined

-

undefined

-

undefined

-

undefined

-


* [FurQ](#FurQ) ⇐ Rapper  
    * [new FurQ()](#new_FurQ_new)  
    * [.wannaTryIt](#FurQ+wannaTryIt) : `string`  
    * [.LOVE](#FurQ+LOVE) :   
    * [.spit()](#FurQ+spit)  
    * [.battle()](#the anchor of the super class)  
    * [.punch()](#FurQ+punch)  
    * [.pop](#FurQ+event_pop)  
    * [.slap](#FurQ+event_slap)  
    * [.kill()](#FurQ+kill)  
    * [.respect(done)](#FurQ+respect)  
    * [.enemy](#FurQ.enemy) : `enum`  
    * [.peace()](#FurQ.peace)  
    * [~onRespect](#FurQ..onRespect)  



-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-

undefined

-


* [Rapper](#Rapper)  
    * [.spit()](#Rapper+spit)  
    * [.battle()](#Rapper+battle)  
    * [.train()](#Rapper.train)  
        * [~School](#Rapper.train..School)  
            * [new School()](#new_Rapper.train..School_new)  
            * [.bestStudent](#Rapper.train..School+bestStudent)  



-

undefined

-

undefined

-


* [.train()](#Rapper.train)  
    * [~School](#Rapper.train..School)  
        * [new School()](#new_Rapper.train..School_new)  
        * [.bestStudent](#Rapper.train..School+bestStudent)  



-


* [~School](#Rapper.train..School)  
    * [new School()](#new_Rapper.train..School_new)  
    * [.bestStudent](#Rapper.train..School+bestStudent)  



-

undefined

-

undefined

-


* [NewLines](#NewLines)  
    * [.numbers](#NewLines+numbers)  
    * [.method(input)](#NewLines+method) ⇒ `number`  



-

undefined

-

undefined

-


* [Species](#Species)  
    * [.name](#Species+name) : `string`  
    * [.species](#Species+species) : [`Species`](#Species)  
    * [.merge(one, two)](#Species.merge) ⇒ [`Species`](#Species)  



-

undefined

-

undefined

-

undefined

-

undefined

## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
