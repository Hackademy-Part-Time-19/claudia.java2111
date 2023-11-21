
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]


let listaOrdinataNome = listaProdotti.sort(function (a, b) {
    if (a.nome < b.nome) {
        return -1;
    }
    if (a.nome > b.nome) {
        return 1;
    }
})
console.log(listaOrdinataNome)


let listaOrdinataPrezzo = listaProdotti.sort(function (a, b) {
    if (a.prezzo < b.prezzo) {
        return -1;
    }
    if (a.prezzo > b.prezzo) {
        return 1;
    }
})
console.log(listaOrdinataPrezzo)



function filtraPerPrezzo(listaProdotti) {
    let listaFiltrata = []

    for (let i = 0; i < listaProdotti.length; i++) {
        if (listaProdotti[i].prezzo > 250) {
            listaFiltrata.push(listaProdotti[i])
        }
    }

    return listaFiltrata
}

let listaFiltrata = filtraPerPrezzo(listaProdotti)
console.log(listaFiltrata)

let listaFiltrata2 = listaProdotti.filter(prodotto => prodotto.prezzo > 250);
console.log(listaFiltrata2)


let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"
let valori = url.split("?")
console.log(valori)

let parametri = url.split("&")
console.log(parametri)

for (let i = 0; i < parametri.length; i++) {
    let parametro = parametri[i];
    let nome_parametro = parametro.split("=")[0];
    let valore_parametro = parametro.split("=")[1];
    console.log(nome_parametro, valore_parametro);
}


function Palindroma(testo) {

    testo = testo.replace(/\s/g, "").toLowerCase();


    return testo == testo.split("").reverse().join("");
}


console.log(Palindroma("i topi non avevano nipoti"))


