export var vinos: any[] = [
    {"precio":"17€", "id":1, "categoria": 1, "nombre": "Ferret Brut Reserva", "foto": "", "pais":"España", "region":"Cataluña" , "denominacion" : "Cava" ,"vinificacion" : "En depósito" , "crianza" : "30 meses", "variedad" : "Parellada, Macabeo y Xarel.Io"},
    {"precio":"39€","id":2 , "categoria": 1, "nombre": "André Clouet Grande Réserve Grand Cru", "foto": "", "pais":"Francia", "region":"Champagne" , "denominacion" : "Champagne Grand Cru" ,"vinificacion" : "" ,"viñedo":"Plantado sobre suelos arcillo calcáreos en el pueblo de Bouzy", "crianza" : "48 meses sobre sus lías", "variedad" : "Pinot noir"},
    {"precio":"58€","id":3 , "categoria": 1, "nombre": "Pol Roger", "foto": "", "pais":"Francia","bodega":"Pol Roger", "region":"Champagne" , "denominacion" : "Champagne" ,"viñedo" : "De diversas edades y situaciones plantado fundamentalmente sobre suelos arcillo calcáreos " , "crianza" : "48 meses de crianza sobre sus lías", "variedad" : "Pinot noir, pinot meunier y chardonnay"},
    
    {"precio":"15€","id":4 , "categoria": 2, "nombre": "Mesoneros de Castilla 2018", "foto": "", "pais":"España", "region":"Ribera del Duero" , "bodega":"Val Sotilo" , "denominacion" : "Ribera del Duero" ,"viñedo": "Viñedos plantados en laderas orientadas al sur, en terrenos de arenas arcilloso- calcáreas, formados en el sistema tradicional de poda en vaso","vinificacion" : "En depósito con temperatura controlada" , "crianza" : "6 meses en depósito", "variedad" : "Tempranillo"},
    {"precio":"15€","id":5 , "categoria": 2, "nombre": "Gramona Mustillant Rosat", "foto": "", "pais":"España", "region":"Pénedes" , "denominacion" : "Penedés " ,"bodega":"Gramona" ,"vinificacion" : "En depósito con temperatura controlada" , "crianza" : "6 meses en depósito", "variedad" : "Syrah Y merlot"},
    {"precio":"15€","id":6 , "categoria": 2, "nombre": "Muga 2018", "foto": "", "pais":"España", "region":"Rioja" ,"bodega":"Muga" ,"denominacion" : "Rioja", "viñedo":"Viñedos plantados sobre suelos arcillo calcáreos" ,"vinificacion" : "En tinos de madera de 2000 litros" , "crianza" : "2 meses en tino de madera", "variedad" : "Garnacha, viura y tempranillo"},
    {"precio":"15€","id":7 , "categoria": 2, "nombre": "Petit Caus Rosat 2014", "foto": "", "pais":"España", "region":"Penedés" ,"bodega":"Cans Rafols dels Caus" , "denominacion" : "Penedés" ,"viñedo":"Viñedos plantados sobre suelos arcillo calcáreos" ,"vinificacion" : "En depósito de forma espontánea" , "crianza" : "6 meses en depósito", "variedad" : "Tempranillo, syrah, cabernet sauvignon, merlot"},
    {"precio":"15€","id":8 , "categoria": 2, "nombre": "La Novia Ideal 2019", "foto": "", "pais":"España", "region":"Alicante" , "denominacion" : "Alicante" ,"vinificacion" : "En depósito" , "crianza" : "6 meses en depósito ", "variedad" : "Bobal"},

    {"precio":"15€","id":9 , "categoria": 3, "nombre": "Lorenzo Cachazo 2018", "foto": "", "pais":"España", "region":"Castilla y León" , "denominacion" : "Rueda" ,"vinificacion" : "En depósito", "Viñedo": "Viñedo plantado sobre suelos pobres con canto rodado" , "crianza" : "6 meses en depósito", "variedad" : "Verdejo y viura"},
    {"precio":"15€","id":10 , "categoria": 3, "nombre": "El Novio Perfecto 2019", "foto": "", "pais":"España", "region":"Valencia " , "denominacion" : "Valencia" ,"vinificacion" : "En depósito" , "crianza" : "6 meses en depósito", "variedad" : "Viura y moscatel"},
    {"precio":"16€","id":11 , "categoria": 3, "nombre": "Basa 2019", "foto": "", "pais":"España", "bodega":"Compañía de Vinos Telmo Rodríguez" , "region":"Castilla y León" , "denominacion" : "Rueda" ,"vinificacion" : "En depósito" , "viñedo":"En cordón trenzado sobre suelos calizos y con cascajos", "crianza" : "Breve crianza en depósito", "variedad" : "Verdejo y viura"},
    {"precio":"17€","id":12 , "categoria": 3, "nombre": "Muga Blanco Barrica 2018", "foto": "", "pais":"España", "bodega":"Muga" ,"region":"La Rioja" , "denominacion" : "Rioja" ,"vinificacion" : "Fermentación en barrica" , "crianza" : "2 meses en barrica con battonage semanal", "variedad" : "Viura con garnacha blanca y malvasía"},
    {"precio":"17€","id":13 , "categoria": 3, "nombre": "Canicas 2018", "foto": "", "pais":"España", "bodega":"Tresbolillo" ,"region":"Galicia" , "denominacion" : "Rias Baixas" ,"vinificacion" : "En depósito de acero inoxidable" , "viñedo":"De distintas edades sobre suelos de granito" , "crianza" : "8 meses en depósito sobre sus lías", "variedad" : "Albariño"},
    {"precio":"18€","id":14 , "categoria": 3, "nombre": "Gaba do Xil Godello 2019", "foto": "", "pais":"España", "region":"Galicia" , "denominacion" : "Valdeorras" ,"viñedo": "Viñedo de diversas edades y situaciones con suelos arcillosos sobre pizarra", "vinificacion" : "Fermentación espontánea en depósito" , "crianza" : "En depósito sobre sus lías durante 4 meses", "variedad" : "Godello"},
    {"precio":"20€","id":15 , "categoria": 3, "nombre": "Guímaro Godello 2018", "foto": "", "pais":"España","bodega":"Guímaro" , "region":"Galicia" , "denominacion" : "Ribeira Sacra","viñedo":"De unos 30-40 años con diversos suelos (graníticos, pizarra, gneis) en bancale" ,"vinificacion" : "En depósito" , "crianza" : "En depósito sobre sus lías durante 7-8 meses", "variedad" : "Godello con albariño, treixadura y loureira"},
    {"precio":"20€","id":16 , "categoria": 3, "nombre": "Forlong Blanco 2019", "foto": "", "pais":"España", "bodega":"Forlong" ,"region":"Cádiz" , "denominacion" : "Cádiz" ,"vinificacion" : "En depósito" , "crianza" : "En depósito", "variedad" : "Palomino"},
    {"precio":"21€","id":17 , "categoria": 3, "nombre": "Leirana 2018", "foto": "", "pais":"España", "bodega":"Forjas del Salnés" ,"region":"Galicia","viñedo": "En pérgola sobre suelos arenosos de origen granítico de entre 40 y 60 años" , "denominacion" : "Rias Baixas" ,"vinificacion" : "En depósito inox" , "crianza" : "6 meses en depósito inox", "variedad" : "7 meses en depósito inox"},
    {"precio":"24€","id":18 , "categoria": 3, "nombre": "Grossot Chabilis 2015", "foto": "", "pais":"Francia","bodega":"Domaine Grossot" , "region":"Borgoña" , "denominacion" : "Borgoña" ,"viñedo": "De 15-40 años sobre suelos Kimmeridgiense arcillo calcáreo","vinificacion" : "Fermentación espontánea en depósito" , "crianza" : "En depósito entre 10-17 meses", "variedad" : "Chardonnay"},
    {"precio":"25€","id":19 , "categoria": 3, "nombre": "Maximin Grünhausér Riesling 2015", "foto": "", "pais":"Alemania", "bodega":"Maximin Grünhausér" ,"region":"Mosel" ,"viñedo":"Mosel", "denominacion" : "" ,"vinificacion" : "En depósito" , "crianza" : "En depósito", "variedad" : "Riesling"},
    
    {"precio":"15€","id":20 , "categoria": 4, "nombre": "Enate Tapas 2018", "foto": "", "pais":"España", "bodega":"Enate", "region":"Aragón" , "denominacion" : "Somontano" , "viñedo":"Diversos tipos de suelos" , "vinificacion" : "En depósito" , "crianza" : "Breve crianza en depósito", "variedad" : "Tempranillo"},
    {"precio":"12€","id":21 , "categoria": 4, "nombre": "Enate Cabernet Merlot 2014 (botella de 0,5 litros)", "foto": "", "pais":"", "bodega":"", "region":"" , "denominacion" : "" , "viñedo":"" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"precio":"15€","id":22 , "categoria": 4, "nombre": "13 Cántaros Nicolás 2016", "pais":"España", "region":"Castilla y León Cigales" , "denominacion" : "Cigales" , "vinificacion" : "fermentación en depósito y barricas de 225L" , "crianza" : "13 meses en barricas de 225L", "variedad" : "Tempranillo"},
    {"precio":"16€","id":23 , "categoria": 4, "nombre": "Enate Cabernet Merlot 2016", "foto": "", "pais":"", "bodega":"", "region":"" , "denominacion" : "" , "viñedo":"" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"precio":"16€","id":24 , "categoria": 4, "nombre": "Petit Caus 2018", "pais":"España", "region":"Penedés" , "denominacion" : "Penedés " , "vinificacion" : "En depósito" , "crianza" : "Breve crianza en depósito", "variedad" : "Merlot, Syrah, Cabernet Franc y Tempranillo"},
    {"precio":"16€","id":25 , "categoria": 4, "nombre": "Las Cabañuelas 2017", "pais":"España", "region":"Castilla y León" , "denominacion" : "Cebreros" , "vinificacion" : "Fermentación espontánea en depósito de hormigón" , "crianza" : "6 meses sobre sus lías en tino de madera", "variedad" : "Garnacha tinta"},
    {"precio":"17€","id":26 , "categoria": 4, "nombre": "Sierra Cantabria 2018", "pais":"España ", "region":"La Rioja" , "denominacion" : "Rioja Plantado sobre suelos arcillo-calcáreos" , "vinificacion" : "En depósito y tino de madera. Despalillado" , "crianza" : "14 meses en barricas de roble francés y americano", "variedad" : "Tempranillo"},
    {"precio":"17€","id":27 , "categoria": 4, "nombre": "Trompo 2018", "pais":"España", "region":"Castilla y León" , "denominacion" : "Ribera del Duero" , "vinificacion" : "Espontánea en tino de roble" , "crianza" : "7 meses en barricas usadas de roble francés", "variedad" : "Tempranillo"},
    
    {"precio":"18€","id":29, "categoria": 4, "nombre": "Gaba do Xil Mencía 2015", "pais":"España", "region":"Galicia" , "denominacion" : "Valdeorras" , "vinificacion" : "Fermentación espontánea en depósito" , "crianza" : "12 meses en depósito", "variedad" : "Mencía"},
    {"precio":"18€","id":30 , "categoria": 4, "nombre": "Guímaro 2018", "pais":"España", "region":"Galicia" , "denominacion" : "Ribeira Sacra" , "vinificacion" : "En depósito con más o menos raspón según la parcela" , "crianza" : "Crianza de entre 7-8 meses en depósito", "variedad" : "85% Mencía con un 15% restante de Brancerllao, Sousón, Negreda, Mouratón, Garnacha y Caiño"},
    {"precio":"18€","id":555 , "categoria": 4, "nombre": "Rufo 2014", "pais":"Portugal", "region":"Douro" , "denominacion" : "Douro" , "vinificacion" : "En depósito" , "crianza" : "8 meses en barricas de roble francés", "variedad" : "Touriga Nacional, tinta roriz, tinta amarella, tinta franca"},
    {"precio":"19€","id":32 , "categoria": 4, "nombre": "Candea 2016", "pais":"España", "region":"Galicia" , "denominacion" : "Monterrei" , "vinificacion" : "En depósito" , "crianza" : "12 meses en depósito", "variedad" : "Mencía, bastardo, garnacha tintorera y mouratón"},
    {"precio":"19€","id":33 , "categoria": 4, "nombre": "Algueira Mencía 2018", "pais":"España", "region":"Galicia" , "denominacion" : "Ribeira Sacra" , "vinificacion" : "En depósito" , "crianza" : "Breve crianza en depósito", "variedad" : "Mencía"},
    {"precio":"19€","id":34 , "categoria": 4, "nombre": "Michel Lynch 2016", "pais":"", "region":"" , "denominacion" : "Bordeaux" , "vinificacion" : "En depósito" , "crianza" : "12 meses en barricas de roble francés", "variedad" : "Merlot, cabernet sauvignon, cabernet franc"},
    {"precio":"19€","id":35 , "categoria": 4, "nombre": "Sentido 2016", "pais":"España", "region":"Burdeos" , "denominacion" : "Ribera del Duero" , "vinificacion" : "En depósito" , "crianza" : "12 meses en barricas de roble francés y americano", "variedad" : "tempranillo"},
    {"precio":"19€","id":36 , "categoria": 4, "nombre": "Condado de Haza 2016", "pais":"España", "region":"Castilla y León" , "denominacion" : "Ribera del Duero" , "vinificacion" : "En depósito" , "crianza" : "18 meses en barricas de roble americano", "variedad" : "Tempranillo"},
    {"precio":"19€","id":37 , "categoria": 4, "nombre": "Amorro 2016", "pais":"España", "region":"Cádiz" , "denominacion" : "Vino de la tierra de Cádiz" , "vinificacion" : "En depósito de manera espontánea" , "crianza" : "8 meses en depósito", "variedad" : "Tintilla de Rota y tempranillo"},
    {"precio":"19€","id":38 , "categoria": 4, "nombre": "Eidos Ermos  2017", "pais":"España", "region":"Galicia" , "denominacion" : "Ribeiro" , "vinificacion" : "Fermentación espontánea con uva despalillada en depósito, Brancellao, caiño longo" , "crianza" : "12 meses en barricas y depósito", "variedad" : "Brancellao, Caiño Longo, Caiño Redondo y Ferrol"},
    {"precio":"22€","id":39 , "categoria": 4, "nombre": "12 Volts 2016", "pais":"España", "region":"Mallorca" , "denominacion" : "Vino de la tierra de Mallorca" , "vinificacion" : "En depósito" , "crianza" : "9 meses en una combinación de barricas de 225 y foudres", "variedad" : "Callet-fogoneu, cabernet sauvignon, syrah y merlot"},
    {"precio":"22€","id":40 , "categoria": 4, "nombre": "Manuel Olivier Bourgogne 2016", "pais":"Francia", "region":"Borgoña" , "denominacion" : "Bourgogne" , "vinificacion" : "Fermentación espontánea uva despalillada" , "crianza" : "14 meses en barricas usadas de roble francés", "variedad" : "Pinot Noir"},
    {"precio":"22€","id":41 , "categoria": 4, "nombre": "Goliardo 2018", "pais":"España", "region":"Galicia" , "denominacion" : "Rías Baixas" , "vinificacion" : "Fermentación de con levaduras autóctonas en depósito de acero inoxidable" , "crianza" : "En barricas de distintos formatos y depósito", "variedad" : "Caiño, Loureiro y Espadeiro"},
    {"precio":"22€","id":42 , "categoria": 4, "nombre": "Muga Crianza 2016", "pais":"España", "region":"La Rioja" , "denominacion" : "Rioja" , "vinificacion" : "En tinos de roble" , "crianza" : "24 meses en barricas de roble fránces", "variedad" : "Tempranillo, Garnacha, Graciano y Mazuela"},
    {"precio":"23€","id":555 , "categoria": 4, "nombre": "Le Rocher des Violettes 2016", "pais":"Francia", "region":"Loira" , "denominacion" : "Touraine" , "vinificacion" : "Fermentación espontánea en tinos troncocónicos" , "crianza" : "12 meses en barricas de roble francés", "variedad" : "Cabernet franc"},
    {"precio":"23€","id":44 , "categoria": 4, "nombre": "Tragaldabas 2015", "pais":"España", "region":"Salamanca" , "denominacion" : "Sierra de Salamanca" , "vinificacion" : "Fermentación espontánea con uva despalillada en tino madera" , "crianza" : "10 meses en tino de madera", "variedad" : "Rufete"},
    {"precio":"23€","id":45 , "categoria": 4, "nombre": "Pesquera Crianza 2016", "pais":"España", "region":"Castilla y León" , "denominacion" : "Ribera del Duero" , "vinificacion" : "En depóstio" , "crianza" : "24 meses en barricas de roble americano", "variedad" : "Tempranillo"},
    {"precio":"25€","id":46 , "categoria": 4, "nombre": "Alanda 2012", "pais":"España", "region":"Galicia" , "denominacion" : "Monterrei" , "vinificacion" : "Fermentación en depósito con raspón entero y levaduras autóctonas" , "crianza" : "14 meses en barricas de segundo y tercer uso, y depósitos de cemento", "variedad" : "Predominantemente Mencía con Bastardo, Garnacha Tintorera y un pequeño aporte de Dona Branca"},
    {"precio":"26€","id":555 , "categoria": 4, "nombre": "Guímaro Meixeman  2017", "pais":"España", "region":"Galicia" , "denominacion" : "Ribeira Sacra" , "vinificacion" : "Con 50% de raspón entero en tinos de madera" , "crianza" : "12-14 meses en barricas usadas de roble francés", "variedad" : "85% Mencía, el 15% restante con Brancellao, Sousón, Merenzao, Negreda"},
    {"precio":"27€","id":48 , "categoria": 4, "nombre": "René Bouvier Le Chapitre", "pais":"España", "region":"Borgoña" , "denominacion" : "Bourgogne" , "vinificacion" : "Fermentación espontánea en tinos de madera abiertos" , "crianza" : "14-16 en barricas de roble francés", "variedad" : "Pinot Noir"},
    {"precio":"27€","id":50 , "categoria": 4, "nombre": "Château Villa Bel-Air 2010", "pais":"Francia", "region":"Burdeos" , "denominacion" : "Bordeaux" , "vinificacion" : "" , "crianza" : "14 meses en barricas de roble francés", "variedad" : "Cabernet sauvignon, merlot, cabernet franc"},
    {"precio":"29€","id":51 , "categoria": 4, "nombre": "Algueria Barrica Carravel 2013", "pais":"España", "region":"Galicia" , "denominacion" : "Ribeira Sacra" , "vinificacion" : "En depósito con levaduras autóctonas" , "crianza" : "24 meses en barricas usadas de roble francés", "variedad" : "Mencia"},
    {"precio":"30€","id":52 , "categoria": 4, "nombre": "Alain Graillot 2013", "pais":"Francia", "region":"Norte del Ródano" , "denominacion" : "Crozes-Hermitage" , "vinificacion" : "En depósito" , "crianza" : "14 meses en una combinación de foudre y barricas", "variedad" : "Syrah"},
    {"precio":"32€","id":53, "categoria": 4, "nombre": "Pago de Carraovejas Crianza 2015", "pais":"España", "region":"Castilla y León" , "denominacion" : "Ribera del Duero" , "vinificacion" : "En tino de roble" , "crianza" : "12 meses en barricas de roble francés y americano", "variedad" : "Tempranillo, merlot, cabernet sauvignon"},
    {"precio":"38€","id":54 , "categoria": 4, "nombre": "Thibault Liger-Belair La Corvée de Villy 2015", "pais":"España", "region":"Borgoña" , "denominacion" : "Hautes-Côtes de Nuits" , "vinificacion" : "En tino de madera" , "crianza" : "14 meses en barricas de roble francés", "variedad" : "Pinot Noir "},
    {"precio":"56€","id":555 , "categoria": 4, "nombre": "Prado Enea Gran Reserva 2005", "pais":"España", "region":"La Rioja" , "denominacion" : "Rioja" , "vinificacion" : "En tinos de madera" , "crianza" : "16 meses en depóstio de roble y 36 meses en barricas de roble francés", "variedad" : "Tempranillo, Garnacha, Graciano y Mazuela"},
    {"precio":"78€","id":555 , "categoria": 4, "nombre": "Alión 2008", "pais":"España", "region":"Castilla y León" , "denominacion" : "Ribera del Duero" , "vinificacion" : "En tinos de madera " , "crianza" : "12 meses en barricas de roble francés de las cuales un 80% son nuevas", "variedad" : "Tempranillo"},
    
    {"precio":"14€","id":55 , "categoria": 5, "nombre": "Manzanilla Maruja", "pais":"España", "region":"" , "denominacion" : "Manzanilla Sanlucar de Barrameda" , "vinificacion" : "En depósito" , "crianza" : "Sistema de siete criaderas y una solera. Vejez media de 8 a 9 años", "variedad" : "Palomino fino"},
    {"precio":"14€","id":56 , "categoria": 5, "nombre": "Fino Camborio", "pais":"España", "region":"Andalucía" , "denominacion" : "Jerez" , "vinificacion" : "En depósito" , "crianza" : "Sistema de tres criaderas. Vejez media de 9 a 10 años", "variedad" : "Palomino Fino"},
    {"precio":"21€","id":57 , "categoria": 5, "nombre": "Emilio Hidalgo Oloroso Gobernador", "pais":"España", "region":"Andalucía" , "denominacion" : "Jerez" , "vinificacion" : "Plantado sobre suelos de albariza" , "crianza" : "Crianza oxidativa", "variedad" : "Palomino"},
    {"precio":"21€","id":58 , "categoria": 5, "nombre": "Juan Piñero Amontillado", "pais":"España", "region":"Andalucía" , "denominacion" : "Jerez" , "vinificacion" : "Plantado sobre suelos de albariza" , "crianza" : "Crianza Oxidativa", "variedad" : "Palomino Fino"},
    {"precio":"23€","id":59 , "categoria": 5, "nombre": "El Maestro Sierra Amoroso Medium", "pais":"España", "region":"Andalucía" , "denominacion" : "Jerez" , "vinificacion" : "Plantado sobre suelos de albariza" , "crianza" : "Durante 3 años en botas de roble americano", "variedad" : "Palomino Fino y Pedro Ximénez"},
    {"precio":"23€","id":60 , "categoria": 5, "nombre": "El Maestro Sierra Pedro Ximénez", "pais":"España", "region":"Andalucía" , "denominacion" : "Jerez" , "vinificacion" : "Plantado sobre suelos arcillosos" , "crianza" : "En botas de roble americano", "variedad" : "Pedro Ximénez"},
    {"precio":"30€","id":61 , "categoria": 5, "nombre": "Juan Piñero Palo Cortado Great Duke 12 años", "pais":"España", "region":"Andalucía" , "denominacion" : "Jerez" , "vinificacion" : "Plantado sobre suelos de albariza" , "crianza" : "12 años en botas de roble americano", "variedad" : "Palomino FIno"},
    
    {"precio":"19€","id":63 , "categoria": 6, "nombre": "VZ Tawny", "pais":"Portugal", "region":"Douro" , "denominacion" : " Van Zellers" , "vinificacion" : "Tourida franca y Souson" , "crianza" : "En deposito", "variedad" : "Douro"},
   



  ];
 
  //{"categoria": 3, "nombre": "", "foto": "", "pais":"", "bodega":"", "region":"" , "denominacion" : "" , "viñedo":"" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
  