function fibionacci(num){
    let suc = [];
    for(i=0; i<num; i++){
        if(i==0){
            suc.push(0);
        }else if(i==1){
            suc.push(1);
        } else{
            suc.push(suc[i-1] + suc[i-2]);
        }
    }
    return suc;
}

const fibInput = document.getElementById("fibionacci-input");
const fibBtn = document.getElementById("fibionacci-btn");

fibBtn.addEventListener("click", function(){
    const fibNum = fibInput.value;
    if(isNaN(fibNum)){
        alertSweet("Debes ingresar un número", "error");
    }else if(fibNum <= 0){
        alertSweet("Por favor, ingresa un número natural", "error");
    } else {
        const result = fibionacci(fibNum);
        alertSweet(`La sucesión de Fibonacci para ${fibNum} es: ${result.join(", ")}`, "success");
    }
})

function alertSweet(text, type){
    if(type == "error"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: text,
        })
    } else if(type == "success"){
        Swal.fire({
            title: "Resultado",
            text: text,
        })
    }
}