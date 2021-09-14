import isNextMask from "./is-next-mask";

export default function dynamicMask (maskit, masks, tokens) {
  masks = masks.sort((a, b) => a.length - b.length)
  return function (value, mask, masked = true) {
    var i = 0
    while (i < masks.length) {
      var currentMask = masks[i]
      i++
      var nextMask = masks[i]
      if (! (nextMask && isNextMask(value, currentMask, nextMask, tokens, maskit)) ) {
        return maskit(value, currentMask, masked, tokens)
      }
    }
    return '' // empty masks
  }
}
