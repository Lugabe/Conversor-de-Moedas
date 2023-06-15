const convertBotton = document.querySelector(".convert-button");

function botaoApertado() {
    const seletorMoedas = document.querySelector(".seletor");
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    const inputCurrencyValue = document.querySelector(".input").value;

    const dolarToday = 5.20;
    const euroToday = 6.20;

    const convertedValueEuro = (inputCurrencyValue / euroToday);
    const convertedValueDolar = (inputCurrencyValue / dolarToday);

    if (seletorMoedas.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(convertedValueDolar);

    }
    if (seletorMoedas.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(convertedValueEuro);
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //moeda
        currency: "BRL"
    }).format(inputCurrencyValue);






}