El usuario/a introduce un año “a” por teclado
y el programa llama a un método que indique si el año es bisiesto o no.


PASOS:

html

introducir por input el año


js

funcion bisiesto

entramos en condicional si el residuo del año introducido divido por 400
es igual a 0 --->es bisiesto
Para saber si un año es bisiesto se puede aplicar la formula, la cual dice que un año es bisiesto si es divisible por cuatro, excepto los principios de año (los divisibles por 100), que para ser bisiestos deben de ser divisibles también por 400.

(((a % 4 == 0) && ((a % 100 != 0) || (a% 400 == 0)))
