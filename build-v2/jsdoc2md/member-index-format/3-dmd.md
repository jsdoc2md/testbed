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
    - FurQ#wannaTryIt [member]
    - FurQ#LOVE [constant]
    - FurQ#spit [function]
    - FurQ#battle [function]
    - FurQ#punch [function]
    - FurQ#event:pop [event]
    - FurQ#event:slap [event]
    - FurQ#kill [function]
    - FurQ#respect [function]
    - FurQ.enemy [enum]
    - FurQ.peace [function]
    - FurQ~onRespect [typedef]
  - Rapper [class]
    - Rapper#spit [function]
    - Rapper#battle [function]
    - Rapper.train [function]
      - Rapper.train~School [class]
        - Rapper.train~School() [constructor]
        - Rapper.train~School#bestStudent [member]
  - NewLines [class]
    - NewLines#numbers [member]
    - NewLines#method [function]
  - Species [class]
    - Species#name [member]
    - Species#species [member]
    - Species.merge [function]
  - plant [function]


Animal [class]

-


* [FurQ](#FurQ) ⇐ Rapper
    * [new FurQ()](#new_FurQ_new)
    * [.wannaTryIt](#FurQ+wannaTryIt) : `string`
    * [.LOVE](#FurQ+LOVE) : `string`
    * [.spit()](#FurQ+spit)
    * [.battle()](#the anchor of the super class)
    * [.punch()](#FurQ+punch)
    * "pop"
    * "slap"
    * [.kill()](#FurQ+kill)
    * [.respect(done)](#FurQ+respect)
    * [.enemy](#FurQ.enemy) : `enum`
    * [.peace()](#FurQ.peace)
    * [~onRespect](#FurQ..onRespect)



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
    * [.numbers](#NewLines+numbers)
    * [.method(input)](#NewLines+method) ⇒ `number`



-


* [Species](#Species)
    * [.name](#Species+name) : `string`
    * [.species](#Species+species) : [`Species`](#Species)
    * [.merge(one, two)](#Species.merge) ⇒ [`Species`](#Species)



-

undefined

## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
