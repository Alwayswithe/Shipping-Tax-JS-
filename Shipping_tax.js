const intputElement = document.querySelector('.js_input_price');


document.querySelector('.js_button_calculate').addEventListener
('click', () => {
    Cost();
})

// FUNCTION AREA
function Cost() {
    let price = Number(intputElement.value) * 100;
    
    if (price <= 4000 && price > 0) {
        price += 1000;
    }

    document.querySelector('.js_Total')
        .innerHTML = `Total price: $${price / 100}`;

}

function HandleCostKeyDown(event) {
    if (event.key === 'Enter') {
        Cost()
    }
}

