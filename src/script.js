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
    const wrapperE = currencyE.closest(".currency_wrapper"); if (!wrapperE) return;
    const selectionE = wrapperE.querySelector(".currency_selection"); if (!selectionE) return;
    selectionE.classList.toggle("visible");
})

document.addEventListener("click", (e) => {
    const addE = e.target.closest("#add"); if (!addE) return;
    const wrapperE = addE.closest(".add-selection_wrapper"); if (!wrapperE) return;
    const selectionE = wrapperE.querySelector(".currency_selection"); if (!selectionE) return;
    selectionE.classList.toggle("visible");
})

const currencyInfo = async () => {
    try {
        const res = await axios.get(
            "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.1.29/v1/currencies.json"
        );
        return res.data; // object: { usd: "United States Dollar", ... }
    } catch (err) {
        console.error(err);
    }
};

function requestInfo() {
    currencyInfo().then(currencies => {
        if (!currencies) return;

        Object.entries(currencies).forEach(([abbr, fullName]) => {
            const template = document.createElement("template");

            template.innerHTML = `
                <button class="selection_option">
                    <span class="option_abbreviation">${abbr.toUpperCase()}</span>
                    <span class="option_text">${fullName}</span>
                </button>
            `;

        });
    });
}



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