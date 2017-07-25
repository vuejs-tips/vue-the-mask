import maskit from './maskit'
import tokens from './tokens'

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event (name) {
  var evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  return evt
}

export default function (el, binding) {
  el.oninput = el.oninput || function () {
    var oldValue = el.value
    // by default, keep cursor at same position as before the mask
    var position = el.selectionEnd
    // save the character just inserted
    var digit = oldValue[position-1]
    el.value = maskit(el.value, mask, true, tokens)
    // if the digit changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position-1) !== digit) {
      position++
    }
    el.setSelectionRange(position, position)
    if (el.value !== oldValue) {
      el.dispatchEvent(event('input'))
    }
  }

  var mask = binding.value
  var before = el.value
  var after = maskit(el.value, mask, true, tokens)
  if (before !== after) {
    el.dispatchEvent(event('input'))
  }
}
