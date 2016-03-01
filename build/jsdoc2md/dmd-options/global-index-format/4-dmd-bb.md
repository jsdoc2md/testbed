## `jsdoc2md --global-index-format dl`
## Classes

<dl>
<dt><a href="#Animal">Animal</a></dt>
<dd><p>Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).</p>
<ul>
<li>some markdown</li>
<li>in the module</li>
<li>description</li>
</ul>
</dd>
<dt><a href="#FurQ">FurQ</a> ⇐ [Rapper](#markdown-header-rapper)</dt>
<dd><p>C*ck, b!tch, c*ck, b!tch, m*therf!cker. You gotta kill people, to respect people.</p>
</dd>
<dt><a href="#Rapper">Rapper</a></dt>
<dd></dd>
<dt><a href="#NewLines">NewLines</a></dt>
<dd><p>A multi-line
class description</p>
</dd>
<dt><a href="#Species">Species</a></dt>
<dd><p>In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into &quot;infraspecific taxa&quot; such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).</p>
</dd>
</dl>


## `jsdoc2md --global-index-format grouped`
## Classes

* [Animal](#markdown-header-animal)
    * [new Animal(species, parents)](#markdown-header-new-animalspecies-parents)
    * _instance_
        * [.age](#markdown-header-animalage-number) : number
        * [.species](#markdown-header-animalspecies-species) : Species
    * _static_
        * [.eMood](#markdown-header-animalemood)
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
* [Rapper](#markdown-header-rapper)
    * _instance_
        * [.spit()](#markdown-header-rapperspit)
        * [.battle()](#markdown-header-rapperbattle)
    * _static_
        * [.train()](#markdown-header-rappertrain)
            * [~School](#markdown-header-trainschool)
                * [new School()](#markdown-header-new-school)
                * [.bestStudent](#markdown-header-schoolbeststudent)
* [NewLines](#markdown-header-newlines)
    * [.numbers](#markdown-header-newlinesnumbers)
    * [.method(input)](#markdown-header-newlinesmethodinput-number) ⇒ number
* [Species](#markdown-header-species)
    * _instance_
        * [.name](#markdown-header-speciesname-string) : string
        * [.species](#markdown-header-speciesspecies-species) : Species
    * _static_
        * [.merge(one, two)](#markdown-header-speciesmergeone-two-species) ⇒ Species


## `jsdoc2md --global-index-format table`
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


## `jsdoc2md --global-index-format none`
