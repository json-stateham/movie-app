// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours = (time / 60) | 0
  const mins = time % 60
  return `${hours}h ${mins}m`
}

// Convert a number to money formatting
export const convertMoney = (money: number | bigint): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
  return formatter.format(money)
}

export const isPersistedState = (stateName: string) => {
  try {
    const sessionState = sessionStorage.getItem(stateName)
    if (sessionState !== null) {
      return JSON.parse(sessionState)
    }
    return null
  } catch (error) {
    console.error(error)
  }
}
