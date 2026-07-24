export default function createRaceControlEventManager() {
  const eventRegistry = new Map();

  function validateEvent(event) {
    if (typeof event !== "string" || event.trim() === "") {
      throw new TypeError("Event should be a non-empty string.");
    }
  }

  function validateHandler(handler) {
    if (typeof handler !== "function") {
      throw new TypeError("Handler must always be a function.");
    }
  }

  function validatePayload(payload) {
    if ( payload !== undefined && (payload === null || typeof payload !== "object")) {
      throw new TypeError("Payload should be a non-empty object.");
    }
  }

  function subscribe(event, handler) {
    validateEvent(event);
    validateHandler(handler);

    let eventHandlers = eventRegistry.get(event);

    if (!eventHandlers) {
      eventHandlers = new Set();
      eventRegistry.set(event, eventHandlers);
    }

    eventHandlers.add(handler);

    return function cleanupSub() {
      return unsubscribe(event, handler);
    };
  }

  function unsubscribe(event, handler) {
    validateEvent(event);
    validateHandler(handler);

    let eventHandlers = eventRegistry.get(event);

    if (!eventHandlers) {
      return false;
    }

    const handlerRemoved = eventHandlers.delete(handler);

    if (eventHandlers.size === 0) {
      eventRegistry.delete(event);
    }

    return handlerRemoved;
  }

  function emit(event, payload) {
    validateEvent(event);
    validatePayload(payload);

    let eventHandlers = eventRegistry.get(event)

    if (!eventHandlers){
        return
    }

    for (const handler of eventHandlers){
        handler(payload)
    }

  }

  function once(event, handler){

    function oneTime(payload){

        unsubscribe(event, oneTime)
        handler(payload)

    }

    return subscribe(event, oneTime)

  }

  return {
    subscribe,
    unsubscribe,
    emit,
    once,
  };
}
