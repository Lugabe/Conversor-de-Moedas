const convertBotton = document.querySelector(".convert-button")

function botaoApertado() {

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    const inputCurrencyValue = document.querySelector(".input").value;
    const dolarToday = 5.20;

    const convertedValue = (inputCurrencyValue / dolarToday);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //moeda
        currency: "BRL"
    }).format(inputCurrencyValue);


    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", //moeda
        currency: "USD"
    }).format(convertedValue);

}