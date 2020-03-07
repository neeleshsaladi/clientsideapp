button.addEventListener("click",Calculate);

function Calculate()
{
    let Total = parseFloat(document.getElementById("Total").value);
    let Rate = parseFloat(document.getElementById("Rate").value);
    let Tax = 0.055;
    let Tip = (Rate*Total)/100.0;
    let Gtotal=((Total+Tip+(Tax*Total)) );
    document.getElementById("Tip").innerHTML = "Tip: $" +Tip;
    document.getElementById("Gtotal").innerHTML = "GrandTotal: $" + Gtotal;
} 