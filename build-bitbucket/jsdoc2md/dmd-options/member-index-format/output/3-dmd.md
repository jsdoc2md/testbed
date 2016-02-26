## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * [animal.age](#Animal+age) : number
    * [animal.species](#Animal+species) : Species
    * [Animal.eMood](#Animal.eMood)

-

* [FurQ](#FurQ) ⇐ [Rapper](#markdown-header-rapper)
    * [new FurQ()](#new_FurQ_new)
    * [furQ.wannaTryIt](#FurQ+wannaTryIt) : string
    * [furQ.LOVE](#FurQ+LOVE) : string
    * [furQ.spit()](#FurQ+spit)
    * [furQ.battle()](#Rapper+battle)
    * [furQ.punch()](#FurQ+punch)
    * ["pop" (zoop)](#FurQ+event_pop)
    * ["slap"](#FurQ+event_slap)
    * [furQ.kill()](#FurQ+kill)
    * [furQ.respect(done)](#FurQ+respect)
    * [FurQ.enemy](#FurQ.enemy) : enum
    * ~~[FurQ.peace()](#FurQ.peace)~~
    * [FurQ~onRespect](#FurQ..onRespect) : function

-

* [Rapper](#Rapper)
    * [rapper.spit()](#Rapper+spit)
    * [rapper.battle()](#Rapper+battle)
    * [Rapper.train()](#Rapper.train)
        * [~School](#Rapper.train..School)
            * [new School()](#new_Rapper.train..School_new)
            * [school.bestStudent](#Rapper.train..School+bestStudent)

-

* [NewLines](#NewLines)
    * [newLines.numbers](#NewLines+numbers)
    * [newLines.method(input)](#NewLines+method) ⇒ number

-

* [Species](#Species)
    * [species.name](#Species+name) : string
    * [species.species](#Species+species) : [Species](#markdown-header-speciesspecies)
    * [Species.merge(one, two)](#Species.merge) ⇒ Species

-

* [plant()](#plant)

-


## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

* [Animal](#markdown-header-animal)
    * [new Animal(species, parents)](#markdown-header-new-animalspecies-parents)
    * _instance_
        * [.age](#markdown-header-animalage-number) : number
        * [.species](#markdown-header-animalspecies-species) : Species
    * _static_
        * [.eMood](#markdown-header-animalemood)

-

* [FurQ](#markdown-header-furq-rapper) ⇐ [Rapper](#markdown-header-rapper)
    * [new FurQ()](#markdown-header-new-furq)
    * _instance_
        * [.wannaTryIt](#markdown-header-furqwannatryit-string) : string
        * [.LOVE](#markdown-header-furqlove-string) : string
        * [.spit()](#markdown-header-furqspit)
        * [.battle()](#markdown-header-furqbattle)
        * [.punch()](#markdown-header-furqpunch)
        * ["pop" (zoop)](#markdown-header-popzoop)
        * ["slap"](#markdown-header-slap)
        * _standard_
            * [.kill()](#markdown-header-furqkill)
            * [.respect(done)](#markdown-header-furqrespectdone)
    * _static_
        * [.enemy](#markdown-header-furqenemy-enum) : enum
        * ~~[.peace()](#markdown-header-furqpeace)~~
    * _inner_
        * [~onRespect](#markdown-header-furqonrespect-function) : function

-

* [Rapper](#markdown-header-rapper)
    * _instance_
        * [.spit()](#markdown-header-rapperspit)
        * [.battle()](#markdown-header-rapperbattle)
    * _static_
        * [.train()](#markdown-header-rappertrain)
            * [~School](#markdown-header-trainschool)
                * [new School()](#markdown-header-new-school)
                * [.bestStudent](#markdown-header-schoolbeststudent)

-

* [NewLines](#markdown-header-newlines)
    * [.numbers](#markdown-header-newlinesnumbers)
    * [.method(input)](#markdown-header-newlinesmethodinput-number) ⇒ number

-

* [Species](#markdown-header-species)
    * _instance_
        * [.name](#markdown-header-speciesname-string) : string
        * [.species](#markdown-header-speciesspecies-species) : [Species](#markdown-header-speciesspecies)
    * _static_
        * [.merge(one, two)](#markdown-header-speciesmergeone-two-species) ⇒ Species

-

* [plant()](#markdown-header-plant)

-

