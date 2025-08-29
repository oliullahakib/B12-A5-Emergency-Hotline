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
    
    if (e.target.className.includes('call-btn')) {
        //  verify part 
        let coinQuantity = getElemValueAsNum('coin-quantity');
        if (coinQuantity < 20) {
            alert("You don't have Enough coin. Need at least 20 coins to make a call.");
            return;
        }
        let callButton = e.target;
        let hotlineNumber = callButton.parentNode.parentNode.querySelector('.hotline-number').innerText;
        let cardCategory = callButton.parentNode.parentNode.querySelector('.card-category').innerText;
        // show alert part 
        alert(`Calling ${cardCategory} ${hotlineNumber}...`)

        //   coin reduce part 
        let newCoinQuantity = coinQuantity - 20;
        dgei('coin-quantity').innerText = newCoinQuantity;


        // add to call history part 
        let time = new Date().toLocaleTimeString(undefined, { hour12: true });
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


})

// copy button funtionalitiy
dgei('card-container').addEventListener("click", function (e) {
    if (e.target.className.includes('copy-btn')) {
        let callButton = e.target;
        let hotlineNumber = callButton.parentNode.parentNode.querySelector('.hotline-number').innerText;
        alert(`Number Copied ${hotlineNumber} `)
        navigator.clipboard.writeText(hotlineNumber);
        let copyCount = getElemValueAsNum("copy-count");
        let newCopyCount = copyCount + 1;
        dgei("copy-count").innerText = newCopyCount;
    }
})

// clear call history funtionalitiy
dgei('clear-btn').addEventListener('click', function (e) {
    dgei('call-history-card-container').innerHTML = ''
})


