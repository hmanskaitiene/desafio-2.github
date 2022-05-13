const meses = ['Enero','Febrero','Marzo'];
let acumulado_gastos = 0;
const promedio = (total,cantidad) => Number.parseFloat(total/cantidad).toFixed(2);

alert('Bienvenid@!.\nVamos a calcular el gasto promedio de nafta en el primer trimestre del año.');

let mes_actual = 0;
while(mes_actual < meses.length) {
    let valor_ingresado = prompt(`Ingrese el valor para el mes de ${meses[mes_actual]}`);

    if (isNaN(valor_ingresado) || valor_ingresado == "" || valor_ingresado === null ){
        alert(`El valor ingresado no es correcto. Por favor ingrese sólo valores numéricos.`)
        continue;
    }
    acumulado_gastos += parseFloat(valor_ingresado);
    mes_actual++;
}

alert(`El promedio del primer trimestre es $ ${promedio(acumulado_gastos,meses.length)}`);

document.write("Para calcular el valor nuevamente, refrescar la página.");