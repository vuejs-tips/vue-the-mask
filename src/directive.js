import maskit from './maskit'

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event (name) {
  var evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  return evt
}

export default function (el, binding) {
  var config = binding.value

  el.oninput = el.oninput || function (evt) {
    if (!evt.isTrusted) return // avoid infinite loop
    /*
    InputEvent (native)
      cancelable: false
      isTrusted: true

      composed: true
      isComposing: false
      which: 0

    Event (custom)
      cancelable: true
      isTrusted: false
    */
    // by default, keep cursor at same position as before the mask
    var position = el.selectionEnd
    // save the character just inserted
    var digit = el.value[position-1]
    el.value = maskit(el.value, config.mask, true, config.tokens)
    // if the digit changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position-1) !== digit) {
      position++
    }
    el.setSelectionRange(position, position)
    el.dispatchEvent(event('input'))
  }
  var newDisplay = maskit(el.value, config.mask, true, config.tokens)
  if (newDisplay !== el.value) {
    el.value = newDisplay
    el.dispatchEvent(event('input'))
  }
}
