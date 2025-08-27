// resuable function 
function dgei(id) {
    return document.getElementById(id);
}
function getElemValueAsNum(id) {
    return Number(dgei(id).innerText)
}
// heart icons Functionalitie
dgei('card-container').addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.className.includes('fa-heart')) {
        let heartCount = getElemValueAsNum('heart-count')
        let totalHeartCount = heartCount + 1;
        dgei('heart-count').innerText = totalHeartCount;
    };

})

// call button Functionalitie

dgei('card-container').addEventListener("click", function (e) {
    e.preventDefault()
    //  verify part 
    let coinQuantity = getElemValueAsNum('coin-quantity');
    if (coinQuantity < 20) {
        alert("You don't have Enough coin. Need at least 20 coins to make a call.");
        return;
    }
    // show alert part 
    if (e.target.className.includes('call-btn')) {
        let callButton = e.target;
        let cardCategory = callButton.parentNode.parentNode.querySelector('.card-category').innerText;
        let hotlineNumber = callButton.parentNode.parentNode.querySelector('.hotline-number').innerText;
        console.log(cardCategory, hotlineNumber);
        alert(`Calling ${cardCategory} Service ${hotlineNumber}...`)

        //   coin reduce part 
        let newCoinQuantity = coinQuantity - 20;
        dgei('coin-quantity').innerText = newCoinQuantity;


        // add to call history part 
        let time = new Date().toLocaleTimeString(undefined,{hour12:true});
        let callHistoryContainer = dgei('call-history-card-container');
        let div = document.createElement('div');
        div.innerHTML = `
     <div class="call-history-card flex justify-between items-center bg-slate-100 rounded-xl p-4 mt-4">
                    <div>
                        <h2 class="font-semibold">${cardCategory}</h2>
                        <p class="text-gray-600">${hotlineNumber}</p>
                    </div>
                    <p class="time text-sm">${time}</p>
                </div>
    `
        callHistoryContainer.append(div);
    };

    // copy button section funtionalitiy
    if (e.target.className.includes('copy-btn')){
        console.log('copy btn clicked');
        
    }
})

// clear call history funtionalitiy
dgei('clear-btn').addEventListener('click',function (e) {
    dgei('call-history-card-container').innerHTML = ''
})


