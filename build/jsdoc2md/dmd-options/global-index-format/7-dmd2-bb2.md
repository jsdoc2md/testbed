## Animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

**Kind**: global class  

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * [.age](#Animal+age) : number
    * [.species](#Animal+species) : [Species](#Species)
    * [.eMood](#Animal.eMood) : `enum`


### new Animal(species, parents)
  

| Param   | Type                | Description                                   |
| ------- | ------------------- | --------------------------------------------- |
| species | array               | an array of two parent {@link Animal} objects |
| parents | [Species](#Species) | the species                                   |


### animal.age : number
the current age

**Kind**: instance property of [Animal](#Animal)


### animal.species : [Species](#Species)
**Kind**: instance property of [Animal](#Animal)


### Animal.eMood : `enum`
Animal moods

**Kind**: static enum of [Animal](#Animal)  

| Property  | Default | Description |
| --------- | ------- | ----------- |
| satisfied | `0`     | chilling    |
| angry     | `1`     | pissed off  |
| hungry    | `2`     | need to eat |


## FurQ ⇐ Rapper
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Kind**: global class  

* [FurQ](#FurQ) ⇐ Rapper
    * [new FurQ()](#new_FurQ_new)
    * [.kill()](#BITBUCKET-FurQ#kill)
    * [.respect(done)](#BITBUCKET-FurQ#respect)
    * [.LOVE](#FurQ+LOVE) : string
    * [.wannaTryIt](#FurQ+wannaTryIt) : string
    * [.spit()](#BITBUCKET-FurQ#spit)
    * "pop"
    * "slap"
    * [.peace()](#BITBUCKET-FurQ.peace)
    * [.enemy](#FurQ.enemy) : `enum`
    * [~onRespect](#FurQ..onRespect)
    * [.battle()](#BITBUCKET-FurQ#battle)
    * [.punch()](#BITBUCKET-FurQ#punch)


### new FurQ()
She's an Uzi lover.

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

  



**Example**
```js
var uziLover = require("FurQ")
```


### furQ.kill()
kill

**Kind**: instance method of [FurQ](#FurQ)  
**Example**
```js
var kill = uziLover.kill()
  
```
**Example**
```js
uziLover.kill()
```
**Category**: standard


### furQ.respect(done)
respect

**Kind**: instance method of [FurQ](#FurQ)  

| Param | Type                          | Description                        |
| ----- | ----------------------------- | ---------------------------------- |
| done  | [onRespect](#FurQ..onRespect) | called on reciprocation of respect |


**Example**
```js
uziLover.respect(function(err, gain){
    console.log(gain)
})
```
**Category**: standard


### furQ.LOVE : string
**Kind**: instance constant of [FurQ](#FurQ)


### furQ.wannaTryIt : string
**Kind**: instance property of [FurQ](#FurQ)


### furQ.spit()
override

**Kind**: instance method of [FurQ](#FurQ)


### "pop"
fire weapon

**Kind**: instance event of [FurQ](#FurQ)  

| Param | Type    | Description                      |
| ----- | ------- | -------------------------------- |
| zoop  | boolean | make 'zooping' sound as you fire |


### "slap"
slap man

**Kind**: instance event of [FurQ](#FurQ)


### FurQ.peace()
check if at peace

**Kind**: static method of [FurQ](#FurQ)  
**Example**
```js
var peace = FurQ.peace()
```


### FurQ.enemy : `enum`
FUR-Q enemy types

**Kind**: static enum of [FurQ](#FurQ)  

| Property   | Type   | Default | Description         |
| ---------- | ------ | ------- | ------------------- |
| COCK       | number | `0`     | an awful individual |
| BITCH      | number | `1`     |                     |
| MUTHAFUCKA | number | `2`     |                     |


### FurQ~onRespect
Passed to {@link FurQ#respect}

**Kind**: inner typedef of [FurQ](#FurQ)  

| Param | Type  | Description                   |
| ----- | ----- | ----------------------------- |
| err   | Error | an issue with the punch       |
| gain  | *     | the respect percentage gained |


### furQ.battle()
battle

**Kind**: instance method of [FurQ](#FurQ)


### furQ.punch()
to plant ones fist in a buster's mush

**Kind**: instance method of [FurQ](#FurQ)


## plant()
to plant ones fist in a buster's mush

**Kind**: global function


## Rapper
**Kind**: global class  

* [Rapper](#Rapper)
    * [.spit()](#BITBUCKET-Rapper#spit)
    * [.battle()](#BITBUCKET-Rapper#battle)
    * [.train()](#BITBUCKET-Rapper.train)
        * [~School](#Rapper.train..School)
            * [new School()](#new_Rapper.train..School_new)
            * [.bestStudent](#Rapper.train..School+bestStudent)


### rapper.spit()
spit

**Kind**: instance method of [Rapper](#Rapper)


### rapper.battle()
battle

**Kind**: instance method of [Rapper](#Rapper)


### Rapper.train()
train new rappers

**Kind**: static method of [Rapper](#Rapper)  

* [.train()](#BITBUCKET-Rapper.train)
    * [~School](#Rapper.train..School)
        * [new School()](#new_Rapper.train..School_new)
        * [.bestStudent](#Rapper.train..School+bestStudent)


#### train~School
**Kind**: inner class of [train](#BITBUCKET-Rapper.train)  

* [~School](#Rapper.train..School)
    * [new School()](#new_Rapper.train..School_new)
    * [.bestStudent](#Rapper.train..School+bestStudent)


##### new School()
rap school


##### school.bestStudent
best student

**Kind**: instance property of [School](#Rapper.train..School)


## NewLines
A multi-line
class description

**Kind**: global class  

* [NewLines](#NewLines)
    * [.method(input)](#BITBUCKET-NewLines#method) ⇒ number
    * [.numbers](#NewLines+numbers)


### newLines.method(input) ⇒ number
**Kind**: instance method of [NewLines](#NewLines)  

| Param | Type   | Description                                              |
| ----- | ------ | -------------------------------------------------------- |
| input | string | a param description                                      |
|       |        |   with an awkward newline                                |
|       |        |   or two.                                                |


### newLines.numbers
**Kind**: instance property of [NewLines](#NewLines)  

| Property | Type   | Default     | Description                                |
| -------- | ------ | ----------- | ------------------------------------------ |
| one      | number | `undefined` | a property                                 |
|          |        |             |   with newlines for                        |
|          |        |             |   a change                                 |


## Species
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).

**Kind**: global class  

* [Species](#Species)
    * [.name](#Species+name) : string
    * [.species](#Species+species) : [Species](#Species)
    * [.merge(one, two)](#BITBUCKET-Species.merge) ⇒ [Species](#Species)


### species.name : string
the species name

**Kind**: instance property of [Species](#Species)


### species.species : [Species](#Species)
**Kind**: instance property of [Species](#Species)


### Species.merge(one, two) ⇒ [Species](#Species)
merge two species into a new one

**Kind**: static method of [Species](#Species)  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| one   | [Species](#Species) | first       |
| two   | [Species](#Species) | second      |


