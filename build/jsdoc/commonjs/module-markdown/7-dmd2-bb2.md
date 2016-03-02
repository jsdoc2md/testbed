<a name="module_animal"></a>
## animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

| yeah | desc |
| ---- | ---- |
| some | markdown |
| in the | module |
| description | |

  
**Example**
```js
var animal = require("animal")
```

* animal
    * [~Animal](#module_animal..Animal)
        * [new Animal(species, parents)](#new_module_animal..Animal_new)
        * [.age](#module_animal..Animal+age) : number
        * [.species](#module_animal..Animal+species) : Species
        * [.eMood](#module_animal..Animal.eMood) : `enum`


<a name="module_animal..Animal"></a>
### animal~Animal
**Kind**: inner class of [animal](#module_animal)  

* [~Animal](#module_animal..Animal)
    * [new Animal(species, parents)](#new_module_animal..Animal_new)
    * [.age](#module_animal..Animal+age) : number
    * [.species](#module_animal..Animal+species) : Species
    * [.eMood](#module_animal..Animal.eMood) : `enum`


<a name="new_module_animal..Animal_new"></a>
#### new Animal(species, parents)
  

| Param   | Type    | Description                                   |
| ------- | ------- | --------------------------------------------- |
| species | array   | an array of two parent {@link Animal} objects |
| parents | Species | the species                                   |


<a name="module_animal..Animal+age"></a>
#### animal.age : number
the current age

**Kind**: instance property of [Animal](#module_animal..Animal)


<a name="module_animal..Animal+species"></a>
#### animal.species : Species
**Kind**: instance property of [Animal](#module_animal..Animal)


<a name="module_animal..Animal.eMood"></a>
#### Animal.eMood : `enum`
Animal moods

**Kind**: static enum of [Animal](#module_animal..Animal)  

| Property  | Default | Description |
| --------- | ------- | ----------- |
| satisfied | `0`     | chilling    |
| angry     | `1`     | pissed off  |
| hungry    | `2`     | need to eat |


