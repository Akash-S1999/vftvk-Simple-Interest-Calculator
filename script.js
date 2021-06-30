function rateValue(val){
	document.getElementById('rateInput').value=val;

}

function calculate(){
    amount = document.getElementById('amount').value;
    rateInput= document.getElementById('rateInput').value;
    selectId=document.getElementById('selectId').value;
    resultant=document.getElementById('resultant');

    var today= new Date();
    var annee = today.getFullYear();
    var result1=((annee=+selectId));  
    var today2=new Date();
    var annee2 =today2.getFullYear();
    var result2=result1+annee2;

    document.getElementById("resultant").innerHTML = `If you deposit <mark>${amount}</mark>,<br>at an interest rate of 
    <mark>${rateInput}%</mark>.<br>You will receive an amount of <mark>${(amount*rateInput*selectId/100)}</mark>,<br>in the year <mark>${result2}</mark><br>`;
}