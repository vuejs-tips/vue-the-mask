import maskit from './maskit'

export default function dynamicMask (masks, tokens) {
  const [small, big] = masks.sort((a, b) => a.length - b.length)
  return function (value, mask, masked = true) {
    if (maskit(value, big, true, tokens).length > small.length) {
      return maskit(value, big, masked, tokens)
    } else {
      return maskit(value, small, masked, tokens)
    }
  }
}
