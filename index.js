import Koncnica from "./koncnica.js"


const Vnosnik = document.getElementById("vnosnik-kolicine")
const BesediloDolzina = document.getElementById("besedilo-dolzina")
const BesediloProstornina = document.getElementById("besedilo-prostornina")
const BesediloTeza = document.getElementById("besedilo-teza")
const GumbPotrdi = document.getElementById("Gumb-pretvori-potrdi")

Vnosnik.value = ""

GumbPotrdi.addEventListener('click', (vrednost) => {
    Zagon(vrednost)
})

Vnosnik.addEventListener('keyup', (vrednost) => {
    Zagon(vrednost)
})



const Zagon = vrednost => {
    const Stevilo = Number(vrednost.target.value)  ? Number(vrednost.target.value) : 1
    Nastavivsebino(Stevilo)
}

const Nastavivsebino = (Stevilo) => {
    const Metricevlje = Pretvorba(Stevilo, 3.281);
    const Cevljimeter = Pretvorba(Stevilo, 0.305);
    const LiterGalona = Pretvorba(Stevilo, 0.2199692);
    const GalonaLiter = Pretvorba(Stevilo, 4.546090998194293);
    const KilogramPound = Pretvorba(Stevilo, 2.204623);
    const PoundKilogram = Pretvorba(Stevilo, 0.4535924);


    BesediloDolzina.innerHTML = `${Stevilo} met${Koncnica(Stevilo, "a")} = ${Metricevlje} čev${Koncnica(Metricevlje, "d")} 
    | ${Stevilo} čev${Koncnica(Stevilo, "d")} = ${Cevljimeter} met${Koncnica(Cevljimeter, "a")}`

    BesediloProstornina.innerHTML = `${Stevilo} lit${Koncnica(Stevilo, "a")} = ${LiterGalona} galon${Koncnica(LiterGalona, "c")}
    | ${Stevilo} galon${Koncnica(Stevilo, "c")} = ${GalonaLiter} lit${Koncnica(GalonaLiter, "a")}`

    BesediloTeza.innerHTML = `${Stevilo} kilogram${Koncnica(Stevilo, "b")} = ${KilogramPound} funt${Koncnica(KilogramPound, "b")}
    | ${Stevilo} funt${Koncnica(Stevilo, "b")} = ${PoundKilogram} kilogram${Koncnica(PoundKilogram, "b")}`
}

function Pretvorba(vrednost, kolicnik) {
    let rezultat = vrednost * kolicnik
    return rezultat.toFixed(3)
}

