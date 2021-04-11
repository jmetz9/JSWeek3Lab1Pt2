$(document).ready(function (){
    $("input#learn").on("change", calcLearn, calcTotal);
    $("input#donation").on("change", calcDono, calcTotal);
});

function calcLearn(event){
    let input = $("input#learn").val();
    let subtotal = input * $("input#learn").data("price");

    $("td#subtotal1").text(`$${subtotal}`);
    return subtotal;
}

function calcDono(event){
    let input = $("input#donation").val();
    let subtotal = input * $("input#donation").data("price");

    $("td#subtotal2").text(`$${subtotal}`);
    return subtotal;
}

function calcTotal(event){
    calcLearn()
    calcDono()

    let total = calcLearn() + calcDono()
    $("td#total").text(`$${total.toFixed(2)}`);
}


