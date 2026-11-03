# Sanakoe

Sanakoekortit koululaiselle (englanti ↔ suomi). Pelkkä staattinen sivu, julkaistaan GitHub Pagesilla.

- Kortissa näkyy sana, vastaus kirjoitetaan toisella kielellä.
- Jokainen sana kysytään molempiin suuntiin.
- Yrityksiä on rajattomasti. Sana on osattu, kun sen saa oikein kurkkaamatta. Jos kortista kurkataan, sana kysytään myöhemmin uudestaan.
- Jos vastaus on muuten oikein mutta artikkeli (a, an, the) puuttuu tai on väärä, sivu vinkkaa siitä.
- Epäsäännölliset verbit ovat omalla sivullaan (`verbit.html`, sanat tiedostossa `verbit.js`): kaksi korttia kerrallaan (perusmuoto ja imperfekti), kolme koetta à 14 verbiä.
- Edistyminen tallentuu selaimeen (localStorage), ja sen voi nollata.

## Sanojen vaihtaminen

Muokkaa tiedostoa `sanat.js`: yksi pari per rivi muodossa `englanti = suomi`.
Vaihtoehtoiset vastaukset erotetaan kauttaviivalla: `big = iso / suuri`.
