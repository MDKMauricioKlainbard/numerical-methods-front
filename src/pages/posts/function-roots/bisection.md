---
layout: "../../../layouts/MarkdownTheoryLayout.astro"
author: "Mauricio Klainbard"
tags: ["Raíces de funciones"]
animation: https://www.youtube.com/embed/2XrQ_trcHhs
title: Método de Bisección
nextPage: "/posts/function-roots/regula-falsi"
titleNextPage: "Método de Regula Falsi"
---

Existe un teorema matemático que nos permite determinar la existencia de una raíz de un intervalo cerrado [a,b]. Este es el [teorema del valor intermedio](https://es.wikipedia.org/wiki/Teorema_del_valor_intermedio) para funciones continuas o TVI.

Sea f(x) una función continua en el intervalo cerrado [a,b] y λ un número comprendido entre f(a) y f(b), entonces existe al menos un número c dentro del intervalo [a,b] tal que:

$$f(c)=\lambda$$

O dicho de otra manera: como f(x) es continua en [a,b], entonces debe asumir todos los valores intermedios que existan entre f(a) y f(b), por ende para cada valor intermedio existe al menos un número c donde la función evaluada f(c) es igual a ese valor intermedio.
![Imagen representativa del TVI](https://upload.wikimedia.org/wikipedia/commons/c/ce/Intermediatevaluetheorem.png)
<br/>

Esto es particularmente útil cuando f(a) y f(b) tienen distinto signo. Si tienen distinto signo, significa que el cero es un valor intermedio y, por ende, la raíz existe en el intervalo [a,b]. De hecho, podrían existir múltiples raíces, pero solo nos interesa que exista al menos una de ellas. 

<br/>

Tenga cuidado con este teorema, ya que podría pensar que si tiene un intervalo [a,b] y f(a) tiene el mismo signo que f(b), entonces supuestamente no existe una raíz en [a,b]. Esta afirmación es falsa. Por ejemplo, si tiene la función:

$$f(x)=x^2$$

Sabrá muy bien que f(-1)=f(1)=1 y por ende, declararía que no existe una raíz en el intervalo [-1,1]. Sin embargo también sabe bien que f(0)=0, siendo 0 la raíz de la función que se encuentra dentro del intervalo [-1,1]. Analice con cuidado los teoremas para evitar llegar a conclusiones erróneas. 

<br/>

Ahora, el método de la bisección se basa en un algoritmo de iteración, esto es un algoritmo de varios pasos que se repiten hasta llegar a la solución. En realidad, todos los métodos que vamos a ver se basan en algoritmos de iteración.

<br/>

Empezamos con el intervalo cerrado [a,b], donde podemos asegurar que existe una raíz porque f(x) es continua en dicho intervalo y f(a) tiene distinto signo a f(b). Podemos expresar matemáticamente esto como:

$$f(a) f(b) <0$$

Pues un producto de dos números de distinto signo es menor a cero. Sabiendo que la raíz "c" existe dentro del [a,b], buscaremos reducir el intervalo a un tamaño lo suficientemente pequeño como para hallar la raíz. Empezaremos tomando el punto medio del intervalo:

$$c=\frac{a+b}{2}$$

Nos preguntamos si este punto medio es la raíz de la función:
$$f(c)=0$$
Si lo anterior no es cierto, entonces usaremos el número "c" para armar un nuevo intervalo más pequeño que el original. Debemos asegurarnos que este nuevo intervalo siga encerrando a la raíz de la función; esto se resuelve considerando el signo de f(a), f(b) y f(c). Si f(a) y f(c) tienen distinto signo:
$$f(a) f(c) < 0$$
Entonces nuestro nuevo intervalo será [a,c]. Si en cambio f(a) y f(c) tienen igual signo, entonces f(c) y f(b) tendrán distinto signo:
$$f(c) f(b) <0$$
Por ende, nuestro nuevo intervalo deberá ser [b,c]. Repetimos nuevamente los mismos pasos utilizando el nuevo intervalo y así hasta llegar a la solución.

<br/>

**PSEUDOALGORITMO**:
<br/>
Paso 1: Introduzca números "a" y "b". Si f(a)=0 se retorna "a" como solución. Si f(b)=0 se retorna "b" como solución.
<br/>
Paso 2: Es f(a)*f(b) < 0 ?
Si lo es, comienza el algoritmo. Si no lo es, se cancela el algoritmo.
<br/>
Paso 3: INICIA BUCLE "MIENTRAS / WHILE"
<br/>
**INICIO BUCLE**
<br/>
c = (a+b)/2
<br/>
Es |f(c)|< tolerancia ? Si lo es, se detiene el algoritmo y se retorna c como solución. Si no lo es, se continúa con el algoritmo.
<br/>
f(a)*f(c)< 0 ? Si lo es, entonces a=a y b=c: [a,c]. Si no lo es, entonces a=c y b=b: [c,b]
<br/>
**CIERRE BUCLE**
Paso 4: Se retorna la última aproximación xr calculada.


