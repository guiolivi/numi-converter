import axios from 'axios';

const currencyAbbreviation = document.querySelector(".currency_abbreviation");
const currencyName = document.querySelector(".currency_text");
const currency = document.querySelector(".currency");
const currencyWrapper = document.querySelector(".currency_wrapper");
const currencySelectionBox = document.querySelector(".currency_selection");
const currencySelection = document.querySelector(".selection_option");
const addButton = document.querySelector("#add");
const swapButton = document.querySelector("#swap");

document.addEventListener("click", (e) => {
    const currencyE = e.target.closest(".currency"); if (!currencyE) return;
    let wrapperE = currencyE.closest(".currency_wrapper"); if (!wrapperE) return;
    const selectionE = wrapperE.querySelector(".currency_selection"); if (!selectionE) return;
    selectionE.classList.toggle("visible");
})

document.addEventListener("click", (e) => {
    const addE = e.target.closest("#add"); if (!addE) return;
    let wrapperE = addE.closest(".add-selection_wrapper"); if (!wrapperE) return;
    const selectionE = wrapperE.querySelector(".currency_selection"); if (!selectionE) return;
    selectionE.classList.toggle("visible");
})

const inputBox = document.querySelector("#input");
const equalsTo = document.querySelector("#equals");
const valueResult = document.querySelector("#currency");
const abbreviation = document.querySelector("#abbreviation");

const currencyValue = async (currency) => {
    return axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(usr => {
            const data = usr.data;
            return data;
        })
}

function requestCurrency(currency) {
    return currencyValue(currency).then(cur => {
        console.log(cur.brl);
    })
}

requestCurrency("brl").then(r => console.log(r))