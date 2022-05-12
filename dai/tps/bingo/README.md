Bingo

Crear un servidor API que represente el juego del Bingo.
Debe tener los siguientes endpoints:

1) POST *numero_aleatorio* que recibe un valor como parámetro y devuelve un número aleatorio entre 1 y ese parámetro.
3) POST *iniciar_juego* que crea los cartones, siendo la cantidad de los mismos el número pasado como parámetro.
2) GET *obtener_carton* que devuelve un array con los números del bingo, representando un cartón del mismo. El nombre del jugador se pasa como parámetro.
4) GET *cartones* Si no se le pasan parámetros (en la URL) devuelve todos los cartones del juego. Si no, devuelve el/los cartón/es que pertecenen al usuario pasado en la URL, por ejemplo *cartones/pepe*
5) GET *sacar_numero* que saca un número del bingo y marca los cartones que lo tienen.

Dinámica del juego:

El juego comienza llamando al endpoint *iniciar_juego* que crea los cartones.
Los usuarios piden los cartones con su nombre (con *obtener_carton*).
Se sacan números con *sacar_numero* hasta que el sistema detecta qué cartón obtuvo el bingo mostrando el nombre del jugador que ganó o diciendo que quedó vacante si el cartón ganador no fué reclamado por un jugador.

Extras:
1) El cartón tiene que tener 15 números repartidos entre las 10 decenas de los 100 números posibles de manera que en cada decena (por ejemplo del 0 al 9, del 10 al 19, etc) existan 1 o 2 números.

2) Se debe crear un endpoint (*jugar_continuo*) que saca todos los números necesarios para terminar el bingo y devuelve el cartón ganador y todos los números que fueron sacados durante el juego

3) La cantidad de números de un cartón se debe poder modificar en el inicio del juego, siendo 15 el número predeterminado.

