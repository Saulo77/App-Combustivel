function combustivel(){

    var gasolina   = document.getElementById('gasolina').value;

    var etanol     = document.getElementById('etanol').value;

    var result     = document.getElementById('result');

    var maisBarato = etanol/gasolina;

    if(maisBarato >= 0,7)
    {
        result.innerHTML = 'Melhor abastercer com gasolina';

    }
    else{
        result.innerHTML ='Melhor abastecer com etanol';
    }
}