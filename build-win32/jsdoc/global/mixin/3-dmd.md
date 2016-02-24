<a name="Eventful"></a>
## Eventful
This provides methods used for event handling. It's not meant to
be used directly.

**Kind**: global mixin  

* [Eventful](#Eventful)
    * [.on(eventName, handler)](#Eventful.on)
    * [.fire(eventName, eventData)](#Eventful.fire)

<a name="Eventful.on"></a>
### Eventful.on(eventName, handler)
Register a handler function to be called whenever this event is fired.

**Kind**: static method of <code>[Eventful](#Eventful)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| handler | <code>function</code> | The handler to call. |

<a name="Eventful.fire"></a>
### Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

**Kind**: static method of <code>[Eventful](#Eventful)</code>  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Name of the event. |
| eventData | <code>Object</code> | The data provided to each handler. |

<a name="phantom"></a>
## phantom
phantom mixin

**Kind**: global mixin  
