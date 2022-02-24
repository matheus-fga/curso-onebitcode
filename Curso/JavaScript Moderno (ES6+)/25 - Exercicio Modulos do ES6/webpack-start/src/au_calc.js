export const AU = 149587870

export function auToKm(auDistance) {
  let km = auDistance * AU
  return km.toFixed(2) 
}