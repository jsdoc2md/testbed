<a name="Animal"></a>
## Animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

**Kind**: global class  

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * [.age](#Animal+age) : `number`
    * [.species](#Animal+species) : [`Species`](#Species)
    * [.eMood](#Animal.eMood) : `enum`


<a name="new_Animal_new"></a>
### new Animal(species, parents)
  

| Param   | Type                  | Description                                   |
| ------- | --------------------- | --------------------------------------------- |
| species | `array`               | an array of two parent {@link Animal} objects |
| parents | [`Species`](#Species) | the species                                   |


<a name="Animal+age"></a>
### animal.age : `number`
the current age

**Kind**: instance property of [`Animal`](#Animal)


<a name="Animal+species"></a>
### animal.species : [`Species`](#Species)
**Kind**: instance property of [`Animal`](#Animal)


<a name="Animal.eMood"></a>
### Animal.eMood : `enum`
Animal moods

**Kind**: static enum of [`Animal`](#Animal)  

| Property  | Default | Description |
| --------- | ------- | ----------- |
| satisfied | `0`     | chilling    |
| angry     | `1`     | pissed off  |
| hungry    | `2`     | need to eat |


<a name="FurQ"></a>
## FurQ ⇐ Rapper
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Kind**: global class  

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


<a name="new_FurQ_new"></a>
### new FurQ()
She's an Uzi lover.

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

  



**Example**
```js
var uziLover = require("FurQ")
```


<a name="FurQ+kill"></a>
### furQ.kill()
kill

**Kind**: instance method of [`FurQ`](#FurQ)  
**Example**
```js
var kill = uziLover.kill()
  
```
**Example**
```js
uziLover.kill()
```
**Category**: standard


<a name="FurQ+respect"></a>
### furQ.respect(done)
respect

**Kind**: instance method of [`FurQ`](#FurQ)  

| Param | Type                            | Description                        |
| ----- | ------------------------------- | ---------------------------------- |
| done  | [`onRespect`](#FurQ..onRespect) | called on reciprocation of respect |


**Example**
```js
uziLover.respect(function(err, gain){
    console.log(gain)
})
```
**Category**: standard


<a name="FurQ+LOVE"></a>
### furQ.LOVE : `string`
**Kind**: instance constant of [`FurQ`](#FurQ)


<a name="FurQ+wannaTryIt"></a>
### furQ.wannaTryIt : `string`
**Kind**: instance property of [`FurQ`](#FurQ)


<a name="FurQ+spit"></a>
### furQ.spit()
override

**Kind**: instance method of [`FurQ`](#FurQ)


<a name="FurQ+event_pop"></a>
### "pop"
fire weapon

**Kind**: instance event of [`FurQ`](#FurQ)  

| Param | Type      | Description                      |
| ----- | --------- | -------------------------------- |
| zoop  | `boolean` | make 'zooping' sound as you fire |


<a name="FurQ+event_slap"></a>
### "slap"
slap man

**Kind**: instance event of [`FurQ`](#FurQ)


<a name="FurQ.peace"></a>
### FurQ.peace()
check if at peace

**Kind**: static method of [`FurQ`](#FurQ)  
**Example**
```js
var peace = FurQ.peace()
```


<a name="FurQ.enemy"></a>
### FurQ.enemy : `enum`
FUR-Q enemy types

**Kind**: static enum of [`FurQ`](#FurQ)  

| Property   | Type     | Default | Description         |
| ---------- | -------- | ------- | ------------------- |
| COCK       | `number` | `0`     | an awful individual |
| BITCH      | `number` | `1`     |                     |
| MUTHAFUCKA | `number` | `2`     |                     |


<a name="FurQ..onRespect"></a>
### FurQ~onRespect
Passed to {@link FurQ#respect}

**Kind**: inner typedef of [`FurQ`](#FurQ)  

| Param | Type    | Description                   |
| ----- | ------- | ----------------------------- |
| err   | `Error` | an issue with the punch       |
| gain  | `*`     | the respect percentage gained |


<a name="the anchor of the super class"></a>
### furQ.battle()
battle

**Kind**: instance method of [`FurQ`](#FurQ)


<a name="FurQ+punch"></a>
### furQ.punch()
to plant ones fist in a buster's mush

**Kind**: instance method of [`FurQ`](#FurQ)


<a name="plant"></a>
## plant()
to plant ones fist in a buster's mush

**Kind**: global function


<a name="Rapper"></a>
## Rapper
**Kind**: global class  

* [Rapper](#Rapper)
    * [.spit()](#Rapper+spit)
    * [.battle()](#Rapper+battle)
    * [.train()](#Rapper.train)
        * [~School](#Rapper.train..School)
            * [new School()](#new_Rapper.train..School_new)
            * [.bestStudent](#Rapper.train..School+bestStudent)


<a name="Rapper+spit"></a>
### rapper.spit()
spit

**Kind**: instance method of [`Rapper`](#Rapper)


<a name="Rapper+battle"></a>
### rapper.battle()
battle

**Kind**: instance method of [`Rapper`](#Rapper)


<a name="Rapper.train"></a>
### Rapper.train()
train new rappers

**Kind**: static method of [`Rapper`](#Rapper)  

* [.train()](#Rapper.train)
    * [~School](#Rapper.train..School)
        * [new School()](#new_Rapper.train..School_new)
        * [.bestStudent](#Rapper.train..School+bestStudent)


<a name="Rapper.train..School"></a>
#### train~School
**Kind**: inner class of [`train`](#Rapper.train)  

* [~School](#Rapper.train..School)
    * [new School()](#new_Rapper.train..School_new)
    * [.bestStudent](#Rapper.train..School+bestStudent)


<a name="new_Rapper.train..School_new"></a>
##### new School()
rap school


<a name="Rapper.train..School+bestStudent"></a>
##### school.bestStudent
best student

**Kind**: instance property of [`School`](#Rapper.train..School)


<a name="NewLines"></a>
## NewLines
A multi-line
class description

**Kind**: global class  

* [NewLines](#NewLines)
    * [.method(input)](#NewLines+method) ⇒ `number`
    * [.numbers](#NewLines+numbers)


<a name="NewLines+method"></a>
### newLines.method(input) ⇒ `number`
**Kind**: instance method of [`NewLines`](#NewLines)  

| Param | Type     | Description                                              |
| ----- | -------- | -------------------------------------------------------- |
| input | `string` | a param description                                      |
|       |          |   with an awkward newline                                |
|       |          |   or two.                                                |


<a name="NewLines+numbers"></a>
### newLines.numbers
**Kind**: instance property of [`NewLines`](#NewLines)  

| Property | Type     | Default     | Description                                |
| -------- | -------- | ----------- | ------------------------------------------ |
| one      | `number` | `undefined` | a property                                 |
|          |          |             |   with newlines for                        |
|          |          |             |   a change                                 |


<a name="Species"></a>
## Species
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).

**Kind**: global class  

* [Species](#Species)
    * [.name](#Species+name) : `string`
    * [.species](#Species+species) : [`Species`](#Species)
    * [.merge(one, two)](#Species.merge) ⇒ [`Species`](#Species)


<a name="Species+name"></a>
### species.name : `string`
the species name

**Kind**: instance property of [`Species`](#Species)


<a name="Species+species"></a>
### species.species : [`Species`](#Species)
**Kind**: instance property of [`Species`](#Species)


<a name="Species.merge"></a>
### Species.merge(one, two) ⇒ [`Species`](#Species)
merge two species into a new one

**Kind**: static method of [`Species`](#Species)  

| Param | Type                  | Description |
| ----- | --------------------- | ----------- |
| one   | [`Species`](#Species) | first       |
| two   | [`Species`](#Species) | second      |


