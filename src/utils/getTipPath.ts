export function getTipPath(paths: string[]) {
  const longestLength = paths
    .map((p) => {
      return p.split('.')
    })
    .reduce((a, b) => (a.length >= b.length ? a : b), []).length
  return paths.find((p) => {
    return p.split('.').length === longestLength && p.slice(-2) === '.0'
  })
}
