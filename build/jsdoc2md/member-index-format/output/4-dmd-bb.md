
## Classes
Global | Description
------ | -----------
Animal | Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description
FurQ ⇐ [Rapper](#markdown-header-rapper) | C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.
Rapper | 
NewLines | A multi-line
class description
Species | In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).

## Functions
Global | Description
------ | -----------
plant() | to plant ones fist in a buster's mush

## Animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

**Kind**: global class  
**Summary**: It's an animal, yeah?  

* [Animal](#markdown-header-animal)
    * [new Animal(species, parents)](#markdown-header-new-animalspecies-parents)
    * _instance_
        * [.age](#markdown-header-animalage-number) : number
        * [.species](#markdown-header-animalspecies-species) : Species
    * _static_
        * [.eMood](#markdown-header-animalemood)

### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | array | an array of two parent [Animal](#Animal) objects |
| parents | [Species](#markdown-header-species) | the species |

### animal.age : number
the current age

**Kind**: instance property of [Animal](#markdown-header-new-animalspecies-parents)  
**Default**: `0`  
### animal.species : Species
**Kind**: instance property of [Animal](#markdown-header-new-animalspecies-parents)  
### Animal.eMood
Animal moods

**Kind**: static enum property of [Animal](#markdown-header-new-animalspecies-parents)  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | `0` | chilling |
| angry | `1` | pissed off |
| hungry | `2` | need to eat |

## FurQ ⇐ [Rapper](#markdown-header-rapper)
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Kind**: global class  
**Extends:** [Rapper](#markdown-header-rapper)  
**Emits**: [pop](#markdown-header-popzoop), [slap](#markdown-header-slap)  
**Access:** public  
**See**: [https://www.youtube.com/watch?v=1sxZ4tsp8gc](https://www.youtube.com/watch?v=1sxZ4tsp8gc)
**Author:** Chris Morris  

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

### new FurQ()
She's an Uzi lover.

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

**Example**  
```js
var uziLover = require("FurQ")
```
### furQ.wannaTryIt : string
**Kind**: instance property of [FurQ](#markdown-header-new-furq)  
**Default**: `"bitch"`  
**See**

- "Uzi like a metal dick in my hand."
- "Magazine like a big testicle gland."

### furQ.LOVE : string
**Kind**: instance constant of [FurQ](#markdown-header-new-furq)  
**Default**: `"UZI"`  
### furQ.spit()
override

**Kind**: instance method of [FurQ](#markdown-header-new-furq)  
**Overrides:** spit  
### furQ.battle()
battle

**Kind**: instance method of [FurQ](#markdown-header-new-furq)  
### furQ.punch()
to plant ones fist in a buster's mush

**Kind**: instance method of [FurQ](#markdown-header-new-furq)  
### "pop" (zoop)
fire weapon

**Kind**: event emitted by [FurQ](#markdown-header-new-furq)  

| Param | Type | Description |
| --- | --- | --- |
| zoop | boolean | make 'zooping' sound as you fire |

### "slap"
slap man

**Kind**: event emitted by [FurQ](#markdown-header-new-furq)  
### furQ.kill()
kill

**Kind**: instance method of [FurQ](#markdown-header-new-furq)  
**Category**: standard  
**Example**  
```js
var kill = uziLover.kill()
  
```
**Example**  
```js
uziLover.kill()
```
### furQ.respect(done)
respect

**Kind**: instance method of [FurQ](#markdown-header-new-furq)  
**Category**: standard  

| Param | Type | Description |
| --- | --- | --- |
| done | onRespect | called on reciprocation of respect |

**Example**  
```js
uziLover.respect(function(err, gain){
    console.log(gain)
})
```
### FurQ.enemy : enum
FUR-Q enemy types

**Kind**: static enum property of [FurQ](#markdown-header-new-furq)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| COCK | number | `0` | an awful individual |
| BITCH | number | `1` |  |
| MUTHAFUCKA | number | `2` |  |

### ~~FurQ.peace()~~
***Deprecated***

check if at peace

**Kind**: static method of [FurQ](#markdown-header-new-furq)  
**Example**  
```js
var peace = FurQ.peace()
```
### FurQ~onRespect : function
Passed to [respect](#FurQ+respect)

**Kind**: inner typedef of [FurQ](#markdown-header-new-furq)  

| Param | Type | Description |
| --- | --- | --- |
| err | Error | an issue with the punch |
| gain | * | the respect percentage gained |

## Rapper
**Kind**: global class  

* [Rapper](#markdown-header-rapper)
    * _instance_
        * [.spit()](#markdown-header-rapperspit)
        * [.battle()](#markdown-header-rapperbattle)
    * _static_
        * [.train()](#markdown-header-rappertrain)
            * [~School](#markdown-header-trainschool)
                * [new School()](#markdown-header-new-school)
                * [.bestStudent](#markdown-header-schoolbeststudent)

### rapper.spit()
spit

**Kind**: instance method of [Rapper](#markdown-header-rapper)  
### rapper.battle()
battle

**Kind**: instance method of [Rapper](#markdown-header-rapper)  
### Rapper.train()
train new rappers

**Kind**: static method of [Rapper](#markdown-header-rapper)  

* [.train()](#markdown-header-rappertrain)
    * [~School](#markdown-header-trainschool)
        * [new School()](#markdown-header-new-school)
        * [.bestStudent](#markdown-header-schoolbeststudent)

#### train~School
**Kind**: inner class of train  

* [~School](#markdown-header-trainschool)
    * [new School()](#markdown-header-new-school)
    * [.bestStudent](#markdown-header-schoolbeststudent)

##### new School()
rap school

##### school.bestStudent
best student

**Kind**: instance property of [School](#markdown-header-new-school)  
## NewLines
A multi-line
class description

**Kind**: global class  

* [NewLines](#markdown-header-newlines)
    * [.numbers](#markdown-header-newlinesnumbers)
    * [.method(input)](#markdown-header-newlinesmethodinput-number) ⇒ number

### newLines.numbers
**Kind**: instance property of [NewLines](#markdown-header-newlines)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| one | number | a property   with newlines for    a change |

### newLines.method(input) ⇒ number
**Kind**: instance method of [NewLines](#markdown-header-newlines)  
**Returns**: number - the returns
  description also 
  has newlines  

| Param | Type | Description |
| --- | --- | --- |
| input | string | a param description    with an awkward newline   or two. |

## Species
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).

**Kind**: global class  

* [Species](#markdown-header-species)
    * _instance_
        * [.name](#markdown-header-speciesname-string) : string
        * [.species](#markdown-header-speciesspecies-species) : [Species](#markdown-header-speciesspecies)
    * _static_
        * [.merge(one, two)](#markdown-header-speciesmergeone-two-species) ⇒ Species

### species.name : string
the species name

**Kind**: instance property of [Species](#markdown-header-species)  
### species.species : [Species](#markdown-header-speciesspecies)
**Kind**: instance property of [Species](#markdown-header-species)  
### Species.merge(one, two) ⇒ Species
merge two species into a new one

**Kind**: static method of [Species](#markdown-header-species)  

| Param | Type | Description |
| --- | --- | --- |
| one | [Species](#markdown-header-species) | first |
| two | [Species](#markdown-header-species) | second |

## plant()
to plant ones fist in a buster's mush

**Kind**: global function  
