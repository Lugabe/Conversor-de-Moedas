const convertBotton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currencySelect");
const currencySelectToConvert = document.querySelector(".currencySelectToConvert");
const currencyImageToConvert = document.querySelector(".currencyImgToConvert");
const currencyToConvert = document.querySelector(".currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyImgConverted = document.querySelector("currency-img")
const currencyValueConverted = document.querySelector(".currency-value");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input").value;

    const dolarToday = 4.81;
    const euroToday = 5.27;
    const libraToday = 6.15;
    const bitcoinToday = 122551.82;

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

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

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelectToConvert.value == "real" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue);

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

    // currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    //     style: "currency", //moeda
    //     currency: "BRL"
    // }).format(inputCurrencyValue)

    // Convertendo valores com o seletor de cima

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(inputCurrencyValue * 0.912);

    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue * 4.82);
    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.78);
    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000038)
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(inputCurrencyValue);
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 5.29)
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.10)
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.860)
    }

    if (currencySelectToConvert.value == "euro" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000041)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 6.18)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.28)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.17)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "libra" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000048)
    }

    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * 127824.35)
    }

    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 26489.80)
    }

    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 24164.14)
    }

    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 20658.37)
    }

    if (currencySelectToConvert.value == "bitcoin" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }


}

const currencyConverted = document.querySelector(".currency-converted");
const currencyImage = document.querySelector(".currency-img");

function changeCurrency() {

    if (currencySelect.value == "real") {
        currencyConverted.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/brasil.png"
    }

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

    if (currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }


    convertValues();
}

function changeCurrencyToConvert() {

    if (currencySelectToConvert.value == "euro") {
        currencyToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.png"
    }

    if (currencySelectToConvert.value == "real") {
        currencyToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/brasil.png"
    }

    if (currencySelectToConvert.value == "libra") {
        currencyToConvert.innerHTML = "Libra"
        currencyImageToConvert.src = "./assets/libra.png"
    }

    if (currencySelectToConvert.value == "bitcoin") {
        currencyToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assets/bitcoin.png"
    }

    convertValues()
}

convertBotton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert);