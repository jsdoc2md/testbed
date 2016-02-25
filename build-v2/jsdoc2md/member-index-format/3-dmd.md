## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

- root [root]
  - Animal [class]
    - Animal() [constructor]
    - Animal#age [member]
    - Animal#species [member]
    - Animal.eMood [enum]
  - FurQ [class]
    - FurQ() [constructor]
    - FurQ#kill [function]
    - FurQ#respect [function]
    - FurQ#LOVE [constant]
    - FurQ#wannaTryIt [member]
    - FurQ#spit [function]
    - FurQ#event:pop [event]
    - FurQ#event:slap [event]
    - FurQ.peace [function]
    - FurQ.enemy [enum]
    - FurQ~onRespect [typedef]
    - FurQ#battle [function]
    - FurQ#punch [function]
  - plant [function]
  - Rapper [class]
    - Rapper#spit [function]
    - Rapper#battle [function]
    - Rapper.train [function]
      - Rapper.train~School [class]
        - Rapper.train~School() [constructor]
        - Rapper.train~School#bestStudent [member]
  - NewLines [class]
    - NewLines#method [function]
    - NewLines#numbers [member]
  - Species [class]
    - Species#name [member]
    - Species#species [member]
    - Species.merge [function]


Animal [class]

-


* [FurQ](#FurQ) ⇐ Rapper
    * [new FurQ()](#new_FurQ_new)
    * [.kill()](#FurQ+kill)
    * [.respect(done)](#FurQ+respect)
    * [.LOVE](#FurQ+LOVE) : `string`
    * [.wannaTryIt](#FurQ+wannaTryIt) : `string`
    * [.spit()](#FurQ+spit)
    * "pop"
    * "slap"
    * [.peace()](#FurQ.peace)
    * [.enemy](#FurQ.enemy) : `enum`
    * [~onRespect](#FurQ..onRespect)
    * [.battle()](#the anchor of the super class)
    * [.punch()](#FurQ+punch)



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


* [NewLines](#NewLines)
    * [.method(input)](#NewLines+method) ⇒ `number`
    * [.numbers](#NewLines+numbers)



-


* [Species](#Species)
    * [.name](#Species+name) : `string`
    * [.species](#Species+species) : [`Species`](#Species)
    * [.merge(one, two)](#Species.merge) ⇒ [`Species`](#Species)



## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
