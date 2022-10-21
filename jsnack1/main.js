/*
Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà:
marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'idea',
        alimentazione: 'metano'
    },
    {
        marca: 'volkswagen',
        modello: 'polo',
        alimentazione: 'diesel'
    },
    {
        marca: 'volkswagen',
        modello: 'golf',
        alimentazione: 'benzina'
    },
    {
        marca: 'volkswagen',
        modello: 'lupo',
        alimentazione: 'gpl'
    },
    {
        marca: 'volkswagen',
        modello: 'polo',
        alimentazione: 'benzina'
    },
    {
        marca: 'peugeut',
        modello: '206',
        alimentazione: 'benzina'
    },
    {
        marca: 'peugeut',
        modello: '208',
        alimentazione: 'metano'
    },
    {
        marca: 'peugeut',
        modello: '2008',
        alimentazione: 'elettrico'
    }
]

const benzina = cars.filter(car => car.alimentazione == 'benzina');
console.log(benzina);

const diesel = cars.filter(car => car.alimentazione == 'diesel');
console.log(diesel);

const other = cars.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel');
console.log(other);