send.addEventListener("click",fnc);
function fnc()
{
    let val_tovaroob = tovaroob.value;
    let val_nadbavka = nadbavka.value;
    let val_sebestoimost = sebestoimost.value;
    let val_result;
    
    val_result = val_tovaroob*(val_nadbavka/100)-val_sebestoimost;
    
    result.innerHTML = val_result;
}