# Donatón para animales en situación de calle

***
Este proyecto es una página web estática maquetada con HTML5 y CSS3. Está pensada para ser una Organización sin fines de lucro enfocada en la donación de dinero para los perros en situación de calle de la CDMX, México. La intención es que se actualice poco a poco agregándole dinamismo. 

De momento la única funcionalidad trabajada en JavaScript es la de validar el número de una tarjeta de crédito mediante el Algoritmo de Luhn,
el cual es un método de suma de verificación y se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc. Además, se le agregó la funcionalidad para ocultar todos los dígitos de una tarjeta excepto los últimos cuatro.
 

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

Como se mencionó previamente la intención de este proyecto es ir sumando poco a poco funcionalidad a la página. De momento, con base a los objetivos de aprendizaje de este proyecto se buscó conseguir la maquetación en HTML y CSS y la funcionalidad de la tarjeta de crédito para las donaciones. Esperando en algún futuro este proyecto pueda ser una realidad y cumpla con el propósito establecido más allá de los fines académicos. 
