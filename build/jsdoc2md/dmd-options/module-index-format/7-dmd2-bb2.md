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


### animal~Animal
**Kind**: inner class of [animal](#module_animal)  

* [~Animal](#module_animal..Animal)
    * [new Animal(species, parents)](#new_module_animal..Animal_new)
    * [.age](#module_animal..Animal+age) : number
    * [.species](#module_animal..Animal+species) : Species
    * [.eMood](#module_animal..Animal.eMood) : `enum`


#### new Animal(species, parents)
  

| Param   | Type    | Description                                   |
| ------- | ------- | --------------------------------------------- |
| species | array   | an array of two parent {@link Animal} objects |
| parents | Species | the species                                   |


#### animal.age : number
the current age

**Kind**: instance property of [Animal](#module_animal..Animal)


#### animal.species : Species
**Kind**: instance property of [Animal](#module_animal..Animal)


#### Animal.eMood : `enum`
Animal moods

**Kind**: static enum of [Animal](#module_animal..Animal)  

| Property  | Default | Description |
| --------- | ------- | ----------- |
| satisfied | `0`     | chilling    |
| angry     | `1`     | pissed off  |
| hungry    | `2`     | need to eat |


## builder
Aside from humans, who are the most prolific and versatile builders, building behaviour is common in many mammals, birds, insects and arachnids. It is also seen in a few species of fish, reptiles, amphibians, molluscs, urochordates, crustaceans, annelids and some other arthropods. It is virtually absent from all the other animal phyla.

  

* builder
    * [~builder](#module_builder..builder)
        * [.construct()](#BITBUCKET-module:builder~builder.construct)
        * [.repair()](#BITBUCKET-module:builder~builder.repair)


### builder~builder
**Kind**: inner mixin of [builder](#module_builder)  

* [~builder](#module_builder..builder)
    * [.construct()](#BITBUCKET-module:builder~builder.construct)
    * [.repair()](#BITBUCKET-module:builder~builder.repair)


#### builder.construct()
construct something

**Kind**: static method of [builder](#module_builder..builder)


#### builder.repair()
repair something

**Kind**: static method of [builder](#module_builder..builder)


## species
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).

  

* species
    * [~Species](#module_species..Species)
        * [.name](#module_species..Species+name) : string
        * [.species](#module_species..Species+species) : Species
        * [.merge(one, two)](#BITBUCKET-module:species~Species.merge) ⇒ Species


### species~Species
**Kind**: inner class of [species](#module_species)  

* [~Species](#module_species..Species)
    * [.name](#module_species..Species+name) : string
    * [.species](#module_species..Species+species) : Species
    * [.merge(one, two)](#BITBUCKET-module:species~Species.merge) ⇒ Species


#### species.name : string
the species name

**Kind**: instance property of [Species](#module_species..Species)


#### species.species : Species
**Kind**: instance property of [Species](#module_species..Species)


#### Species.merge(one, two) ⇒ Species
merge two species into a new one

**Kind**: static method of [Species](#module_species..Species)  

| Param | Type    | Description |
| ----- | ------- | ----------- |
| one   | Species | first       |
| two   | Species | second      |


