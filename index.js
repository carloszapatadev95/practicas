console.log('Practicas de diagrama de flujo hola');

//  1 Desarrolle un algoritmo que permita leer dos valores distintos, determinar cual de los dos valores es el
//mayor y escribirlo. 

const Mayor_menor = () => {
let a = parseInt(prompt("ingrese valor de A"));
document.querySelector("#valor_a").innerHTML= a;

let b = parseInt(prompt("ingrese valor de b"));
document.querySelector("#valor_b").innerHTML= b;

let c = parseInt(prompt("ingrese valor de c"));
document.querySelector("#valor_c").innerHTML= c;

let inicial = "iguales vuelva a ingresar valor";
let inicial1 = "distintos cual es mayor";
if (a === b && a === c || b === c || a===c) {
    document.querySelector("#resultado").innerHTML= inicial ;
}else{
    if (a !== b && a !==c || b !== c) {
        document.querySelector("#resultado").innerHTML= inicial1;
        if (a) {
            const mayor = Math.max(a,b,c);
            document.querySelector("#mayor").innerHTML= mayor;
        }
        if (a) {
            const menor = Math.min(a,b,c);
            document.querySelector("#menor").innerHTML= menor;
        }

        document.querySelector("#sumar").innerHTML= b + a + c;
    }
     
}

}

// Desarrolle un algoritmo que realice la sumatoria de los números enteros comprendidos entre el 1 y el 10,
//es decir, 1 + 2 + 3 + …. + 10. 

const Sumar = () => {
    let d = parseInt(prompt("ingrese el valor D a sumar "));
    let e = parseInt(prompt("ingrese el valor de E = cero")) ;
    if (e === 0 && d === 10) { 
        let suma=0;
        for (let i = 1; i <= d; i++) {
             suma += i ;  
            console.log("suma de los numeros",suma);
            if (suma >= d) {
                document.querySelector("#sumar_10").innerHTML= suma;   
            }          
         }
    }else{
        document.querySelector("#sumar_10").innerHTML= "D debe valer 10 y  E debe valer cero";  
    }
 }
//sumatoria mutiplos de 5
 const Sumar_mul_5 = () => {
    let d = parseInt(prompt("ingrese los numeros a sumar"));
    let e = parseInt(prompt("ingrese el valor de E = cero")) ;
    if (e === 0 && d ===100) { 
        let suma = [];
        let suma1 = 0;
        for (let i = 5; i <= d; i += 5) {
              suma.push(i); 
              suma1 += i;
          
            console.log("los multiplos de 5:",suma);
            console.log("suma de multiplos de 5 total:",suma1);
    
                document.querySelector("#sumar_mul_5").innerHTML= suma;   
                document.querySelector("#sumar_mul_5_1").innerHTML= suma1;   
                    
         }
    }else{
        document.querySelector("#sumar_mul_5").innerHTML= "el numero maximo debe ser 100 y  E debe ser igual a cero";  
    }
 }

 //Desarrolle un algoritmo que realice la sumatoria de los números enteros pares comprendidos entre el 1
// y el 100, es decir, 2 + 4 + 6 +…. + 100. El programa deberá imprimir los números en cuestión y
// finalmente su sumatoria
const Sumar_mul_2 = () => {
    let f = parseInt(prompt("ingrese los numeros a sumar"));
    let g = parseInt(prompt("ingrese el valor de E = cero")) ;
    if (g === 0 && f ===100) { 
        let suma = [];
        let suma1= 0;
        for (let i = 2; i <= f; i += 2) {
               suma.push(i);
            
               suma1 += i;
    
            console.log("los multiplos de 2:",suma);
            console.log("suma de multiplos de 2 total:",suma1);
            
                document.querySelector("#sumar_mul_2").innerHTML= suma;   
                document.querySelector("#sumar_mul_2_1").innerHTML= suma1;   
                    
         }
    }else{
        document.querySelector("#sumar_mul_2").innerHTML= "el numero maximo debe ser 100 y  g debe ser igual a cero";  
    }
 }
 // Desarrolle un algoritmo que lea los primeros 300 números enteros y determine cuántos de ellos son
 // impares; al final deberá indicar su sumatoria. 

 const Sumar_mul_impares= () => {
    let h = parseInt(prompt("ingrese el valor de = 300"));
    let i = parseInt(prompt("ingrese el valor de E = cero")) ;
    if (i === 0 && h ===300) { 
        let suma = [];
        let suma1 = 0;
        let suma2 = 0;

        for (let i = 0; i <= h; i ++) {
               
            if (i % 2 !==0) {

                 suma.push(i);
                 suma2 = suma.length;
                
                 suma1 +=i 
                 
            }
             //suma1 = i + suma.push(i);
           
                console.log("suma de multiplos impares",suma);
                console.log("suma de multiplos impares total",suma1);
              
         
            if (suma !==h) {
                document.querySelector("#sumar_mul_impares").innerHTML= suma2;   
                document.querySelector("#sumar_mul_impares_1").innerHTML= suma1;   
            }          
         }
    }else{
        document.querySelector("#sumar_mul_impares").innerHTML= "el numero maximo debe ser 300 y  g debe ser igual a cero";  
    }
 }
 //Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.
 //Desarrolle el algoritmo correspondiente.
 const Hipotenusa = () => {
    let d = parseInt(prompt("ingrese el valor del catet A:"));
    let e = parseInt(prompt("ingrese el valor del cateto B:")) ;
    if (e !== 0 && d !== 0) { 
       let cat_a = d * d;
       let cat_b = e * e;
       let hip = Math.sqrt(cat_a + cat_b );
       console.log("la hipotenusa es:",hip);
       document.querySelector("#hipotenusa").innerHTML = hip+ " metros";
    }else{
        document.querySelector("#hipotenusa").innerHTML= "Los valores deben ser distintos de cero";  
    }
 }
 // Desarrollar un algoritmo que calcule el área de un cuadrado. 

 const Cuadrado = () => {
    let d = parseInt(prompt("ingrese el valor del lado A:"));
    let e = parseInt(prompt("ingrese el valor del lado B:")) ;
    if (e !== 0 && d !== 0) { 
       let area = d * e;
       let area1 =  "metros cuadrados";
       let area2 = (area + " "+ area1);
       console.log("el area es:",area);
       document.querySelector("#cuadrado").innerHTML = area2;
    }else{
        document.querySelector("#cuadrado").innerHTML= "Los valores deben ser distintos de cero";  
    }
 }
 //Desarrolle un algoritmo que permita determinar el área y volumen de un cilindro dado su radio (R) y
 //altura (H). 
 const Area_volumen = () => {
    let r = parseInt(prompt("ingrese el valor del radio:"));
    let h = parseInt(prompt("ingrese el valor de la altura:")) ;
    if (r !== 0 && h !== 0) { 
        let radio = r * r;
        console.log(radio);
       let area = 2 * Math.PI *r*h;
       let volumen = Math.PI * radio *h;
       console.log("el area es:",area);
       console.log("el volumen es es:",volumen);
       document.querySelector("#area").innerHTML = area + " cm cuadrados" ;
       document.querySelector("#volumen").innerHTML = volumen + " cm cubicos";
    }else{
        document.querySelector("#cuadrado").innerHTML= "Los valores deben ser distintos de cero";  
    }
 }
 //Realiza un algoritmo que le permita determinar el área de un rectángulo. 

 const Rectangulo = () => {
    let d = parseInt(prompt("ingrese el valor de la base:"));
    let e = parseInt(prompt("ingrese el valor de la altura:")) ;
    if (e !== 0 && d !== 0) { 
       let area = d * e;
       let area1 =  "metros cuadrados";
       let area2 = (area + " "+ area1);
       console.log("el area es:",area);
       document.querySelector("#rectangulo").innerHTML = area2;
    }else{
        document.querySelector("#rectangulo").innerHTML= "Los valores deben ser distintos de cero";  
    }
 }
 //Desarrolle un algoritmo que permita leer un valor cualquiera N y escriba si dicho número es par o impar. 
 const Numero_par_impar = () => {
    let j = parseInt(prompt("ingrese el valor numerico"));
    if (j !==0) {
        if (j % 2 !== 0) {
            document.querySelector("#par_impar").innerHTML = " impar "+ j;
        } else {
            document.querySelector("#par_impar").innerHTML = " par " + j; 
        }
        console.log(j);
       
    } else {
        document.querySelector("#par_impar").innerHTML = "el valor no puede ser cero";
    }
 }
  // Desarrolle un algoritmo que le permita determinar de una lista de números:
  //b.1. ¿Cuántos están entre el 50 y 75, ambos inclusive?
  //b.2. ¿Cuántos mayores de 80?
  //b.3. ¿Cuántos menores de 30?
  //El algoritmo debe finalizar cuando n (el total de números de la lista), sea igual a 0. 
  const Lista_numeros = () => {
    let a = parseInt(prompt("ingrese el maximo valor de la lista: "));
    let b = parseInt(prompt("ingrese el minim valor de la lista"));

    if (a === 100 && b === 0) {
        let numeros = [];
        let numeros_1 = [];
        let numeros_2 = [];
       
        for (let i = 50; i <= 75; i ++) {
            numeros.push(i);
            console.log(numeros);           
        }
        for (let i = 80; i <= a; i++) {
            numeros_1.push(i);
            console.log(numeros_1);   
            
        }
        for (let i = 1; i < 30; i++) {
          
            let ver =   numeros_2.push(i);
            console.log(ver);   
            
        }
        let numeros_total = (  numeros_1.length + numeros.length + numeros_2.length -2) ;
        if (numeros_total === 74) {
            document.querySelector("#lista_3").innerHTML = 0 + " Fin del algoritmo";
        }else{
            document.querySelector("#lista_3").innerHTML = "la suma no es igual a cero";
        }
        console.log("la suma total es:",numeros_total);
        document.querySelector("#lista").innerHTML = numeros.length -1;
        document.querySelector("#lista_1").innerHTML = numeros_1.length -1;
        document.querySelector("#lista_2").innerHTML = numeros_2.length;
        
        //document.querySelector("#lista_3").innerHTML = numeros_total;
    } else {

        document.querySelector("#lista").innerHTML = "lista de ser 100 y 0"
    }

  }

const abecedario = {
    "a": 97,
    "b": 98,
    "c": 99,
    "d": 100,
    "e": 101,
    "f": 102,
    "g": 103,
    "h": 104,
    "i": 105,
    "j": 106,
    "k": 107,
    "l": 108,
    "m": 109,
    "n": 110,
    "o": 111,
    "p": 112,
    "q": 113,
    "r": 114,
    "s": 115,
    "t": 116,
    "u": 117,
    "v": 118,
    "w": 119,
    "x": 120,
    "y": 121,
    "z": 122
}

 const Abc = () => {
   
const letra = "a";
const valorAscii = abecedario[letra];
console.log(`El valor ASCII de '${letra}' es ${valorAscii}`);
console.log(JSON.stringify(abecedario), j);

 }
 Abc();