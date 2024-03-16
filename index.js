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


let inicial1 = "distintos";

if (a === b || a === c || b === c ) {
    console.log('jodete');
   document.querySelector("#resultado").innerHTML = ' iguales en 2 de las variables';
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
    let d = parseInt(prompt("ingrese el valor debe ser = 10"));
    let e = parseInt(prompt("ingrese el valor debe ser = 0")) ;
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
    let f = parseInt(prompt("ingrese el numeros maximo a sumar = 100"));
    let g = parseInt(prompt("ingrese el valor de E = 0")) ;
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
    let i = parseInt(prompt("ingrese el valor de E = 0")) ;
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
    let d = parseInt(prompt("ingrese el valor del cateto A:"));
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
    let a = parseInt(prompt("ingrese el maximo valor de la lista = 100: "));
    let b = parseInt(prompt("ingrese el minimo valor de la lista = 0"));

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

        document.querySelector("#lista").innerHTML = "los valores de la lista son incorrectos"
    }

  }

 const Abc = () => {
   
const letra = prompt('ingrese caracter');
if (letra == null) {
    document.querySelector("#caracter").innerHTML =' no ingreso caracter';
}else if (letra === letra.toLowerCase()) {
    //const caracter = letra.toLowerCase()
    console.log('letra minuscula', letra);
    document.querySelector("#caracter").innerHTML = letra + ' en minuscula';
} else if(letra === letra.toUpperCase()) {
    //const caracter1 = letra.toUpperCase()
    console.log('letra mayuscula', letra);
    document.querySelector("#caracter").innerHTML = letra + ' en mayuscula';
}

let valor_decimal = letra.charCodeAt(0);
document.querySelector("#decimal").innerHTML = valor_decimal;
console.log('valor decimal', valor_decimal);
let valor_hexadecimal = valor_decimal.toString(16);
document.querySelector("#hexadecimal").innerHTML = valor_hexadecimal;
console.log( 'valor hexadecimal',valor_hexadecimal);
let valor_optal = valor_decimal.toString(8)
console.log('valor optal',  valor_optal);
document.querySelector("#optal").innerHTML = valor_optal;
let valor_binario = valor_decimal.toString(2);
console.log( 'valor binario' ,valor_binario);
document.querySelector("#binario").innerHTML = valor_binario;

//esta es otra manera de optener el valor binario de un decimal
//let decimal = parseInt(prompt('ingresa el valor numerico:'))
//let residuos = [];
//
//while (decimal > 0) {
//    residuos.push(decimal % 2);
//    decimal = Math.floor(decimal/2);
//}
//let binario1 = residuos.reverse().join("");
//console.log('valor binario del decimal aregado ',binario1);
let valor_hexadecimal0 = prompt('ingrese el valor hexadecimal');
 let valor_decimal1 = parseInt(valor_hexadecimal0, 16);
 console.log('el valor decimal es: ', valor_decimal1);
    

 }
// Desarrolle un algoritmo que permita convertir calificaciones numéricas, según la siguiente tabla:
// A = 19 y 20, B =16, 17 y 18, C = 13, 14 y 15, D = 10, 11 y 12, E = 1 hasta el 9. Se asume que la nota está
//comprendida entre 1 y 20. 
//Realiza el mismo algoritmo utilizando Mientras (While); también hazlo utilizando En Caso (Case)
const Notas = () => {
    let caracter = ['A','B','C','D','E'];
    let x = parseInt(prompt('las notas van desde el 0 hasta el 20'));
    
  
    if (x === 19 || x === 20) {
           
        document.querySelector("#nota").innerHTML = caracter[0];
        document.querySelector("#nota_caracter").innerHTML = x;
    } else if (x === 16 || x === 17 || x ===18)  {
           
        document.querySelector("#nota").innerHTML = caracter[1];
        document.querySelector("#nota_caracter").innerHTML = x;
    }else if (x === 13 || x === 14 || x ===15)  {
           
        document.querySelector("#nota").innerHTML = caracter[2];
        document.querySelector("#nota_caracter").innerHTML = x;
    }else if (x === 10 || x === 11 || x ===12)  {
           
        document.querySelector("#nota").innerHTML = caracter[3];
        document.querySelector("#nota_caracter").innerHTML = x;
    }else if (x <= 9)  {
           
        document.querySelector("#nota").innerHTML = caracter[4];
        document.querySelector("#nota_caracter").innerHTML = x;
    }

     else {
        document.querySelector("#nota").innerHTML = 'caracter invalido';
    }
 
    
   
}
// Desarrolle un algoritmo que permita convertir calificaciones numéricas, según la siguiente tabla:
// A = 19 y 20, B =16, 17 y 18, C = 13, 14 y 15, D = 10, 11 y 12, E = 1 hasta el 9. Se asume que la nota está
//comprendida entre 1 y 20. 
//Realiza el mismo algoritmo utilizando Mientras (While); también hazlo utilizando En Caso (Case)
const notas_while = () => {
    let caracter = ['A','B','C','D','E'];
    let notas = parseInt(prompt('ingresa valor'));

    if (!notas || notas >= 21) {
        document.querySelector("#notas_uno").innerHTML = 'caracter u valor incorrecto';
    } else {
    while (notas > 0) {
           notas--;
          let notas_uno = notas
           if (notas === 20||notas === 19 || notas === 18) {
            console.log('valor conseguido',notas_uno);
            document.querySelector("#notas_caracter").innerHTML = caracter[0];
            document.querySelector("#notas_uno").innerHTML = notas_uno + 1;
            break;
           } else if (notas === 17 ||notas ===  16 || notas === 15) {
            console.log('valor conseguido',notas_uno);
            document.querySelector("#notas_caracter").innerHTML = caracter[1];
            document.querySelector("#notas_uno").innerHTML = notas_uno + 1;
            break;
           }else if (notas === 14 || notas === 13 || notas === 12) {
            console.log('valor conseguido',notas_uno);
            document.querySelector("#notas_caracter").innerHTML = caracter[2];
            document.querySelector("#notas_uno").innerHTML = notas_uno +1;
            break;
           }else if (notas === 11 || notas === 10 || notas === 9) {
            console.log('valor conseguido',notas_uno);
            document.querySelector("#notas_caracter").innerHTML = caracter[3];
            document.querySelector("#notas_uno").innerHTML = notas_uno +1;
            break;
           }else{
            if (notas <= 8) {
                
                console.log('valor conseguido',notas_uno);
                document.querySelector("#notas_caracter").innerHTML = caracter[4];
                document.querySelector("#notas_uno").innerHTML = notas_uno + 1;
                break;
                
            }
           }
       
           
        
    } 
   
    }
}
const notas_Swicht = () => {
    let caracter1 = ['A','B','C','D','E'];
    let nota_swicht = parseInt(prompt('ingrese la nota'))

    switch (nota_swicht) {
        case 19:
        case 20:
            console.log(nota_swicht);
            document.querySelector("#caso1").innerHTML = caracter1[0];
            document.querySelector("#nota_del_caso1").innerHTML = nota_swicht;
            
            break;
            case 16:
            case 17:
            case 18:    
                    console.log(nota_swicht);
                document.querySelector("#caso1").innerHTML = caracter1[1];
                document.querySelector("#nota_del_caso1").innerHTML = nota_swicht;
        
                
            break
            case 13:
            case 14:
            case 15:
                    console.log(nota_swicht);
                    document.querySelector("#caso1").innerHTML = caracter1[2];
                    document.querySelector("#nota_del_caso").innerHTML = nota_swicht;
            break;
            case 10:
            case 11:
            case 12:
                console.log(nota_swicht);
                document.querySelector("#caso1").innerHTML = caracter1[3];
                document.querySelector("#nota_del_caso1").innerHTML = nota_swicht;
        break;
        case 9:
        case 8:
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            console.log(nota_swicht);
            document.querySelector("#caso1").innerHTML = caracter1[4];
            document.querySelector("#nota_del_caso1").innerHTML = nota_swicht;
    break;
        default:
            console.log(nota_swicht);
                document.querySelector("#caso1").innerHTML = 'caracter u valor incorrecto';
               
            break;
    
  }   
}