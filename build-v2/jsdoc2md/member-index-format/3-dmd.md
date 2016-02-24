## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/).

- root [root]
  - class [group]
    - Animal [class]
      - constructor [group]
        - Animal() [constructor]
      - member [group]
        - Animal#age [member]
        - Animal#species [member]
      - enum [group]
        - Animal.eMood [enum]
    - FurQ [class]
      - constructor [group]
        - FurQ() [constructor]
      - member [group]
        - FurQ#wannaTryIt [member]
      - constant [group]
        - FurQ#LOVE [constant]
      - function [group]
        - FurQ#spit [function]
        - FurQ#battle [function]
        - FurQ#punch [function]
        - FurQ#kill [function]
        - FurQ#respect [function]
        - FurQ.peace [function]
      - event [group]
        - FurQ#event:pop [event]
        - FurQ#event:slap [event]
      - enum [group]
        - FurQ.enemy [enum]
      - typedef [group]
        - FurQ~onRespect [typedef]
    - Rapper [class]
      - Rapper#spit [function]
      - Rapper#battle [function]
      - Rapper.train [function]
        - Rapper.train~School [class]
          - constructor [group]
            - Rapper.train~School() [constructor]
          - member [group]
            - Rapper.train~School#bestStudent [member]
    - NewLines [class]
      - member [group]
        - NewLines#numbers [member]
      - function [group]
        - NewLines#method [function]
    - Species [class]
      - member [group]
        - Species#name [member]
        - Species#species [member]
      - function [group]
        - Species.merge [function]
  - function [group]
    - plant [function]


class [group]

-

undefined

## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used.

{{#orphans}}
{{>member-index-grouped}}

-

{{/orphans}}
