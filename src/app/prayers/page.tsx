import Link from 'next/link'

export const prayers = [
  {
    id: 1,
    name: 'Patter Noster',
    slug: 'patter-noster',
    prayer:
      'Pater noster,/qui es in cælis/sanctificetur nomen tuum/adveniat regnum tuum/fiat voluntas tua,/sicut in cælo et in terra./Panem nostrum quotidianum da nobis hodie,/et dimitte nobis debita nostra,/sicut et nos dimittimus debitoribus nostris/et ne nos inducas in tentationem/sed libera nos a malo. Amen.',
  },
  {
    id: 2,
    name: 'Credo',
    slug: 'credo',
    prayer: `Credo in Deum Patrem omnipoténtem,/Creatórem cæli et terræ./Et in Iesum Christum,/Fílium eius únicum,/Dóminum nostrum,/qui concéptus est de Spíritu Sancto,/natus ex María Vírgine,/passus sub Póntio Piláto,/crucifíxus, mórtuus, et sepúltus,/descéndit ad ínferos,/tértia die resurréxit a mórtuis,/ascéndit ad cælos,/sedet ad déxteram Dei Patris omnipoténtis,/inde ventúrus est iudicáre vivos et mórtuos./Credo in Spíritum Sanctum,/sanctam Ecclésiam cathólicam,/sanctórum communiónem,/remissiónem peccatórum,/carnis resurrectiónem,/vitam ætérnam. Amen.`,
  },
  {
    id: 3,
    name: 'Ave Maria',
    slug: 'ave-maria',
    prayer:
      'Ave Maria, gratia plena,/Dóminus tecum./Benedícta tu in muliéribus,/et benedíctus fructus ventris tui, Iesus./Sancta Maria, Mater Dei,/ora pro nobis peccatóribus,/nunc, et in hora mortis nostræ./Amen.',
  },
  {
    id: 4,
    name: 'Gloria',
    slug: 'gloria',
    prayer:
      'Gloria Patri,/et Fílio,/et Spíritui Sáncto./Sicut erat in princípio,/et nunc et semper,/et in sǽcula sæculórum./Amen.',
  },
  {
    id: 5,
    name: 'O mi Iesu',
    slug: 'o-mi-iesu',
    prayer:
      'O mi Iesu,/ dimitte nobis debita nostra,/libera nos ab igne inferni,/conduc in cælum omnes animas,/præsertim illas quæ maxime/indigent misericordia tua.',
  },
  {
    id: 6,
    name: 'Salve Regina',
    slug: 'salve-regina',
    prayer:
      'Salve, Regína,/Mater misericórdæ,/vita, dulcédo,/et spes nostra, salve./Ad te clamámus,/éxsules fílii Hevæ,/Ad te suspirámus,/geméntes et flentes,/in hac lacrimárum valle./Eia, ergo, advocáta nostra,/illos tuos misericórdes óculos ad nos convérte./Et Iesum, benedíctum fructum ventris tui,/nobis post hoc exílium osténde./O clemens, O pia, O dulcis Virgo Maria./Ora pro nobis sancta Dei Génetrix./Ut digni efficiámur promissiónibus Christi./Amen.',
  },
  {
    id: 7,
    name: 'Deus meus',
    slug: 'deus-meus',
    prayer:
      'Deus meus/Credo, adoro,/spero et amo Vos./Precor veniam pro eis/qui non credunt,/non adorant, non sperant/et non amant Vos.',
  },
]

const Prayers = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      {prayers.map((o) => (
        <li
          key={o.id}
          className="underline underline-offset-4  hover:text-blue-600"
        >
          <Link href={`/prayers/${o.slug}`}>{o.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Prayers
