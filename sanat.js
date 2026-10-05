// Sanalista. Yksi sanapari per rivi muodossa:  englanti = suomi
// Jos käy useampi vastaus, erota ne kauttaviivalla:  smart = älykäs / fiksu
// Sulkeissa oleva osa on vapaaehtoinen: "kirjautua (hotelliin)" hyväksyy
// sekä "kirjautua" että "kirjautua hotelliin".
// "## Otsikko" aloittaa uuden kappaleen. Muut #-alkuiset rivit ohitetaan.
const SANAT = `
## Kappale 1: Liikenne
a plane = lentokone
a ferry = lautta
a train = juna
a boat = vene
a camper = matkailuauto
a van = pakettiauto
a mountain bike = maastopyörä
a mile = maili
a cab = taksi
a tram = raitiovaunu / ratikka
a sports car = urheiluauto
a truck = kuorma-auto / rekka
a motorcycle = moottoripyörä
five hundred and sixty = 560
seven hundred and thirty-five = 735
three thousand two hundred and four = 3204

## Kappale 2: Grand Hotel
the first floor = ensimmäinen kerros
the second floor = toinen kerros
the third floor = kolmas kerros
the fourth floor = neljäs kerros
a hotel room = hotellihuone
a breakfast room = aamiaishuone
a lobby = aula
a game room = pelihuone
an elevator = hissi
a pool = uima-allas
shampoo = shampoo / sampoo
shower gel = suihkugeeli
a comb = kampa
a hairbrush = hiusharja
a toothbrush = hammasharja
sunblock = aurinkovoide
deodorant = deodorantti
toothpaste = hammastahna

## Kappale 2: Rocky Mountain East Motel
rocky = kivinen
east = itä
staff = henkilökunta
Wi-Fi = langaton nettiyhteys
check in (at a hotel) = kirjautua (hotelliin)
a reception = vastaanotto
a reservation = varaus
check-out = uloskirjautuminen
prefer = pitää parempana
sure = todella / toki / varmasti
Ma'am = rouva (puhuttelumuoto)
right away = heti
swimming trunks = uimahousut
a lifeguard = hengenpelastaja
on duty = työvuorossa
keep an eye on = pitää silmällä
somebody = joku
a cannonball = tykinkuula / pommi
splash = roiskuttaa
Marco Polo = hippaleikin nimi
I'll be "it". = Minusta tulee kiinniottaja.
a babysitter = lastenhoitaja
a key card = avainkortti
a towel = pyyhe
Cut it out! = Lopeta!
someone else = joku toinen
wet = märkä
the biggest = suurin
a splash = loiskahdus
a cartwheel = kärrynpyörä
off a diving board = ponnahduslaudalta
a backflip = voltti takaperin
You bet. = Arvaa vain.

## Kappale 3: Lentokenttä
check-in = lähtöselvitys
a ticket = lippu
a suitcase = matkalaukku
luggage = matkatavarat
a gate = portti / lähtöportti
security check = turvatarkastus
passport control = passintarkastus
a duty-free shop = verovapaa myymälä / tax free -myymälä
a boarding pass = tarkastuskortti / koneeseennousukortti
a passport = passi
a backpack = reppu
a wallet = lompakko
a name tag = nimilappu
a trolley bag = vetolaukku
a.m. = ennen puoltapäivää
p.m. = puolenpäivän jälkeen

## Kappale 3: Hello, Heathrow!
Heathrow = yksi Lontoon lentokentistä
a terminal = terminaali
forever = ikuisesti
check in (at an airport) = tehdä lähtöselvitys
stand = seisoa
patient = kärsivällinen
a queue = jono
print out = tulostaa
a machine = laite
a last name = sukunimi
a first name = etunimi
a departure = lähtö
a destination = määränpää
an arrival = saapuminen
local = paikallinen
Done! = Tehty!
a flight = lento
continue = jatkaa
I forgot = minä unohdin
off = pois
a watch = rannekello
a belt = vyö
empty = tyhjentää
a problem = ongelma
I had = minulla oli
a coin = kolikko
smart = älykäs / fiksu
a little later = vähän myöhemmin
have to be = täytyä olla
by = mennessä
an hour to kill = tunti aikaa kuluttaa
take off = lähteä lentoon
land = laskeutua
stay = jäädä / pysyä
get on the plane = mennä koneeseen
without = ilman
miss a plane = jäädä koneesta
promise = luvata

## Järjestysluvut
the first = 1.
the second = 2.
the third = 3.
the fourth = 4.
the fifth = 5.
the sixth = 6.
the seventh = 7.
the eighth = 8.
the ninth = 9.
the tenth = 10.
the eleventh = 11.
the twelfth = 12.
the twentieth = 20.
the twenty-first = 21.
the twenty-second = 22.
the twenty-third = 23.
`;
