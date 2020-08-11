export var vinos: any[] = [
    {"id":1, "categoria": 1, "nombre": "Ferret Brut Reserva", "foto": "", "pais":"España", "region":"Cataluña" , "denominacion" : "Cava" ,"vinificacion" : "En depósito" , "crianza" : "30 meses", "variedad" : "Parellada, Macabeo y Xarel.Io"},
    {"id":2 , "categoria": 1, "nombre": "André Clouet Grande Réserve Grand Cru", "foto": "", "pais":"Francia", "region":"Champagne" , "denominacion" : "Champagne Grand Cru" ,"vinificacion" : "" ,"viñedo":"Plantado sobre suelos arcillo calcáreos en el pueblo de Bouzy", "crianza" : "48 meses sobre sus lías", "variedad" : "Pinot noir"},
    {"id":3 , "categoria": 1, "nombre": "Pol Roger", "foto": "", "pais":"Francia","bodega":"Pol Roger", "region":"Champagne" , "denominacion" : "Champagne" ,"viñedo" : "De diversas edades y situaciones plantado fundamentalmente sobre suelos arcillo calcáreos " , "crianza" : "48 meses de crianza sobre sus lías", "variedad" : "Pinot noir, pinot meunier y chardonnay"},
    
    {"id":4 , "categoria": 2, "nombre": "Mesoneros de Castilla 2018", "foto": "", "pais":"España", "region":"Ribera del Duero" , "bodega":"Val Sotilo" , "denominacion" : "Ribera del Duero" ,"viñedo": "Viñedos plantados en laderas orientadas al sur, en terrenos de arenas arcilloso- calcáreas, formados en el sistema tradicional de poda en vaso","vinificacion" : "En depósito con temperatura controlada" , "crianza" : "6 meses en depósito", "variedad" : "Tempranillo"},
    {"id":5 , "categoria": 2, "nombre": "Gramona Mustillant Rosat", "foto": "", "pais":"España", "region":"Pénedes" , "denominacion" : "Penedés " ,"bodega":"Gramona" ,"vinificacion" : "En depósito con temperatura controlada" , "crianza" : "6 meses en depósito", "variedad" : "Syrah Y merlot"},
    {"id":6 , "categoria": 2, "nombre": "Muga 2018", "foto": "", "pais":"España", "region":"Rioja" ,"bodega":"Muga" ,"denominacion" : "Rioja", "viñedo":"Viñedos plantados sobre suelos arcillo calcáreos" ,"vinificacion" : "En tinos de madera de 2000 litros" , "crianza" : "2 meses en tino de madera", "variedad" : "Garnacha, viura y tempranillo"},
    {"id":7 , "categoria": 2, "nombre": "Petit Caus Rosat 2014", "foto": "", "pais":"España", "region":"Penedés" ,"bodega":"Cans Rafols dels Caus" , "denominacion" : "Penedés" ,"viñedo":"Viñedos plantados sobre suelos arcillo calcáreos" ,"vinificacion" : "En depósito de forma espontánea" , "crianza" : "6 meses en depósito", "variedad" : "Tempranillo, syrah, cabernet sauvignon, merlot"},
    {"id":8 , "categoria": 2, "nombre": "La Novia Ideal 2019", "foto": "", "pais":"España", "region":"Alicante" , "denominacion" : "Alicante" ,"vinificacion" : "En depósito" , "crianza" : "6 meses en depósito ", "variedad" : "Bobal"},

    {"id":11 , "categoria": 3, "nombre": "Basa 2019", "foto": "", "pais":"España", "bodega":"Compañía de Vinos Telmo Rodríguez" , "region":"Castilla y León" , "denominacion" : "Rueda" ,"vinificacion" : "En depósito" , "viñedo":"En cordón trenzado sobre suelos calizos y con cascajos", "crianza" : "Breve crianza en depósito", "variedad" : "Verdejo y viura"},
    {"id":13 , "categoria": 3, "nombre": "Canicas 2018", "foto": "", "pais":"España", "bodega":"Tresbolillo" ,"region":"Galicia" , "denominacion" : "Rias Baixas" ,"vinificacion" : "En depósito de acero inoxidable" , "viñedo":"De distintas edades sobre suelos de granito" , "crianza" : "8 meses en depósito sobre sus lías", "variedad" : "Albariño"},
    {"id":10 , "categoria": 3, "nombre": "El Novio Perfecto 2019", "foto": "", "pais":"España", "region":"Valencia " , "denominacion" : "Valencia" ,"vinificacion" : "En depósito" , "crianza" : "6 meses en depósito", "variedad" : "Viura y moscatel"},
    {"id":16 , "categoria": 3, "nombre": "Forlong Blanco 2019", "foto": "", "pais":"España", "bodega":"Forlong" ,"region":"Cádiz" , "denominacion" : "Cádiz" ,"vinificacion" : "En depósito" , "crianza" : "En depósito", "variedad" : "Palomino"},
    {"id":14 , "categoria": 3, "nombre": "Gaba do Xil Godello 2019", "foto": "", "pais":"España", "region":"Galicia" , "denominacion" : "Valdeorras" ,"viñedo": "Viñedo de diversas edades y situaciones con suelos arcillosos sobre pizarra", "vinificacion" : "Fermentación espontánea en depósito" , "crianza" : "En depósito sobre sus lías durante 4 meses", "variedad" : "Godello"},
    {"id":18 , "categoria": 3, "nombre": "Grossot Chabilis 2015", "foto": "", "pais":"Francia","bodega":"Domaine Grossot" , "region":"Borgoña" , "denominacion" : "Borgoña" ,"viñedo": "De 15-40 años sobre suelos Kimmeridgiense arcillo calcáreo","vinificacion" : "Fermentación espontánea en depósito" , "crianza" : "En depósito entre 10-17 meses", "variedad" : "Chardonnay"},
    {"id":15 , "categoria": 3, "nombre": "Guímaro Godello 2018", "foto": "", "pais":"España","bodega":"Guímaro" , "region":"Galicia" , "denominacion" : "Ribeira Sacra","viñedo":"De unos 30-40 años con diversos suelos (graníticos, pizarra, gneis) en bancale" ,"vinificacion" : "En depósito" , "crianza" : "En depósito sobre sus lías durante 7-8 meses", "variedad" : "Godello con albariño, treixadura y loureira"},
    {"id":17 , "categoria": 3, "nombre": "Leirana 2018", "foto": "", "pais":"España", "bodega":"Forjas del Salnés" ,"region":"Galicia","viñedo": "En pérgola sobre suelos arenosos de origen granítico de entre 40 y 60 años" , "denominacion" : "Rias Baixas" ,"vinificacion" : "En depósito inox" , "crianza" : "6 meses en depósito inox", "variedad" : "7 meses en depósito inox"},
    {"id":9 , "categoria": 3, "nombre": "Lorenzo Cachazo 2018", "foto": "", "pais":"España", "region":"Castilla y León" , "denominacion" : "Rueda" ,"vinificacion" : "En depósito", "Viñedo": "Viñedo plantado sobre suelos pobres con canto rodado" , "crianza" : "6 meses en depósito", "variedad" : "Verdejo y viura"},
    {"id":19 , "categoria": 3, "nombre": "Maximin Grünhausér Riesling 2015", "foto": "", "pais":"Alemania", "bodega":"Maximin Grünhausér" ,"region":"Mosel" ,"viñedo":"Mosel", "denominacion" : "" ,"vinificacion" : "En depósito" , "crianza" : "En depósito", "variedad" : "Riesling"},
    {"id":12 , "categoria": 3, "nombre": "Muga Blanco Barrica 2018", "foto": "", "pais":"España", "bodega":"Muga" ,"region":"La Rioja" , "denominacion" : "Rioja" ,"vinificacion" : "Fermentación en barrica" , "crianza" : "2 meses en barrica con battonage semanal", "variedad" : "Viura con garnacha blanca y malvasía"},
    
    {"id":20 , "categoria": 4, "nombre": "Enate Tapas 2018", "foto": "", "pais":"España", "bodega":"Enate", "region":"Aragón" , "denominacion" : "Somontano" , "viñedo":"Diversos tipos de suelos" , "vinificacion" : "En depósito" , "crianza" : "Breve crianza en depósito", "variedad" : "Tempranillo"},
    {"id":21 , "categoria": 4, "nombre": "Enate Cabernet Merlot 2014 (botella de 0,5 litros)", "foto": "", "pais":"", "bodega":"", "region":"" , "denominacion" : "" , "viñedo":"" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":22 , "categoria": 4, "nombre": "13 Cántaros Nicolás 2016", "pais":"España", "region":"Castilla y León Cigales" , "denominacion" : "Cigales" , "vinificacion" : "fermentación en depósito y barricas de 225L" , "crianza" : "13 meses en barricas de 225L", "variedad" : "Tempranillo"},
    {"id":23 , "categoria": 4, "nombre": "Enate Cabernet Merlot 2016", "foto": "", "pais":"", "bodega":"", "region":"" , "denominacion" : "" , "viñedo":"" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    
    {"id":24 , "categoria": 4, "nombre": "Petit Caus 2018", "pais":"España", "region":"Penedés" , "denominacion" : "Penedés " , "vinificacion" : "En depósito" , "crianza" : "Breve crianza en depósito", "variedad" : "Merlot, Syrah, Cabernet Franc y Tempranillo"},
    {"id":25 , "categoria": 4, "nombre": "Las Cabañuelas 2017", "pais":"España", "region":"Castilla y León" , "denominacion" : "Cebreros" , "vinificacion" : "Fermentación espontánea en depósito de hormigón" , "crianza" : "6 meses sobre sus lías en tino de madera", "variedad" : "Garnacha tinta"},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
    {"id":21 , "categoria": 4, "nombre": "", "pais":"", "region":"" , "denominacion" : "" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},





  ];
 
  //{"categoria": 3, "nombre": "", "foto": "", "pais":"", "bodega":"", "region":"" , "denominacion" : "" , "viñedo":"" , "vinificacion" : "" , "crianza" : "", "variedad" : ""},
  