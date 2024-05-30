import { Saint } from './types'

const saints: Saint[] = [
  {
    id: 1,
    name: 'São Bento',
    location: 'Núrsia, Itália',
    birth: 480,
    decease: 547,
    order: 'Beneditinos',
    wiki: '/Bento_de_Núrsia',
  },
  {
    id: 2,
    name: 'Santo Agostinho',
    location: 'Hipona, Argélia',
    birth: 354,
    decease: 430,
    order: 'Agostinianos',
    wiki: '/Agostinho_de_Hipona',
  },
  {
    id: 3,
    name: 'São Francisco de Assis',
    location: 'Assis, Itália',
    birth: 1181,
    decease: 1226,
    order: 'Franciscanos',
    wiki: '/Francisco_de_Assis',
  },
  {
    id: 4,
    name: 'Santo Antônio de Pádua',
    location: 'Pádua, Itália',
    birth: 1195,
    decease: 1231,
    order: 'Franciscanos',
    wiki: '/Santo_António_de_Lisboa',
  },
  {
    id: 5,
    name: 'São Boaventura',
    location: 'Civita di Bagnoregio, Itália',
    birth: 1221,
    decease: 1274,
    wiki: '/Boaventura',
    order: 'Franciscanos',
  },
  {
    id: 6,
    name: 'Santo Tomás de Aquino',
    order: 'Dominicanos',
    location: 'Roccasecca, Itália',
    birth: 1225,
    decease: 1274,
    wiki: '/Tomás_de_Aquino',
  },
  {
    id: 7,
    name: "Santa Joana D'arc",
    location: 'Domrémy, França',
    birth: 1412,
    decease: 1431,
    wiki: "/Joana_D'arc",
  },
  {
    id: 8,
    name: 'São Tomás More',
    birth: 1478,
    decease: 1535,
    wiki: '/Thomas_More',
    location: 'Londres, Reino Unido',
  },
  {
    id: 9,
    name: "Santa Tereza D'Ávila",
    location: 'Ávila, Espanha',
    birth: 1515,
    decease: 1582,
    order: 'Carmelitas',
    wiki: '/Teresa_de_Ávila',
  },
  {
    id: 10,
    name: 'São João da Cruz',
    location: 'Fontiveros, Espanha',
    order: 'Carmelitas',
    birth: 1542,
    decease: 1591,
    wiki: '/João_da_Cruz',
  },
  {
    id: 11,
    name: 'Santo Afonso Maria de Ligório',
    location: 'Nápoles, Itália',
    birth: 1696,
    decease: 1787,
    wiki: '/Afonso_de_Ligório',
    order: 'Redentoristas',
  },
  {
    id: 12,
    name: 'Santa Teresa de Lisieux',
    location: 'Lisieux, França',
    order: 'Carmelitas',
    birth: 1873,
    decease: 1897,
    wiki: '/Teresa_de_Lisieux',
  },
  {
    id: 13,
    name: 'São Padre Pio',
    location: 'Pietrelcina, Itália',
    order: 'Franciscanos',
    birth: 1887,
    decease: 1968,
    wiki: '/Padre_Pio',
  },
  {
    id: 14,
    name: 'São Maximiliano Kolbe',
    location: 'Zduńska Wola, Polônia',
    order: 'Franciscanos',
    wiki: '/Maximiliano_Maria_Kolbe',
    birth: 1894,
    decease: 1941,
  },
  {
    id: 15,
    name: 'São Luís Maria de Montfort',
    birth: 1673,
    decease: 1716,
    location: 'Montfort-sur-Meu, França',
    wiki: '/Luís_Maria_Grignion_de_Montfort',
  },
  {
    id: 16,
    name: 'São Josemaría Escrivá',
    birth: 1902,
    decease: 1975,
    location: 'Barbastro, Espanha',
    wiki: '/Josemaría_Escrivá_de_Balaguer',
  },
  {
    id: 17,
    name: 'São Sebastião',
    birth: 256,
    decease: 288,
    location: 'Narbona, França',
    wiki: '/Sebastião_de_Narbona',
  },
  {
    id: 18,
    name: 'Santo Antão',
    birth: 251,
    decease: 356,
    location: 'Heracleópolis Magna, Egito',
    wiki: '/Antão,_o_Grande',
  },
  {
    id: 19,
    name: 'Santo Atanásio',
    birth: 296,
    decease: 373,
    wiki: '/Atanásio_de_Alexandria',
    location: 'Alexandria, Egito',
  },
  {
    id: 20,
    name: 'São Simão Stock',
    birth: 1165,
    decease: 1265,
    wiki: '/Simão_Stock',
    location: 'Aylesford, Reino Unido',
    order: 'Carmelitas',
  },
  {
    id: 21,
    name: 'Santa Clara de Assis',
    birth: 1194,
    decease: 1253,
    location: 'Assis, Itália',
    wiki: '/Clara_de_Assis',
    order: 'Franciscanos',
  },
  {
    id: 22,
    name: 'Santa Teresa de Calcutá',
    birth: 1910,
    decease: 1997,
    location: 'Calcutá, Índia',
    wiki: '/Madre_Teresa_de_Calcutá',
  },
  {
    id: 23,
    name: 'São João Paulo II',
    birth: 1920,
    decease: 2005,
    location: 'Wadowice, Polônia',
    wiki: '/Papa_João_Paulo_II',
  },
  {
    id: 24,
    name: 'Santa Juliana',
    birth: 1193,
    decease: 1258,
    location: 'Liège, Bélgica',
    wiki: '/Juliana_de_Mont_Cornillon',
    order: 'Agostinianos',
  },
  {
    id: 25,
    name: 'Santa Faustina',
    birth: 1905,
    decease: 1938,
    location: 'Głogowiec, Polônia',
    wiki: '/Faustina_Kowalska',
  },
  {
    id: 26,
    name: 'Santa Catarina de Siena',
    birth: 1347,
    decease: 1380,
    location: 'Siena, Itália',
    wiki: '/Catarina_de_Siena',
    order: 'Dominicanos',
  },
  {
    name: 'Santa Rita',
    birth: 1381,
    decease: 1457,
    order: 'Agostinianos',
    id: 27,
    location: 'Cássia, Itália',
    wiki: '/Rita_de_Cássia',
  },
  {
    name: 'Santa Bernadete',
    birth: 1844,
    decease: 1879,
    wiki: '/Bernadette_Soubirous',
    id: 28,
    location: 'Lourdes, França',
  },
  {
    name: 'Santa Maria Goretti',
    birth: 1890,
    decease: 1902,
    location: 'Corinaldo, Itália',
    id: 29,
    wiki: '/Maria_Goretti',
  },
  {
    id: 30,
    name: 'Santa Isabel da Hungria',
    birth: 1207,
    decease: 1231,
    location: 'Pressburgo, Eslováquia',
    wiki: '/Isabel_da_Hungria',
  },

  {
    id: 31,
    name: 'Santa Brígida da Suécia',
    birth: 1303,
    decease: 1373,
    location: 'Uppland, Suécia',
    wiki: '/Brígida_Birgersdotter_da_Suécia',
    order: 'Brigitinos',
  },
  {
    id: 32,
    name: 'São Francisco Xavier',
    birth: 1506,
    decease: 1552,
    location: 'Xavier, Espanha',
    wiki: '/Francisco_Xavier',
    order: 'Companhia de Jesus',
  },
  {
    id: 33,
    name: 'Santa Josephine Bakhita',
    birth: 1869,
    decease: 1947,
    location: 'Darfur, Sudão',
    wiki: '/Josefina_Bakhita',
    order: 'Canossiana',
  },
  {
    id: 34,
    name: 'Santa Margarida da Escócia',
    birth: 1045,
    decease: 1093,
    location: 'Hungria',
    wiki: '/Margaret_da_Escócia',
  },
  {
    id: 35,
    name: 'São Juan Diego',
    birth: 1474,
    decease: 1548,
    location: 'Cuautitlán, México',
    wiki: '/Juan_Diego_Cuauhtlatoatzin',
  },
  {
    id: 37,
    name: 'São Domingos de Gusmão',
    birth: 1170,
    decease: 1221,
    location: 'Caleruega, Espanha',
    wiki: '/Domingos_de_Gusmão',
    order: 'Dominicanos',
  },
  {
    id: 38,
    name: 'Santa Catarina Labouré',
    birth: 1806,
    decease: 1876,
    location: 'Borgonha, França',
    wiki: '/Catarina_Labouré',
  },
  {
    id: 39,
    name: 'Santo Henrique',
    birth: 973,
    decease: 1024,
    location: 'Baviera, Sacro Império Romano',
    wiki: '/Henrique_II_do_Sacro_Império_Romano-Germânico',
  },
  {
    id: 40,
    name: 'São Martinho de Porres',
    birth: 1579,
    decease: 1639,
    location: 'Lima, Peru',
    wiki: '/Martinho_de_Porres',
  },
  {
    id: 41,
    name: 'São Francisco de Paula',
    birth: 1416,
    decease: 1507,
    location: 'Paula, Itália',
    wiki: '/Francisco_de_Paola',
    order: 'Ordem dos Mínimos',
  },
  {
    id: 42,
    name: 'São Vicente de Paulo',
    birth: 1581,
    decease: 1660,
    location: 'Pouy, França',
    wiki: '/Vicente_de_Paulo',
    order: 'Lazarista',
  },
  {
    id: 43,
    name: 'São Francisco de Sales',
    birth: 1567,
    decease: 1622,
    location: 'Saboya, França',
    wiki: '/Francisco_de_Sales',
  },
  {
    id: 44,
    name: 'São Gregório Magno',
    birth: 540,
    decease: 604,
    location: 'Roma, Itália',
    wiki: '/Papa_Gregório_I',
    order: 'Beneditinos',
  },
  {
    id: 46,
    name: 'Santa Margarida Maria Alacoque',
    birth: 1647,
    decease: 1690,
    location: 'Verosvres, França',
    wiki: '/Margarida_Maria_Alacoque',
    order: 'Visitandina',
  },

  {
    id: 47,
    name: 'Santa Brígida da Irlanda',
    birth: 453,
    decease: 524,
    location: 'Louth, Irlanda',
    wiki: '/Brígida_da_Irlanda',
  },
  {
    id: 48,
    name: 'Santa Angela de Merici',
    birth: 1474,
    decease: 1540,
    location: 'Desenzano del Garda, Itália',
    wiki: '/Angela_Merici',
    order: 'Ursulinas',
  },
  {
    id: 36,
    name: 'São Domingos Sávio',
    birth: 1842,
    decease: 1857,
    location: 'Piemonte, Itália',
    wiki: '/Domingos_Sávio',
  },
  {
    id: 49,
    name: 'Santa Rosa de Lima',
    birth: 1586,
    decease: 1617,
    location: 'Lima, Peru',
    wiki: '/Rosa_de_Lima',
    order: 'Dominicanos',
  },
]

saints.sort((a, b) => {
  return a.birth - b.birth || a.name.localeCompare(b.name)
})

export { saints }

/* 
{
    id: ,
    name: ,
    birth: ,
    decease: ,
    location: ,
    wiki: ,
    order: ,
  },
*/

/*   {
    id: 
    name: 'São Carlo Acutis',
    location: 'Londres, Reino Unido',
    order: '',
    birth: 1991, decease: 2006,
    wiki: '/Carlo_Acutis',
  }, */
