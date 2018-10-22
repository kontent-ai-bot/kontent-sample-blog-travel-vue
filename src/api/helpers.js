export function getDateUrlObject (date) {
  if (date instanceof Date) {
    return {
      date: date.getUTCDate().toString(),
      month: (date.getUTCMonth() + 1).toString(),
      year: date.getUTCFullYear().toString()
    }
  }

  return undefined
}
