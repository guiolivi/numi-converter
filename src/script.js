import axios from 'axios';

const currencyAbbreviation = document.querySelector(".currency_abbreviation");
const currencyName = document.querySelector(".currency_text");
const currency = document.querySelector(".currency");
const currencyWrapper = document.querySelector(".currency_wrapper");
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

const currencyInformation = async () => {
    return axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2026.1.29/v1/currencies.json`)
        .then(cur => {
            const data = cur.data;
            return data;
        }).catch(err => {
            console.log(err)
        })
}

const currencySelectionBox = document.querySelectorAll(".selection_list");

currencyInformation().then(c => {
    for (const [abbr, name] of Object.entries(c)) {
        let template = document.createElement("template");
        template.innerHTML = `
                            <button class="selection_option">
                                <span class="option_abbreviation">${abbr.toUpperCase()}</span>
                                <span class="option_text">${name}</span>
                            </button>`;
        let currencyTemplate = template.content.firstElementChild;
    }
})

const inputBox = document.querySelector("#input");
const equalsTo = document.querySelector("#equals");
const valueResult = document.querySelector("#currency");
const abbreviation = document.querySelector("#abbreviation");
