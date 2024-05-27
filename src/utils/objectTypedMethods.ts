export function objKeys<T extends Record<string, any>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

export function objEntries<T extends Record<string, any>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}

export function objValues<T extends Record<string, any>>(obj: T): T[keyof T][] {
  return Object.values(obj) as T[keyof T][]
}

export function objFromEntries<T extends [string, any]>(
  entries: T[]
): Record<T[0], T[1]> {
  return Object.fromEntries(entries) as Record<T[0], T[1]>
}
