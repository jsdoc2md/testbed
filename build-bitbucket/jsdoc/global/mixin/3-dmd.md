## Eventful
This provides methods used for event handling. It's not meant to
be used directly.

**Kind**: global mixin  

* [Eventful](#markdown-header-eventful)
    * [.on(eventName, handler)](#markdown-header-eventfuloneventname-handler)
    * [.fire(eventName, eventData)](#markdown-header-eventfulfireeventname-eventdata)

### Eventful.on(eventName, handler)
Register a handler function to be called whenever this event is fired.

**Kind**: static method of [Eventful](#markdown-header-eventful)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | string | Name of the event. |
| handler | function | The handler to call. |

### Eventful.fire(eventName, eventData)
Fire an event, causing all handlers for that event name to run.

**Kind**: static method of [Eventful](#markdown-header-eventful)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | string | Name of the event. |
| eventData | Object | The data provided to each handler. |

## phantom
phantom mixin

**Kind**: global mixin  
