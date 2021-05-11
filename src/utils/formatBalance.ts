import BigNumber from 'bignumber.js'

export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}

export const getDisplayBalance = (balance: BigNumber, decimals = 18, decimalPlaces = 5) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).dp(decimalPlaces).toFixed()
}
