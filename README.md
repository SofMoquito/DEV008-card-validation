# Tarjeta de crédito válida

***
Este proyecto es una aplicación web que permite a cualquier usuario 
validar el número de una tarjeta de crédito mediante el Algoritmo de Luhn,
el cual es un método de suma de verificación y se utiliza para validar 
números de identificación; tales como el IMEI de los celulares, 
tarjetas de crédito, etc. Además, se le agregó la funcionalidad 
para ocultar todos los dígitos de una tarjeta excepto los últimos cuatro.
 
La intención del proyecto es que esta plataforma sea utilizada 
para cualquier sitio de compra ventas, donaciones, etcétera. 

***

## Algoritmo de Luhn

Se obtiene la reversa del número a verificar (que solamente 
contiene dígitos [0-9]); a todos los números que ocupan una 
posición par se les debe multiplicar por dos, si este número 
es mayor o igual a 10, se debe sumar los dígitos del resultado;
 el número a verificar será válido si la suma de sus dígitos 
 finales es un múltiplo de 10.


## Consideraciones técnicas

El proyecto se desarrolla utilizando HTML, CSS y Javascript. 
 Haciendo uso de un repositorio dado por Laboratoria que 
 contiene un boilerplate con pruebas unitarias para
  la validación del proyecto. 

Para la validación del proyecto se proporciona un archivo JS
 con el nombre de Validator. En el cual se incluyen dos métodos: 

    validator.isValid(): Esta función debe retornar un boolean
                         dependiendo si es válida de acuerdo al 
                         algoritmo de Luhn.

    validator.maskify(): Esta función debe retornar un string
                         donde todos menos los últimos cuatro
                         caracteres sean reemplazados por un numeral (#).

                        
***


## Consideraciones para el Usuario

El proyectó inicialmente se pensó en validar los números de una 
tarjeta de crédito sin un fin específico, para ello se agregó 
una tarjeta dinámica que recibiera los datos del formulario 
para así hacer más agradable la introducción de datos del usuario.

Con el resultado obtenido, la aplicación web puede utilizarse para 
cualquier otro proyecto en donde se necesite validar un pago, 
ya sea una tienda de ropa, de comestibles, un sitio para donaciones
a favor del cuidado de la Tierra o animales en situación de calle.

Gracias a la versatilidad que presenta puede utilizarse para cualquier cosa. 
