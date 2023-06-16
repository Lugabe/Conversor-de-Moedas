const convertBotton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currencySelect");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    console.log(currencySelect.value);
    const dolarToday = 4.81;
    const euroToday = 5.27;
    const libraToday = 6.15;
    const bitcoinToday =122551.82;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new  Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //moeda
        currency: "BRL"
    }).format(inputCurrencyValue);


}

const currencyConverted = document.querySelector(".currency-converted");
const currencyImage = document.querySelector(".currency-img");

function changeCurrency() {

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyConverted.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues();
}

convertBotton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);





