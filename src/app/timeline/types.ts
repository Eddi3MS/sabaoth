export type Saint = {
  id: number
  location: string
  order?: Order
  name: string
  birth: number
  decease: number
  wiki: string
}

export type Order =
  | 'Carmelitas'
  | 'Franciscanos'
  | 'Dominicanos'
  | 'Agostinianos'
  | 'Beneditinos'
  | 'Redentoristas'
