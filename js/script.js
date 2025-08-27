// resuable function 
function dgei(id) {
    return document.getElementById(id);
}
function getElemValueAsNum(id) {
    return Number(dgei(id).innerText)
}
dgei('card-container').addEventListener("click", function (e) {
    e.preventDefault()
    if(e.target.className.includes('fa-heart')){
       let heartCount = getElemValueAsNum('heart-count')
      let totalHeartCount = heartCount + 1;
        dgei('heart-count').innerText=totalHeartCount;
    };
    
})
