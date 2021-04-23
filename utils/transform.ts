export const stringToBoolean = (value: string) => value === 'TRUE'
export const stringToArray = (value: string) => value?.split(',')
export const toLowercase = (value: string) => value?.toLowerCase()
export const emptyToNull = (value: string) => (value ? value : null)