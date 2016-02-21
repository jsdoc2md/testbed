## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

- root
  - Animal
    - Animal()
    - Animal#age
    - Animal#species
    - Animal.eMood
  - FurQ
    - FurQ()
    - FurQ#wannaTryIt
    - FurQ#LOVE
    - FurQ#spit
    - FurQ#battle
    - FurQ#punch
    - FurQ#event:pop
    - FurQ#event:slap
    - FurQ#kill
    - FurQ#respect
    - FurQ.enemy
    - FurQ.peace
    - FurQ~onRespect
  - Rapper
    - Rapper#spit
    - Rapper#battle
    - Rapper.train
      - Rapper.train~School
        - Rapper.train~School()
        - Rapper.train~School#bestStudent
  - NewLines
    - NewLines#numbers
    - NewLines#method
  - Species
    - Species#name
    - Species#species
    - Species.merge
  - plant


Animal

-


* [FurQ](#FurQ) ⇐ Rapper
    * [new FurQ()](#new_FurQ_new)
    * [.wannaTryIt](#FurQ+wannaTryIt) : `string`
    * [.LOVE](#FurQ+LOVE) : 
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