## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

- root
  - global
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
          - inner
            - Rapper.train~School
              - Rapper.train~School()
              - instance
                - Rapper.train~School#bestStudent
    - NewLines
      - instance
        - NewLines#numbers
        - NewLines#method
    - Species
      - instance
        - Species#name
        - Species#species
      - static
        - Species.merge
    - plant


global

## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
