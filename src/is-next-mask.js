export default function isNextMask (value, currentMask, nextMask, tokens, maskit) {
  const tokensArray = Object.keys(tokens)
  const onlyTokenNextMask = nextMask?.split('').reduce((acc, el) => {
    if (tokensArray.includes(el)) acc += el
    return acc
  }, '')
  const countNextValue = maskit(value, onlyTokenNextMask, false, tokens).length
  const countCurrentMask = currentMask?.split('').reduce((acc, el) => {
    if (tokensArray.includes(el)) acc++
    return acc
  }, 0)
  return countNextValue > countCurrentMask
}
