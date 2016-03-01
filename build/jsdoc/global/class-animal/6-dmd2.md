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
    * [.species](#Animal+species) : `Species`
    * [.eMood](#Animal.eMood) : `enum`


<a name="new_Animal_new"></a>
### new Animal(species, parents)
  

| Param   | Type      | Description                                   |
| ------- | --------- | --------------------------------------------- |
| species | `array`   | an array of two parent {@link Animal} objects |
| parents | `Species` | the species                                   |


<a name="Animal+age"></a>
### animal.age : `number`
the current age

**Kind**: instance property of [`Animal`](#Animal)


<a name="Animal+species"></a>
### animal.species : `Species`
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


