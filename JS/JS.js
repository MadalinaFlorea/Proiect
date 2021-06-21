const productsList = [
  {
    name: "Hrana uscata pentru caini Pedigree Adult, Vita & Pasare",
    price: 95.99,
    image:
      "https://s13emagst.akamaized.net/products/415/414806/images/res_8a61518ca9dac47c74d45932fa4aea9b.jpg?width=450&height=450&hash=11A49FD90A755A9C30E5340520E8CCFD",
    category: "Caini",
    subcategory: "mancare uscata",
    id: 1
  },
  {
    name: "Hrana uscata pentru caini Brit Premium, Adult L",
    price: 128.14,
    image:
      "https://s13emagst.akamaized.net/products/16021/16020833/images/res_e1f3b9940c28b5df48ce58aae74ad659.jpg?width=450&height=450&hash=5B8FEF5BF5E96902AC6AB4B31FB9D2BE",
    category: "Caini",
    subcategory: "mancare uscata",
    id: 2
  },
  {
    name: "Hrana uscata pentru caini Friskies Junior, Pui & Legume",
    price: 112.99,
    image:
      "https://s13emagst.akamaized.net/products/740/739877/images/res_7ff079173ba64c9c7a12b344c96624ab.jpg?width=450&height=450&hash=50C1A9520E7CE7D5648A22D4B57E1B75",
    category: "Caini",
    subcategory: "mancare uscata",
    id: 3
  },
  {
    name: "Hrana uscata pentru caini Taste of the Wild Pacific Stream",
    price: 247.99,
    image:
      "https://s13emagst.akamaized.net/products/29203/29202302/images/res_7a70c0883704aad9ea6f246849c537d4.jpg?width=450&height=450&hash=A7FA911B16117BFBFB9719A7301C69A7",
    category: "Caini",
    subcategory: "mancare uscata",
    id: 4
  },
  {
    name: "Hrana umeda pentru caini Pedigree Vital Protection",
    price: 50.99,
    image:
      "https://s13emagst.akamaized.net/products/31852/31851394/images/res_71cae68dac6e368de10ce033dd3a4f1c.jpg?width=450&height=450&hash=2F02FE4D0B6C91878BC513110CC5B8EF",
    category: "Caini",
    subcategory: "mancare umeda",
    id: 5
  },
  {
    name: "Hrana umeda pentru caini Brit Premium, Beef With Tripes",
    price: 31.19,
    image:
      "https://s13emagst.akamaized.net/products/23619/23618459/images/res_3ae088965a928f5369585149b3b7ddd2.jpg?width=450&height=450&hash=C1AD424CECD5A6D1BBB98E676AF9183C",
    category: "Caini",
    subcategory: "mancare umeda",
    id: 6
  },
  {
    name: "Hrana umeda pentru caini Mara Dog, Vanat",
    price: 63.99,
    image:
      "https://s13emagst.akamaized.net/products/14186/14185138/images/res_7868e1c8aae5dc163d0727d192058fa0.jpg?width=450&height=450&hash=63E1F3A4E9A4F82B17C046DDB4413905",
    category: "Caini",
    subcategory: "mancare umeda",
    id: 7
  },
  {
    name: "Hrana umeda pentru caini Taste of the Wild Southwest Canyon",
    price: 109.99,
    image:
      "https://s13emagst.akamaized.net/products/14339/14338437/images/res_12ae8ec4293179ea83d76a9a11939991.jpg?width=450&height=450&hash=1EC711D4CD09343CD7E25C7E66C0906F",
    category: "Caini",
    subcategory: "mancare umeda",
    id: 8
  },
  {
    name: "Sampon TopCare pentru caini si pisici cu Clorhexidina",
    price: 25.99,
    image:
      "https://s13emagst.akamaized.net/products/14301/14300734/images/res_d3c513820aed8d9fa98974ebe905e015.jpg?width=450&height=450&hash=4138C36A9710583F4045B1DB8A1A29E6",
    category: ["Pisici", "Caini"],
    subcategory: "igiena si ingrijire",
    id: 9
  },
  {
    name: "Sampon pentru caini si pisici Hartz Blana Alba",
    price: 33.06,
    image:
      "https://s13emagst.akamaized.net/products/4858/4857712/images/res_7dc38e90775afdbe50678584a020bef7.jpg?width=450&height=450&hash=D1FC717BE09DC4A2DCF74928674726C4",
    category: ["Pisici", "Caini"],
    subcategory: "igiena si ingrijire",
    id: 10
  },
  {
    name: "Sampon pentru caini si pisici cu blana neagra sau culoare inchisa",
    price: 21.99,
    image:
      "https://s13emagst.akamaized.net/products/8012/8011171/images/res_89e878f9bc16bf146529f30e091851bd.jpg?width=450&height=450&hash=F9B04BF2EA4504B78838A84CED7C6361",
    category: ["Pisici", "Caini"],
    subcategory: "igiena si ingrijire",
    id: 11
  },
  {
    name: "Sampon Antiseptic Caini si Pisici VetExpert Specialist",
    price: 69.02,
    image:
      "https://s13emagst.akamaized.net/products/22581/22580673/images/res_10c3985b7a94523a6c4e67e8e86b79fb.jpg?width=450&height=450&hash=C644DB723E018CDF72F8FE392EF9351C",
    category: ["Pisici", "Caini"],
    subcategory: "igiena si ingrijire",
    id: 12
  },
  {
    name: "Jucarie pentru caini Brown Dog, Castorul Sandel",
    price: 19.99,
    image:
      "https://s13emagst.akamaized.net/products/8576/8575671/images/res_3261e89d7d244e2b562767a1aff00518.jpg?width=450&height=450&hash=625BAB37CEF541615C7F42DF4AA4C751",
    category: "Caini",
    subcategory: "jucarii",
    id: 13
  },
  {
    name: "Jucarie Trixie Minge Denta Fun Aroma Menta",
    price: 8.93,
    image:
      "https://s13emagst.akamaized.net/products/20270/20269497/images/res_5bddd93c9702ddbd905b1e0527b3c200.jpg?width=450&height=450&hash=238E12CF6F6F6F074B5C754B8644BBCF",
    category: "Caini",
    subcategory: "jucarii",
    id: 14
  },
  {
    name: "Jucarie Trixie os vinil",
    price: 8.21,
    image:
      "https://s13emagst.akamaized.net/products/20491/20490772/images/res_1858a527292518e19bac6aa0b16dff03.jpg?width=450&height=450&hash=71732B17F113AC246C316678D05B90A2",
    category: "Caini",
    subcategory: "jucarii",
    id: 15
  },
  {
    name: "Jucarie Interactiva pentru caini, Cheerble Wickedbone",
    price: 359.99,
    image:
      "https://s13emagst.akamaized.net/products/36158/36157024/images/res_e7a841fe62fa87e995f78870fbf38af3.jpg?width=450&height=450&hash=07B895D1AE85DA7688AFCD98C75B725A",
    category: "Caini",
    subcategory: "jucarii",
    id: 16
  },
  {
    name: "Husa protectie pentru bancheta autoturismului Brown Dog",
    price: 29.99,
    image:
      "https://s13emagst.akamaized.net/products/2813/2812581/images/res_5acb695d32d74e78e56d9dc25076a405.jpg?width=450&height=450&hash=04A1E84CE6047D19CB071219DFAEB701",
    category: "Caini",
    subcategory: "articole de transport",
    id: 17
  },
  {
    name: "Cusca transport animale IMAC Carry Sport",
    price: 55.51,
    image:
      "https://s13emagst.akamaized.net/products/497/496132/images/res_88eaba93541566ba856252e1e8d572c4.jpg?width=450&height=450&hash=9EC6FECACC4F446D9986B4DE620AC4E4",
    category: "Caini",
    subcategory: "articole de transport",
    id: 18
  },
  {
    name: "Rucsac pentru transport animale de talie mica, transparent, Rosu",
    price: 139,
    image:
      "https://s13emagst.akamaized.net/products/30584/30583352/images/res_c17e3fcaf86e94389aaaefef4c008439.jpg?width=450&height=450&hash=12C7BAA6A3FE5D1A1C0FC03888B73307",
    category: "Caini",
    subcategory: "articole de transport",
    id: 19
  },
  {
    name: "Suport din aluminiu PawHut pentru caine cu perete si inchidere mobila",
    price: 569.99,
    image:
      "https://s13emagst.akamaized.net/products/29916/29915107/images/res_196ae7144087e75b918d7c777690aab2.jpg?width=450&height=450&hash=C0AB8979383AB47DDBF630F0322032C6",
    category: "Caini",
    subcategory: "articole de transport",
    id: 20
  },
  {
    name: "Hrana uscata pentru pisici Purina One, Sterilcat, Vita",
    price: 18.49,
    image:
      "https://s13emagst.akamaized.net/products/5639/5638480/images/res_4c54e59bf4481f4c479356ad21d0909e.jpg?width=450&height=450&hash=4BC2D4CC3E76129CE8C25FCE41D3B0AE",
    category: "Pisici",
    subcategory: "mancare uscata",
    id: 21
  },
  {
    name: "Pachet: 2 x Hrana uscata pentru pisici Whiskas, Junior, Pui",
    price: 27.38,
    image:
      "https://s13emagst.akamaized.net/products/3147/3146945/images/res_7afd118f37085cda8b0f9a9d85ba6234.jpg?width=450&height=450&hash=032FA2EF9C9A6977D143D1B163A1C91F",
    category: "Pisici",
    subcategory: "mancare uscata",
    id: 22
  },
  {
    name: "Hrana uscata pentru pisici Cat Joy, Pasare",
    price: 48.59,
    image:
      "https://s13emagst.akamaized.net/products/35480/35479209/images/res_b357ea6f8c34afaf105f0f76cb96e679.jpg?width=450&height=450&hash=1D036D115A2DEC055D29928F0F0BF76E",
    category: "Pisici",
    subcategory: "mancare uscata",
    id: 23
  },
  {
    name: "Hrana uscata pentru pisici Carnilove Fresh, Crap si Pastrav, Sterilised",
    price: 42.69,
    image:
      "https://s13emagst.akamaized.net/products/16939/16938446/images/res_7646759340000367ed770cebd76ebf4d.jpg?width=450&height=450&hash=0FF64B17684DBC930A7E2CE46CD38E9A",
    category: "Pisici",
    subcategory: "mancare uscata",
    id: 24
  },
  {
    name: "Hrana umeda pentru pisici Applaws, Selectie de Peste in sos",
    price: 59.99,
    image:
      "https://s13emagst.akamaized.net/products/18486/18485607/images/res_da62325668b422b24713364bcca3ba48.jpg?width=450&height=450&hash=1258EBB1434E5FBBE51F89EF9254D211",
    category: "Pisici",
    subcategory: "mancare umeda",
    id: 25
  },
  {
    name: "Hrana umeda pentru pisici Gourmet Gold, Vita si Pui",
    price: 59.99,
    image:
      "https://s13emagst.akamaized.net/products/15298/15297421/images/res_4f9be1b2056f46ea9fce37256d65a3ef.jpg?width=450&height=450&hash=F887747F27CC8EB1011617CF2A07A003",
    category: "Pisici",
    subcategory: "mancare umeda",
    id: 26
  },
  {
    name: "Hrana umeda pentru pisici Felix Fantastic, Junior, Pui in Aspic",
    price: 69.99,
    image:
      "https://s13emagst.akamaized.net/products/15298/15297475/images/res_58162743f7a9bd816e1f94ef5d890bcd.jpg?width=450&height=450&hash=78571B0770D921DF1C6874A408ADDA8E",
    category: "Pisici",
    subcategory: "mancare umeda",
    id: 27
  },
  {
    name: "Hrana umeda pentru pisici Sheba Selection, Somon",
    price: 50.99,
    image:
      "https://s13emagst.akamaized.net/products/29934/29933191/images/res_30f69f5e7142d24533f80b2bed673d40.jpg?width=450&height=450&hash=7C7D43953C044496479296A1FBFE1975",
    category: "Pisici",
    subcategory: "mancare umeda",
    id: 28
  },
  {
    name: "Carton pentru zgariat Trixie Turkis",
    price: 38.96,
    image:
      "https://s13emagst.akamaized.net/products/2882/2881409/images/res_5329ab367570e3f3d8428617b595ab73.jpg?width=450&height=450&hash=C8DB18C7B35D69873C852F8EFF847D80",
    category: "Pisici",
    subcategory: "ansambluri de joaca",
    id: 29
  },
  {
    name: "Pom de pisica stabil, FEANDREA, Play Tower",
    price: 259.99,
    image:
      "https://s13emagst.akamaized.net/products/27864/27863924/images/res_3f5fb4e63d8d93316657f1ca20116ca2.jpg?width=450&height=450&hash=1DD22391FB33C652E979761FB9C077C9",
    category: "Pisici",
    subcategory: "ansambluri de joaca",
    id: 30
  },
  {
    name: "Ansamblu de joaca pentru pisici Miau-Miau Trendy",
    price: 94.68,
    image:
      "https://s13emagst.akamaized.net/products/2416/2415762/images/res_022fa875310e4c92c35e9386cd0009d4.jpg?width=450&height=450&hash=5986C6478B283A4B11CA21D1E8DAF519",
    category: "Pisici",
    subcategory: "ansambluri de joaca",
    id: 31
  },
  {
    name: "Suport ascutit gheare si loc de joaca pentru pisici, Zola",
    price: 423.35,
    image:
      "https://s13emagst.akamaized.net/products/36561/36560635/images/res_25acb18476e82f255ace5d06e0c46c3e.jpg?width=450&height=450&hash=4770B1F0F499BAA3E72AF9212523F366",
    category: "Pisici",
    subcategory: "ansambluri de joaca",
    id: 32
  },
  {
    name: "PetSafe® FroliCat® Bolt Laser",
    price: 104.9,
    image:
      "https://shop-cdn-m.mediazs.com/bilder/petsafe/frolicat/bolt/laser/jucrie/pisici/1/400/145637_schulze_bolt_1.jpg",
    category: "Pisici",
    subcategory: "jucarii",
    id: 33
  },
  {
    name: "Undiță 3 în 1",
    price: 11.9,
    image:
      "https://shop-cdn-m.mediazs.com/bilder/undi/n/6/400/62984_PLA_Katzenangel_3_in_1_FG__20_6.jpg",
    category: "Pisici",
    subcategory: "jucarii",
    id: 34
  },
  {
    name: "Set jucării mingiuțe & șoricei",
    price: 9.9,
    image:
      "https://shop-cdn-m.mediazs.com/bilder/set/jucrii/mingiue/oricei/pentru/pisici/5/400/55406_PLA_Katzenspielzeug_Set_mit_Baellen___Maeusen_FG_DSC0362_5.jpg",
    category: "Pisici",
    subcategory: "jucarii",
    id: 35
  },
  {
    name: "Aumüller Alpaca Angie Jucarie pisici",
    price: 19.9,
    image:
      "https://shop-cdn-m.mediazs.com/bilder/aumller/alpaca/angie/jucrie/pisici/6/400/83533_pla_aumueller_alpaka_hs_01_logo_6.jpg",
    category: "Pisici",
    subcategory: "jucarii",
    id: 36
  },
  {
    name: "Casuta-culcus Mellow Tara",
    price: 49.99,
    image:
      "https://s13emagst.akamaized.net/products/3769/3768713/images/res_cdd37cd4d39a73d14144e3b7badb97ab.jpg?width=450&height=450&hash=73E884E6D54CF695345A100E880B1C6C",
    category: ["Pisici", "Caini"],
    subcategory: "culcusuri",
    id: 37
  },
  {
    name: "Covor cu gel pentru mentinere racoare",
    price: 39.99,
    image:
      "https://s13emagst.akamaized.net/products/28072/28071533/images/res_f63381bf61954dc6d1349a2bd84aa4de.jpg?width=450&height=450&hash=8A37276D3F8B943DCA81365371D54A5F",
    category: ["Pisici", "Caini"],
    subcategory: "culcusuri",
    id: 38
  },
  {
    name: "Pat Lumi LUXURY® tip cort",
    price: 65.45,
    image:
      "https://s13emagst.akamaized.net/products/20068/20067885/images/res_3331c0282b8b1a4ba684535e962b23e0.jpg?width=450&height=450&hash=B1A5C87AB34356B027F71FF324ED6E21",
    category: ["Pisici", "Caini"],
    subcategory: "culcusuri",
    id: 39
  },
  {
    name: "Culcus pentru caine si pisici Mellow Mirto",
    price: 109.99,
    image:
      "https://s13emagst.akamaized.net/products/23587/23586614/images/res_8aa78b353e5a49d93d342a6107a77107.jpg?width=450&height=450&hash=DD0E5217B151DCF5723716893304F9C1",
    category: ["Pisici", "Caini"],
    subcategory: "culcusuri",
    id: 40
  },
  {
    name: "Hrana completa pentru porumbei Versele Laga Classic, All Round",
    price: 60.24,
    image:
      "https://s13emagst.akamaized.net/products/4592/4591929/images/res_7979b922656b6e7e122aa73306835a3d.jpg?width=450&height=450&hash=0D003BB38FBC96961E23F42A6304BF17",
    category: "Pasari",
    subcategory: "mancare",
    id: 41
  },
  {
    name: "Hrana pentru perusi Vogel",
    price: 4.69,
    image:
      "https://s13emagst.akamaized.net/products/1818/1817544/images/res_b0075a5ca5b270b0996eb33266328c75.jpg?width=450&height=450&hash=26B54D9A21350CFADEA56EF6DFBCA158",
    category: "Pasari",
    subcategory: "mancare",
    id: 42
  },
  {
    name: "Hrana pentru papagali mari Versele Laga Prestige Big Parakeets",
    price: 36.99,
    image:
      "https://s13emagst.akamaized.net/products/4996/4995399/images/res_c45bdaf517750d7cd27d761699273d60.jpg?width=450&height=450&hash=677B586027F076C7591293B2F5988558",
    category: "Pasari",
    subcategory: "mancare",
    id: 43
  },
  {
    name: "Hrana pentru pasari mici, Nutribird A21 , Versele laga",
    price: 88,
    image:
      "https://s13emagst.akamaized.net/products/29276/29275050/images/res_2db3448565514a7b230de9f58047290e.jpg?width=450&height=450&hash=B54758123F8F11C8AE602AE00A66CEBD",
    category: "Pasari",
    subcategory: "mancare",
    id: 44
  },
  {
    name: "Colivie cu tava pentru pasari PawHut Colivie",
    price: 280,
    image:
      "https://s13emagst.akamaized.net/products/35334/35333977/images/res_61467e6ac51bb4743136051081ae6f45.jpg?width=450&height=450&hash=9C6A6D76FE607CAECF53FAD11291F998",
    category: "Pasari",
    subcategory: "colivii",
    id: 45
  },
  {
    name: "Colivie pasari exotice cusca papagal canar Profipet",
    price: 80.92,
    image:
      "https://s13emagst.akamaized.net/products/16666/16665347/images/res_dd1a1cb522499b1e5f2df43169012253.jpg?width=450&height=450&hash=A0A423FEDA326B93B1F5EA270473536E",
    category: "Pasari",
    subcategory: "colivii",
    id: 46
  },
  {
    name: "Colivie pasari exotice cusca papagal canar Profipet Nr 503",
    price: 188.02,
    image:
      "https://s13emagst.akamaized.net/products/16692/16691084/images/res_2793d085677b541ffe32ad1037519ff0.jpg?width=450&height=450&hash=C4D611CD667A0D0EE23383B859225577",
    category: "Pasari",
    subcategory: "colivii",
    id: 47
  },
  {
    name: "Colivie, hranitor pentru pasari, din stuf",
    price: 22,
    image:
      "https://s13emagst.akamaized.net/products/33004/33003653/images/res_09e91db326b8a76d79ff608e563d2c22.jpg?width=450&height=450&hash=AB30A46D85F5A5F57F9DF5AE5109A209",
    category: "Pasari",
    subcategory: "colivii",
    id: 48
  },
  {
    name: "Dispenser apa automat - CLD CareLoveDevotion",
    price: 326.06,
    image:
      "https://s13emagst.akamaized.net/products/31164/31163225/images/res_78921cb04f62d251991d0a54a4194096.jpg?width=450&height=450&hash=34747C0C65F2D61382DFF197423468E0",
    category: ["Pasari", "Pisici", "Caini", "Animale mici"],
    subcategory: "boluri si adapatori",
    id: 49
  },
  {
    name: "Set 2 adapatoare pentru mancare si apa",
    price: 99,
    image:
      "https://s13emagst.akamaized.net/products/30610/30609871/images/res_a915304c5a2e9676eeafed2dc407a62d.jpg?width=450&height=450&hash=DCDE0313648A345FCA073547A62BEAB2",
    category: ["Pasari", "Pisici", "Caini", "Animale mici"],
    subcategory: "boluri si adapatori",
    id: 50
  },
  {
    name: "Adapator, Fantana electrica pentru animale de companie",
    price: 130,
    image:
      "https://s13emagst.akamaized.net/products/33761/33760358/images/res_d9495a3d04c80b4fa688e18092e2477b.jpg?width=450&height=450&hash=3405AC95126F7D50142E611383E8894B",
    category: ["Pasari", "Pisici", "Caini", "Animale mici"],
    subcategory: "boluri si adapatori",
    id: 51
  },
  {
    name: "Hranitor Trixie plastic pentru pasari",
    price: 5.83,
    image:
      "https://s13emagst.akamaized.net/products/21163/21162875/images/res_90f47b5b9561345061f643e10026af3e.jpg?width=450&height=450&hash=A31CD54CFCD07656F7D49D7ECEA7E6B5",
    category: "Pasari",
    subcategory: "boluri si adapatori",
    id: 52
  },
  {
    name: "Jucarie Trixie inele pentru pasari",
    price: 4.4,
    image:
      "https://s13emagst.akamaized.net/products/21085/21084667/images/res_aab186391e49140ec6d5f3562640cb30.jpg?width=450&height=450&hash=02AE835B18320E61C7B4C69E9182A201",
    category: "Pasari",
    subcategory: "jucarii",
    id: 53
  },
  {
    name: "Jucarie Trixie din lemn cu lant si franghie pentru pasari",
    price: 8.81,
    image:
      "https://s13emagst.akamaized.net/products/21429/21428508/images/res_e0ac874085ed1eff3a65dcada1152a9d.jpg?width=450&height=450&hash=750D07C9D9A03367D2CE2A9597F249DE",
    category: "Pasari",
    subcategory: "jucarii",
    id: 54
  },
  {
    name: "Loc de joaca Trixie din scarite pentru pasari",
    price: 68.54,
    image:
      "https://s13emagst.akamaized.net/products/21190/21189418/images/res_681b578254287516595cc14dbe57a854.jpg?width=450&height=450&hash=A581215487D2881D4000AE9B0DF97FC2",
    category: "Pasari",
    subcategory: "jucarii",
    id: 55
  },
  {
    name: "Loc de joaca Trixie lemn natural pentru pasari",
    price: 58.67,
    image:
      "https://s13emagst.akamaized.net/products/19581/19580016/images/res_671833898a35ebb3ecb50262b0a04619.jpg?width=450&height=450&hash=F042BB829BB30CA052BF71B5ED38C7B8",
    category: "Pasari",
    subcategory: "jucarii",
    id: 56
  },
  {
    name: "Hrana pentru iepuri Padovan Grandmix",
    price: 29.99,
    image:
      "https://s13emagst.akamaized.net/products/1499/1498934/images/res_359606991e00de74ed7f19a57597e761.jpg?width=450&height=450&hash=28B6D93D81932E5D58C8E6961E8E9DDD",
    category: "Animale mici",
    subcategory: "mancare",
    id: 57
  },
  {
    name: "Hrana Padovan pentru rozatoare, Fan alpin",
    price: 19.99,
    image:
      "https://s13emagst.akamaized.net/products/1500/1499177/images/res_52cb3d82ec84b6d3b6055880c152d605.jpg?width=450&height=450&hash=05C176DF5ACAD094053CFDBEF607C70B",
    category: "Animale mici",
    subcategory: "mancare",
    id: 58
  },
  {
    name: "Hrana pentru Hamster KO-KO",
    price: 4.47,
    image:
      "https://s13emagst.akamaized.net/products/1818/1817558/images/res_272ea412b223acef9135481319746507.jpg?width=450&height=450&hash=7C5E34019A2E1BB630747830B49D6704",
    category: "Animale mici",
    subcategory: "mancare",
    id: 59
  },
  {
    name: "Hrana pentru rozatoare Panto, 25 kg",
    price: 114.99,
    image:
      "https://s13emagst.akamaized.net/products/5712/5711358/images/res_c5905263b803cd3bbb22fbfebbfdecc8.jpg?width=450&height=450&hash=A32192F71768C39DC9ACF18B6879BA2D",
    category: "Animale mici",
    subcategory: "mancare",
    id: 60
  },
  {
    name: "Asternut igienic pentru animale mici Cunipic, natural",
    price: 43.15,
    image:
      "https://s13emagst.akamaized.net/products/498/497350/images/res_4472db1fa835354af2ba0942bc067c12.jpg?width=450&height=450&hash=07FC2647A4220A8E013A40A82A394D2F",
    category: "Animale mici",
    subcategory: "asternut igienic",
    id: 61
  },
  {
    name: "Asternut Igienic Pentru Pisici si Animale Mici, Super Pinio",
    price: 20,
    image:
      "https://s13emagst.akamaized.net/products/22797/22796979/images/res_81812a2b60fdfa6687f98697b2abc794.jpg?width=450&height=450&hash=898774D7F8A0FD4D8E81A230CB040013",
    category: ["Animale mici", "Pisici"],
    subcategory: "asternut igienic",
    id: 62
  },
  {
    name: "Asternut igienic Premium Span",
    price: 51.25,
    image:
      "https://s13emagst.akamaized.net/products/25165/25164487/images/res_706b5701455be3201fc160b5d83db6d2.jpg?width=450&height=450&hash=38C906AB5FB216FB0A4732C0FFA52513",
    category: ["Animale mici", "Pisici"],
    subcategory: "asternut igienic",
    id: 63
  },
  {
    name: "Asternut igienic pentru animale Peleti din paie naturale de grau, Agro Peleti",
    price: 13.54,
    image:
      "https://s13emagst.akamaized.net/products/31649/31648191/images/res_09146fc88630128c690059b3c245e256.jpg?width=450&height=450&hash=592B5BFA0FC21017135EF736A561F8B2",
    category: ["Animale mici", "Pisici"],
    subcategory: "asternut igienic",
    id: 64
  },
  {
    name: "Cusca Iepuri MPS BALDO G140.42",
    price: 189,
    image:
      "https://s13emagst.akamaized.net/products/27897/27896870/images/res_860d2bd04748eb2cdd1660348a2f794b.jpg?width=450&height=450&hash=26695B9DDB1AF351BB0FAA702154A693",
    category: "Animale mici",
    subcategory: "custi",
    id: 65
  },
  {
    name: "Cusca pentru hamsteri, cu tubulatura",
    price: 124,
    image:
      "https://s13emagst.akamaized.net/products/30707/30706406/images/res_c45b30892cf71f333b16df864ea6dbfd.jpg?width=450&height=450&hash=CD2525D523BC49E3EBD1062FD5A7B425",
    category: "Animale mici",
    subcategory: "custi",
    id: 66
  },
  {
    name: "Casuta Trixie Luka din lemn pentru hamsteri",
    price: 19.4,
    image:
      "https://s13emagst.akamaized.net/products/22940/22939528/images/res_1c9e98ac368566655a1eacf2e4f2c763.jpg?width=450&height=450&hash=D0BE8808D2F39D00F0EF22D41F067FD7",
    category: "Animale mici",
    subcategory: "custi",
    id: 67
  },
  {
    name: "Casuta Trixie Tammo din lemn pentru hamsteri",
    price: 59.98,
    image:
      "https://s13emagst.akamaized.net/products/13575/13574808/images/res_1c1d73e483a8b6672747b4a83a449331.jpg?width=450&height=450&hash=2CFE6F6BD454D1B7BC845839B37BD4BE",
    category: "Animale mici",
    subcategory: "custi",
    id: 68
}
];
let users = [
    {
        first_name: "Ana",
        last_name: "Ilie",
        email: "ana.ilie@gmail.com",
        password: "Par0la!!"
    },
    {
        first_name: "Alex",
        last_name: "Popescu",
        email: "alex.popescu@gmail.com",
        password: "Par0la!!"
    },
    {
        first_name: "Maria",
        last_name: "Ionescu",
        email: "maria.ionescu@gmail.com",
        password: "Par0la!!"
    }
];

const emailValidatorRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordValidatorRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

if (!window.localStorage.getItem("users")) {
    window.localStorage.setItem("users", JSON.stringify(users));
}
else {
    users = JSON.parse(window.localStorage.getItem("users")); 
};

const processSignUp = event => {
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    if (!emailValidatorRegex.test(email)) {
        return "Adresa de email nu este valida.";
    }
    if (!passwordValidatorRegex.test(password)) {
        return "Parola nu este valida. Trebuie sa contina minim 8 caractere, o majuscula, o cifra si un caracter special.";
    }
    if (users.filter(user => user.email === email).length !== 0) {
        return "Adresa de email este deja existenta.";
    }
    if (firstName === "" || lastName === "") {
        return "Numele si prenumele sunt necesare.";
    }
    let user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    }
    users.push(user);
    window.localStorage.setItem("users", JSON.stringify(users));
    window.localStorage.setItem("current_user", JSON.stringify(user));
    updateUserMenu(user);
    return user;
}

const processLogin = event => {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let currentUser = users.filter(user => user.email === email);
    if (currentUser.length !== 1) {
        return "Nu am gasit un cont cu aceasta adresa de email.";
    }
    currentUser = currentUser[0];
    if (currentUser.password !== password) {
        return "Parola introdusa nu este corecta.";
    }
    window.localStorage.setItem("current_user", JSON.stringify(currentUser));
    updateUserMenu(currentUser);

    return currentUser;
}
const updateUserMenu = user => {
    document.getElementById("login").remove();
    document.getElementById("profile").querySelector("span").innerHTML = " " + user.first_name + " " + user.last_name;
    const logoutButton = document.createElement("div");
    logoutButton.setAttribute("id", "logout")
    const logoutIcon = document.createElement("i");
    logoutIcon.classList.add("fas");
    logoutIcon.classList.add("fa-sign-out-alt");
    const logoutText = document.createElement("span")
    logoutText.innerHTML = " Logout";
    logoutButton.appendChild(logoutIcon);
    logoutButton.appendChild(logoutText);
    logoutButton.addEventListener("click", () => {
        window.localStorage.removeItem("current_user")
        location.reload();
    });
    document.querySelector("header .subsection.right").appendChild(logoutButton);
}

const loggedInUser = window.localStorage.getItem("current_user");
if (loggedInUser !== null) {
    updateUserMenu(JSON.parse(loggedInUser));
}


let dropdownList = [];
const addSubcategoryToDropdown = (subcategory, dropdown) => {
  if (dropdown.subcategories.filter((elem) => elem === subcategory).length === 0) {
    dropdown.subcategories.push(subcategory);
  }
};
const getCategoryFromDropdownList = (category) => {
  let existingDropdownCategory = dropdownList.filter(
    (dropdown) => dropdown.category === category
  );
  if (existingDropdownCategory.length === 0) {
    let dropdown = {
      category: category,
      subcategories: [],
    };
    dropdownList.push(dropdown);
    return dropdown;
  } else {
    return existingDropdownCategory[0];
  }
};
for (let product of productsList) {
  if (typeof product.category !== "string") {
    for (category of product.category) {
      addSubcategoryToDropdown(
        product.subcategory,
        getCategoryFromDropdownList(category)
      );
    }
  } else {
    addSubcategoryToDropdown(
      product.subcategory,
      getCategoryFromDropdownList(product.category)
    );
  }
}
const menu = document.createElement("ul");
for (let dropdown of dropdownList) {
  let dropdownItem = document.createElement("li");
  let categoryLink = document.createElement("a");
  categoryLink.innerHTML = dropdown.category;
  categoryLink.setAttribute(
    "href",
    `products-overview.html?category=${dropdown.category}`
  );
  dropdownItem.appendChild(categoryLink);
  let dropdownWrapper = document.createElement("ul");
  for (let subcategory of dropdown.subcategories) {
    let subcategoryItem = document.createElement("li");
    let subcategoryLink = document.createElement("a");
    subcategoryLink.innerHTML = subcategory;
    subcategoryLink.setAttribute(
      "href",
      `products-overview.html?category=${dropdown.category}&subcategory=${subcategory}`
    );
    subcategoryItem.appendChild(subcategoryLink);
    dropdownWrapper.appendChild(subcategoryItem);
  }
  dropdownItem.appendChild(dropdownWrapper);
  menu.appendChild(dropdownItem);
}
document.querySelector("nav .container").appendChild(menu);

