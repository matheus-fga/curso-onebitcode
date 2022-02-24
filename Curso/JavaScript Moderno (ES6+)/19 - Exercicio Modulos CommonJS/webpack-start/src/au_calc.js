const AU = 149587870

function auToKm(auDistance) {
  let km = auDistance * AU
  return km.toFixed(2) 
}

module.exports = {
  au: AU,
  auToKm: auToKm
}