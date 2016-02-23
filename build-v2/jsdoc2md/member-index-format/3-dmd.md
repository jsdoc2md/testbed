## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

- root
  - Animal
    - Animal()
    - instance
      - Animal#age
      - Animal#species
    - static
      - Animal.eMood
  - FurQ
    - FurQ()
    - instance
      - FurQ#wannaTryIt
      - FurQ#LOVE
      - FurQ#spit
      - FurQ#battle
      - FurQ#punch
      - FurQ#event:pop
      - FurQ#event:slap
      - FurQ#kill
      - FurQ#respect
    - static
      - FurQ.enemy
      - FurQ.peace
    - inner
      - FurQ~onRespect
  - Rapper
    - instance
      - Rapper#spit
      - Rapper#battle
    - static
      - Rapper.train
        - Rapper.train~School
          - Rapper.train~School()
          - Rapper.train~School#bestStudent
  - NewLines
    - NewLines#numbers
    - NewLines#method
  - Species
    - instance
      - Species#name
      - Species#species
    - static
      - Species.merge
  - plant


Animal

-


* [FurQ](#FurQ) ⇐ Rapper
    * [new FurQ()](#new_FurQ_new)
    * _instance_
        * [.wannaTryIt](#FurQ+wannaTryIt) : `string`
        * [.LOVE](#FurQ+LOVE) : 
        * [.spit()](#FurQ+spit)
        * [.battle()](#the anchor of the super class)
        * [.punch()](#FurQ+punch)
        * "pop"
        * "slap"
        * [.kill()](#FurQ+kill)
        * [.respect(done)](#FurQ+respect)
    * _static_
        * [.enemy](#FurQ.enemy) : `enum`
        * [.peace()](#FurQ.peace)
    * _inner_
        * [~onRespect](#FurQ..onRespect)



-


* [Rapper](#Rapper)
    * _instance_
        * [.spit()](#Rapper+spit)
        * [.battle()](#Rapper+battle)
    * _static_
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
    * _instance_
        * [.name](#Species+name) : `string`
        * [.species](#Species+species) : [`Species`](#Species)
    * _static_
        * [.merge(one, two)](#Species.merge) ⇒ [`Species`](#Species)



-

undefined

## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
