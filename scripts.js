const prompt = require("prompt-sync")();

function solicitaTempreatura(){
    let celsius = null;
    let validaInput = false;

    while(!validaInput){
        const entradaUsuario = prompt("Ingrese temperatura en grados Celsius: ");

        const numero = parseFloat(entradaUsuario);
        
        if (!isNaN(numero)) {
            celsius = numero;
            validaInput = true;
        } else {
            console.log
            (`❌ "${entradaUsuario}" no es un número válido. Intenta de nuevo.`);
        }

        
       
    }
    return celsius;

}

function pasarAKelvin(celsius) {
    return celsius + 273.15;
}

function pasarAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


const celsius = solicitaTempreatura();

if (celsius !== null) {
    const kelvin = pasarAKelvin(celsius);
    const fahrenheit = pasarAFahrenheit(celsius);
    
    console.log(`\n📝 Grados Celsius: ${celsius}°C`);
    console.log(`🔬 Grados Kelvin: ${kelvin} K`);
    console.log(`🔥 Grados Fahrenheit: ${fahrenheit}°F`);
}