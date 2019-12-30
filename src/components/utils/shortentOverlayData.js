export default function(data) {
  return data.map(({ id, overlayFile }) => ({ id, overlayFile }))
}
