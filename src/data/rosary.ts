const vede =
  'Vêde, ó Jesus, que são as lágrimas d’Aquela que mais Vos amou na Terra, e que mais Vos ama no Céu.'
const ouvi =
  '7x -> Meu Jesus, ouvi os nossos rogos, pelas Lágrimas de Vossa Mãe Santíssima.'

export const rosary = [
  {
    id: 1,
    slug: 'rosario-lt',
    title: 'Rosario em Latim',
    initial: `#Initium/$Signum Crucis/In nomine Patris, et Filii, et Spiritus Sancti. Amen.
    /$Credo/Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.
    /$Pater Noster/Pater Noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.
    /$3x Ave Maria/Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc, et in hora mortis nostrae. Amen.
    /$Gloria/Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.
    /$O mi Iesu/O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praesertim illas quae maxime indigent misericordia tua.`,
    final: `#Orationes ad Finem Rosarii Dicendae
    /$Salve Regina/Salve, Regina, mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria./Ora pro nobis, Sancta Dei Genetrix./Ut digni efficiamur promissionibus Christi.
    /$Oremus/DEUS, cuius Unigenitus per vitam, mortem et resurrectionem suam nobis salutis aeternae praemia comparavit, concede, quaesumus: ut haec mysteria sacratissimo beatae Mariae Virginis Rosario recolentes, et imitemur quod continent, et quod promittunt assequamur. Per eundem Christum Dominum nostrum. Amen.
    //&//$Links Youtube:
    /%www.youtube.com watch?v=E5OU-_9IkXo*Mysteria Gaudii
    /%www.youtube.com watch?v=6aCjC63UCCE*Mysteria Lucis
    /%www.youtube.com watch?v=3llqWTS-JmE*Mysteria Doloris
    /%www.youtube.com watch?v=tTm9V66k0tU*Mysteria Gloriae`,
    mysteries: {
      joyful: `$Incarnationis mysterium:/Angelus Gabriel nuntiavit Mariae, Maria concepit de Spiritu Sancto, et verbum caro factum est./$Visitationis mysterium:/Maria Virgo Elisabeth visitat et magnificat Dominum./$Nativitatis mysterium:/Iesus in Bethlehem nascitur./$Praesentationis mysterium:/Iesus in templo praesentatur./$Inventionis mysterium:/Puer Iesus de iis, qui patres ipsius sunt, sollicitus.`,
      luminous: `$Baptismatis mysterium:/Iordane in flumine Iesus a Ioanne baptizatur et Spiritus super eum descendit./$Nuptiarum in Cana mysterium:/Iesus aquam in vinum commutat propter Mariae intercessionem./$Proclamationis regni Dei mysterium:/Iesus adventum regni Dei nuntiat et ad conversionem hortatur./$Transfigurationis mysterium:/Iesus in monte Tabor transfiguratur./$Eucharistiae mysterium:/Iesus in cenaculo Eucharistiam instituit, corpus ac sanguinem suum nobis donans.`,
      sorrowful: `$Agoniae mysterium:/Iesus in horto Gethsemani orat./$Flagellationis mysterium:/Iesus flagellis caeditur./$Ecce homo mysterium:/Iesus spinis coronatur./$Viae crucis mysterium:/Iesus cruce oneratus Calvariae locum adit./$Mortis mysterium:/Iesus in cruce moritur, stabat iuxta crucem Iesu mater eius.`,
      glorious: `$Resurrectionis mysterium:/Iesus a mortuis resurgit./$Ascensionis mysterium:/Iesus caelos ad Patris gloriam ascendit./$Missionis Spiritus Sancti mysterium:/Spiritus Paraclitus supra discipulos descendit./$Assumptionis Beatae Mariae Virginis mysterium:/Assumpta est Maria in caelum./$Glorificationis Beatae Mariae Virginis mysterium:/Maria Virgo in caelis regina coronatur.`,
    },
    mysteryText: {
      joyful: 'Gaudii',
      luminous: 'Lucis',
      sorrowful: 'Doloris',
      glorious: 'Gloriae',
    },
    mysteryTitle: 'Mysteria',
  },
  {
    id: 2,
    slug: 'rosario-pt',
    title: 'Rosário em Português',
    initial: `#Início/$Sinal da Cruz/Em nome do Pai, e do Filho, e do Espírito Santo. Amém./$Creio/Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu aos infernos, ressuscitou dos mortos ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja católica, na comunhão dos santos, na remissão dos pecados, na ressureição da carne, na vida eterna. Amém./$Pai Nosso/Pai nosso, que estais no céu, santificado seja o vosso nome. Venha a nós o vosso reino. Seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido. E não nos deixeis cair em tentação, mas livrai-nos do mal. Amém./$3x Ave Maria/Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém./$Glória/Glória ao Pai, ao Filho, e ao Espírito Santo. Como era no princípio, agora e sempre, por todos os séculos dos séculos. Amém./$Ó meu Jesus/Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem da vossa misericórdia.`,
    final: `#Orações ao Final do Rosário/$Salve Rainha/Salve, Rainha, mãe de misericórdia, vida, doçura, e esperança nossa, salve. A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria./Rogai por nós, Santa Mãe de Deus./Para que sejamos dignos das promessas de Cristo./$Oremos/DEUS, cujo Filho Unigênito, por sua vida, morte e ressurreição, nos conquistou as recompensas da salvação eterna, concedei-nos, vos suplicamos, que, meditando sobre estes mistérios no santíssimo Rosário da bem-aventurada Virgem Maria, imitemos o que eles contêm e obtenhamos o que prometem. Pelo mesmo Cristo nosso Senhor. Amém.`,
    mysteries: {
      joyful: `$Mistério da Encarnação:/O anjo Gabriel anunciou a Maria, Maria concebeu pelo Espírito Santo, e o verbo se fez carne./$Mistério da Visitação:/A Virgem Maria visita Isabel e magnifica o Senhor./$Mistério da Natividade:/Jesus nasce em Belém./$Mistério da Apresentação:/Jesus é apresentado no templo./$Mistério da Perda e do Encontro de Jesus no Templo:/O menino Jesus é encontrado entre os doutores após três dias.`,
      luminous: `$Mistério do Batismo de Jesus:/Jesus é batizado por João no rio Jordão e o Espírito desce sobre ele./$Mistério das Bodas de Caná:/Jesus transforma a água em vinho pela intercessão de Maria./$Mistério do Anúncio do Reino de Deus:/Jesus anuncia a chegada do Reino de Deus e chama à conversão./$Mistério da Transfiguração:/Jesus se transfigura no monte Tabor./$Mistério da Instituição da Eucaristia:/Jesus institui a Eucaristia no cenáculo, nos dando seu corpo e sangue.`,
      sorrowful: `$Mistério da Agonia no Horto:/Jesus reza no jardim do Getsêmani./$Mistério da Flagelação de Jesus:/Jesus é flagelado./$Mistério da Coroação de Espinhos:/Jesus é coroado de espinhos./$Mistério da Via Sacra:/Jesus carrega a cruz até o Calvário./$Mistério da Crucificação e Morte de Jesus:/Jesus morre na cruz, estando sua mãe ao lado.`,
      glorious: `$Mistério da Ressurreição:/Jesus ressuscita dos mortos./$Mistério da Ascensão:/Jesus ascende ao céu à glória do Pai./$Mistério da Descida do Espírito Santo:/O Espírito Santo desce sobre os discípulos./$Mistério da Assunção de Maria:/Maria é assunta ao céu./$Mistério da Coroação de Maria:/Maria é coroada rainha do céu.`,
    },
    mysteryText: {
      joyful: 'Gozosos',
      luminous: 'Luminosos',
      sorrowful: 'Dolororos',
      glorious: 'Gloriosos',
    },
    mysteryTitle: 'Mistérios',
  },
  {
    id: 3,
    slug: 'rosario-pelo-metodo-de-sao-luis-maria-grignon-de-montfort',
    title: 'Rosário - São Luís Maria Grignon de Montfort',
    initial: `#Oração Inicial/Uno-me a todos os santos que estão no Céu, a todos os justos que estão sobre a terra, a todas as almas fiéis que estão neste lugar. Uno-me a vós, meu Jesus, para louvar dignamente vossa Santa Mãe, e louvar-vos a vós, nela e por ela./Renuncio a todas as distrações que me sobrevierem durante este Rosário, que quero recitar com modéstia, atenção e devoção, como se fosse o último de minha vida. Assim seja./Nós vos oferecemos, Trindade Santíssima, este Credo, para honrar os mistérios todos de nossa Fé; esse Pai-Nosso e estas três Ave-Marias, para honrar a unidade de vossa essência e a trindade de vossas pessoas. Pedimo-vos uma fé viva, uma esperança firme e uma caridade ardente./$Credo, Pai-Nosso.../_Ave Maria, Filha bem-amada do Pai Eterno, cheia de graça.../_Ave Maria, Mãe admirável de Deus Filho, cheia de graça.../_Ave Maria, Esposa fidelíssima de Deus Espirito Santo, cheia de graça.../$Gloria ao Pai...`,
    final: `#Oração Final/Eu vos saúdo, Maria, Filha bem-amada do eterno Padre, Mãe admirável do Filho, Esposa mui fiel do Espírito Santo, templo augusto da Santíssima Trindade; eu vos saúdo, soberana Princesa, a quem tudo está submisso no Céu e na Terra; eu vos saúdo, seguro refúgio dos pecadores, que jamais repelistes pessoa alguma. Pecador que sou, me prostro a vossos pés, e vos peço de me obter de Jesus, vosso amado Filho, a contrição e o perdão de todos os meus pecados, e a divina sabedoria./Eu me consagro todo a vós, com tudo que possuo. Eu vos tomo, hoje, por minha Mãe e Senhora. Tratai-me, pois, como o último de vossos filhos e o mais obediente de vossos escravos. Atendei, minha Princesa, atendei aos suspiros dum coração que deseja amar-vos e servir-vos fielmente. Que ninguém diga que, entre todos que a vós recorreram, seja eu o primeiro desamparado./Ó minha esperança, ó minha vida, ó minha fiel e Imaculada Virgem Maria, defendei-me, nutri-me, escutai-me, instrui-me, salvai-me. Assim seja.`,
    mysteries: {
      joyful: `#I/Nós vos oferecemos, Senhor Jesus, esta primeira dezena, em honra de vossa encarnação no seio de Maria; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, uma profunda humildade. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao Mistério da encarnação, descei em nossas almas. Assim seja./#II/Nós vos oferecemos, Senhor Jesus, esta segunda dezena, em honra da Visitação de vossa Santa Mãe à sua prima Santa Isabel e da santificação de São João Batista; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a caridade para com nosso próximo. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da Visitação, descei em nossas almas. Assim seja./#III/Nós vos oferecemos, Senhor Jesus, esta terceira dezena, em honra de vosso Nascimento no estábulo de Belém; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o desapego dos bens terrenos, o desprezo das riquezas e o amor à pobreza. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério do Nascimento de Jesus, descei em nossas almas. Assim seja./#IV/Nós vos oferecemos, Senhor Jesus, esta quarta dezena, em honra a vossa apresentação ao templo, e da purificação de Maria; e vos pedimos, por este mistério e por sua intercessão, uma grande pureza de corpo de alma. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da purificação descei, descei em nossas almas. Assim seja./#V/Nós vos oferecemos, Senhor Jesus, esta quinta dezena, em honra ao vosso reencontro por Maria; e vos pedimos, por este mistério; e por sua intercessão, a verdadeira sabedoria./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério do reencontro de Jesus, descei em nossas almas. Assim seja.`,
      sorrowful: `#VI/Nós vos oferecemos, Senhor Jesus, esta sexta dezena, em honra a vossa agonia mortal no Jardim das Oliveiras; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a contrição de nossos pecados. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da agonia de Jesus, descei em nossas almas. Assim seja./#VII/Nós vos oferecemos, Senhor Jesus, esta sétima dezena, em honra a vossa sangrenta flagelação; e vos pedimos, por este mistério e pela intercessão de vossa Mãe santíssima, a mortificação de nossos sentidos. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da flagelação de Jesus, descei em nossas almas. Assim seja./#VIII/Nós vos oferecemos, Senhor Jesus, esta oitava dezena, em honra de vossa coroação de espinhos; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, o desprezo do mundo. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da coroação de espinhos, descei em nossas almas. Assim seja./#IX/Nós vos oferecemos, Senhor Jesus, esta nona dezena, em honra do carregamento da Cruz; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a paciência em todas as nossas cruzes. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério do carregamento da cruz, descei em nossas almas. Assim seja./#X/Nós vos oferecemos, Senhor Jesus, esta décima dezena, em honra a vossa crucificação e morte ignominiosa sobre o calvário; e vos pedimos por este mistério e pela intercessão de vossa Mãe Santíssima, a conversão dos pecadores, a perseverança dos justos e o alívio das almas do purgatório. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da crucificação de Jesus descei em nossas almas. Assim seja.`,
      glorious: `#XI/Nós vos oferecemos, Senhor Jesus, esta undécima dezena, em honra a vossa ressurreição gloriosa; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, o amor a Deus e o fervor ao vosso serviço. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da ressurreição, descei em nossas almas. Assim seja./#XII/Nós vos oferecemos, Senhor Jesus, esta duodécima dezena, em honra a vossa triunfante ascensão; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, um ardente desejo do céu, nossa cara pátria. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da ascensão descei, em nossas almas. Assim seja./#XIII/Nós vos oferecemos, Senhor Jesus, esta décima terceira dezena, em honra do mistério de Pentecostes; e vos pedimos, por este mistério e pela intercessão de vossa Mãe Santíssima, a descida do Espírito Santo em nossas almas. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério de Pentecostes, descei em nossas almas. Assim seja./#XIV/Nós vos oferecemos, Senhor Jesus, esta décima quarta dezena, em honra da ressurreição e triunfal assunção de vossa Mãe ao céu; e vos pedimos, por este mistério e por sua intercessão, uma terna devoção a tão boa mãe. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças ao mistério da assunção descei em nossas almas. Assim seja./#XV/Nós vos oferecemos, Senhor Jesus esta décima quinta dezena, em honra da coroação gloriosa de vossa Mãe Santíssima no céu; e vos pedimos, por este mistério e por sua intercessão, a perseverança na graça e a coroa da glória. Assim seja./$Pai-Nosso, dez Ave-Marias, Glória./Graças aos mistérios da coroação gloriosa de Maria, descei em nossas almas. Assim seja.`,
    },
    mysteryText: {
      joyful: 'Gozosos',
      luminous: 'Luminosos',
      sorrowful: 'Dolororos',
      glorious: 'Gloriosos',
    },
    mysteryTitle: 'Mistérios',
  },
  {
    id: 4,
    slug: 'rosary-of-our-lady-of-tears',
    title: 'Coroa das Lágrimas',
    initial: `#Oração Inicial/Eis-nos aqui aos Vossos pés, ó dulcíssimo Jesus Crucificado, para Vos oferecermos as lágrimas d’Aquela que, com tanto amor, Vos acompanhou no caminho doloroso do Calvário. Fazei, ó bom Mestre, que nós saibamos aproveitar da lição que elas nos dão, para que, na Terra, realizando a Vossa Santíssima Vontade, possamos um dia, no Céu, Vos louvar por toda a eternidade.`,
    final: `#Repetir 3 vezes/${vede}//&
    /#Oração Final/Virgem Santíssima e Mãe das Dores, nós Vos pedimos que junteis os Vossos rogos aos nossos, a fim de que Jesus, Vosso Divino Filho, a quem nos dirigimos em nome das Vossas lágrimas de Mãe, ouça as nossas preces e nos conceda, com as graças que desejamos, a coroa da vida eterna. Amém.
    //&/#Jaculatórias finais/Por Vossa mansidão divina, ó Jesus Manietado, salvai o Brasil do inimigo ameaçador!/Ó Virgem Dolorosíssima, as Vossas Lágrimas derrubaram o império infernal!
    //&//&//$Promessas/Jesus disse: “Os que me pedirem pelas lágrimas de minha mãe, eu amorosamente os atenderei"
    //$Links úteis:/%youtu.be iZOHoERKdlI?si=k4VUzXh6tBAladhf*A Profecia de Nossa Senhora das Lágrimas para o Brasil`,
    mysteries: {
      joyful: `/&/#Repetir 7 vezes/${vede}/${ouvi}//&`,
    },
    mysteryText: {
      joyful: 'Gozosos',
    },
    mysteryTitle: 'Mistérios',
  },
]
