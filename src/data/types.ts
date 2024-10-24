export type Saint = {
  id: number
  location: string
  name: string
  birth?: number
  decease: number
  description?: string
}

export type Prayer = {
  id: number
  name: string
  slug: string
  prayer: string
  lang: string
}
