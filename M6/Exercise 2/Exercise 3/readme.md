(M6) Ejercicio 3. Práctica el uso de funciones.
Realiza un programa con 5 funciones y un array vacío (Global) llamado tiempo.

El HTML debe tener cuatro botones que llamen a una única función menu que envíe por parámetro la función que se quiere ejecutar.

Ejemplo:

<button onclick='menu(1)'>Registrar fecha y hora</button>
La función menu se encargará de pasar los parámetros necesarios al resto de funciones.

Crea una función que añada al array tiempo, la fecha y hora actuales.
Crea una función que reciba un valor y un array de números como parámetro.
Esta función devolverá el índice del array donde se encuentra el valor.
Si el valor no se encuentra, se devolverá -1.
Crea una función que reciba una frase como parámetro y la devuelva en minúsculas sin espacios en blanco, sin acentos y sin signos de puntuación.
Ejemplo, si la frase es:
- En Cornellà, Tània y Aina cortan roca.
La función tendrá que volver:
acornellataniaiainatallenroca
Crea una función que reciba un array y un string como parámetro
y devuelva otro array con aquellos elementos del array recibido que contengan el texto enviado.
Ejemplo: Se recibe el siguiente array:

asignaturas = [
'Historia universal',
'Historia de España',
'Geografía',
'Historia de la lengua catalana',
'Antropología',
'Inglés']

y la palabra 'Historia'

La función deberá volver el siguiente array:
[
'Historia universal',
'Historia de España',
'Historia de la lengua catalana', ]