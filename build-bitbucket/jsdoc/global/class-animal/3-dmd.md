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
| parents | Species | the species |

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

