
function formatMoney(value){
    value = value.toFixed(2) // método para formatação para 2 casas decimais
    return  '$ ' + value
}


function upDate() {

    let bill = Number(document.getElementById("yourBill").value)

    let tipPercent = document.getElementById('tipInput').value

    let split = document.getElementById('splitInput').value

   // console.log({bill,tipPercent,split})

    let tipValue = bill * (tipPercent / 100)

    let  billTotal = bill + tipValue

    let billEach =  billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML =  formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = split
    document.getElementById('billEach').innerHTML = formatMoney(billEach) 



}