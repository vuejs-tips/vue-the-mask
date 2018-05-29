export default function dynamicMask (maskit, masks, tokens) {
  let sortedMasks = Array.from(masks).sort((a, b) => a.length - b.length)
  return function (value, mask, masked = true) {
    var i = 0
    while (i < sortedMasks.length) {
      var currentMask = sortedMasks[i]
      i++
      var nextMask = sortedMasks[i]
      if (! (nextMask && maskit(value, nextMask, true, tokens).length > currentMask.length) ) {
        return maskit(value, currentMask, masked, tokens)
      }
    }
    return '' // empty masks
  }
}
