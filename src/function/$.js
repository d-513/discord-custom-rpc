module.exports.value = (id) => {
  const elem = document.getElementById(id)
  if (elem.value) return elem.value
}
module.exports.elem = (id) => {
  return document.getElementById(id)
}
