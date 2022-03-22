function calcular(n1,n2){
    n1= Number(document.getElementById("n1").value)
    n2= Number(document.getElementById("n2").value)

Selector= document.getElementById("selector").value
switch(Selector){
    case'+':
    calculo=(n1+n2)
    document.getElementById("resultado").innerHTML = `O Resultado da soma de ${n1}+${n1} e = ${calculo}`
break
    case'+':
    calculo=(n1+n2)
    if(Number ==isNaN(calculo)){
        document.getElementById("resultado").innerHTML = `insira um divisivel valido!`
     } else{
    
    document.getElementById("resultado").innerHTML = `O Resultado da soma de ${n1}+${n1} e = ${calculo}`}
   break
    case'-':
    calculo=(n1+n2)
    document.getElementById("resultado").innerHTML = `O Resultado da Subtração  ${n1}-${n2} e = ${calculo}`
    break
    
    case'/':
    calculo=Math.round((n1+n2))
    document.getElementById("resultado").innerHTML = `O Resultado da divisao de ${n1}/${n1} e = ${calculo}`
break
    case '*':

    calculo=(n1+n2)
    document.getElementById("resultado").innerHTML = `O Resultado da multiplicação de ${n1}*${n1} e = ${calculo}`
    break
}
}
