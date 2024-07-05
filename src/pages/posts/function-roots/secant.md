---
layout: "../../../layouts/MarkdownTheoryLayout.astro"
author: "Mauricio Klainbard"
tags: ["Raíces de funciones"]
animation: https://www.youtube.com/embed/LYkdLqrCetY
title: Método de la secante  
nextPage: "/posts/function-roots/newton-raphson"
titleNextPage: "Método de Newton Raphson"
---

A partir de aquí, empezamos a ver métodos abiertos, por lo que dejamos de lado el teorema de valor intermedio. Ya no tenemos un intervalo donde podamos asegurar la existencia de la raíz, sino un conjunto de aproximaciones iniciales que nos sirvan para encontrar la raíz.

<br/>

El método de la secante es similar al [**método de Newton-Raphson**](/posts/function-roots/newton-raphson), por lo que explicaremos aquí los principios de ambos métodos. Le recomiendo repasar la derivada de funciones de una variable en caso de que no tenga fresco el tema.

<br/>

Si bien recuerda, la derivada de una función f(x) evaluada en un punto x=x<sub>r</sub>, f'(x<sub>r</sub>), es igual a la pendiente de la recta tangente a la función en el punto (x<sub>r</sub>, f(x<sub>r</sub>)). Además de ser la pendiente de la recta tangente, también es la tasa de cambio instantánea de la función en x<sub>r</sub>.

$$f'(x_r)=\lim\limits_{x \rarr x_r}\frac{f(x)-f(x_r)}{x-x_r}$$

Supóngase por un momento que la función f(x) es positiva en x=x<sub>r</sub>. Si la función es positiva, ¿en qué dirección debería moverse usted para hallar un cero? ¡En la dirección para donde decrezca la función, por supuesto! ¿Pero cómo puede predecir en qué dirección va a decrecer la función, cuando puede moverse para la derecha o para la izquierda? *Ding ding*, si no pudo responder a la pregunta, ha perdido el millón de dólares. ¡Es el signo de la derivada el que le indica para donde debe moverse! Si f(x<sub>r</sub>) es positivo y la derivada f'(x<sub>r</sub>) es positiva, tendríamos el siguiente caso como ejemplo:
![Ejemplo de derivada](../../../../public/example-derivate.png)
La pendiente de la recta tangente es f'(x<sub>r</sub>), la cual es positiva, por ende debemos movernos hacia la izquierda de x<sub>r</sub>, en el sentido decreciente de **x** para decrecer en los valores de la función. Si f'(x<sub>r</sub>) fuera negativa, la recta tangente estaría inclinada al revés y deberíamos movernos a la derecha de x<sub>r</sub>, en el sentido creciente de **x** para decrecer en los valores de la función. Le invito a hacer usted mismo los gráficos para los cuatro casos y dictaminar en que dirección debe moverse en cada caso para hallar un cero de la función:
$$f(x_r)>0, f'(x_r)>0$$
$$f(x_r)>0, f'(x_r)<0$$
$$f(x_r)<0,f'(x_r)>0$$
$$f(x_r)<0, f'(x_r)<0$$
La combinación del signo de f(x<sub>r</sub>) y f'(x<sub>r</sub>) siempre nos dice en que dirección debemos movernos si queremos hallar una raíz. Sin embargo, la pregunta que resta es: ¿cuántas unidades nos movemos? ¿Un paso? ¿Dos pasos? ¿Ochocientos cuarenta mil pasos? Lo cierto es que no requerimos decidir arbitrariamete cuantos pasos movernos, podemos usar directamente el cero de la recta tangente para aproximarnos a la raíz de la función. Si hizo los gráficos de los anteriores cuatro casos, observe que el cero de la recta tangente siempre está en la misma dirección a la que debemos movernos para hallar un cero de la función. Usemos la fórmula punto-pendiente para hallar la ecuación de la recta tangente:
$$y-y_1=m(x-x_1)$$
Recordemos que "m" es la pendiente de la recta, entonces:
$$y=T(x), y_1=f(x_r), m=f'(x_r), x_1=x_r$$
Sin embargo, asumamos que no conocemos el valor de f'(x<sub>r</sub>), ya sea porque resulta díficil hallar la expresión de la derivada o alguna otra razón. Si usted recuerda, el valor de la derivada era:
$$f'(x_r)=\lim\limits_{x \rarr x_r}\frac{f(x)-f(x_r)}{x-x_r}$$
Aún podemos aproximar el valor de la derivada sacando el límite y utilizando diferencias finitas, tratando de que sean lo más pequeñas posibles. Como las diferencias son finitas, el valor **x** del límite asume un valor cercano a x<sub>r</sub>, llamemosle "x<sub>r+1</sub>":
$$f'(x_r) \approx \frac{f(x_{r+1})-f(x_r)}{x_{r+1}-x_r}$$
Esto no es más que la pendiente de la recta secante que pasa por los puntos (x<sub>r</sub>,f(x<sub>r</sub>)) y (x<sub>r+1</sub>, f(x<sub>r+1</sub>)) y es aproximadamente igual a la pendiente de la recta tangente. De aquí el nombre del "método de la secante". Reemplazamos y=T(x) por y=S(x):
$$y=S(x), y_1=f(x_r), m=\frac{f(x_{r+1})-f(x_r)}{x_{r+1}-x_r}, x_1=x_r$$
$$S(x)-f(x_r)=\frac{f(x_{r+1})-f(x_r)}{x_{r+1}-x_r}(x-x_r)$$
$$S(x_{r+2})=0 \implies -f(x_r)=\frac{f(x_{r+1})-f(x_r)}{x_{r+1}-x_r}(x_{r+2}-x_r)$$

Despejando x<sub>r+2</sub>:
$$x_{r+2}=x_r-f(x_r)\frac{x_{r+1}-x_r}{f(x_{r+1})-f(x_r)}$$
Esta será nuestra regla de recurrencia para el método de la secante. Fíjese que requerimos de dos aproximaciones iniciales: x<sub>r</sub> y x<sub>r+1</sub>. Por otro lado, este método tiende a ser más rápido que los anteriores dos métodos cerrados que hemos visto, es decir que puede resolver un mismo problema en menor cantidad de pasos, sin embargo, puede diverger. La divergencia del método significa que en vez de acercarse a la solución, se aleja cada vez más. Un caso típico de divergencia ocurre cuando f(x<sub>r+1</sub>)-f(x<sub>r</sub>)=0, esto resulta en una división por cero, algo imposible. También puede ocurrir cuando la diferencia no es cero, pero tiende a cero, lo que resultaría en que la magnitud de x<sub>r+2</sub> tienda a infinito. Un ejemplo de una función típica que pueda causar este problema es la siguiente:

$$f(x)=\frac{1}{x}-1$$

La raíz de esta función es fácil de calcular a mano, es x<sub>s</sub>=1. Sin embargo, si se aplica el método de la secante utilizando como aproximaciones iniciales: x<sub>r</sub>=10 y x<sub>r+1</sub>=11, nuestra siguiente aproximación x<sub>r+2</sub> sería:

$$x_{r+2}=10-\left(\frac{1}{10} - 1\right)\left(\frac{11-10}{\left(\frac{1}{11} - 1\right)-\left(\frac{1}{10} - 1\right)}\right)=-89$$

Un valor que se aleja considerablemente de la raíz real.
![Ejemplo de recta secante](../../../../public/example-secant.png)

La regla para actualizar las variables en cada nuevo paso son sencillas y no se debe seguir ningún criterio específico, simplemente x<sub>r</sub> pasa a ser x<sub>r+1</sub> y x<sub>r+1</sub> pasa a ser x<sub>r+2</sub>:
$$x_r=x_{r+1}$$
$$x_{r+1}=x_{r+2}$$

**PSEUDOCÓDIGO**
<br/>
Paso 1: Introduzca números x<sub>r</sub> y x<sub>r+1</sub>. Si f(x<sub>r</sub>)=0 se retorna x<sub>r</sub> como solución. Si f(x<sub>r+1</sub>)=0 se retorna x<sub>r+1</sub> como solución.
<br/>
Paso 2: INICIA BUCLE "MIENTRAS / WHILE"
<br/>
**INICIO BUCLE**
<br/>
**CONDICIONAL (Si f(x<sub>r+1</sub>)-f(x<sub>r</sub>) = 0)** {
    <br/>
    No se puede dividir por cero. Detén el algoritmo y retorna la última aproximación que hayas calculado, si es que se ha calculado una.
    <br/>
}
<br/>
x<sub>r+2</sub>=x<sub>r</sub>-f(x<sub>r</sub>)(x<sub>r+1</sub>-x<sub>r</sub>)/(f(x<sub>r+1</sub>)-f(x<sub>r</sub>))
<br/>
Es |f(x<sub>r+2</sub>)|< tolerancia ? Si lo es, se detiene el algoritmo y se retorna xr como solución. Si no lo es, se continúa con el algoritmo.
<br/>
x<sub>r</sub>=x<sub>r+1</sub>
<br/>
x<sub>r+1</sub>=x<sub>r+2</sub>
<br/>
**CIERRE BUCLE**
<br/>
Paso 3: Se retorna la última aproximación x<sub>r+2</sub> calculada.

<br/>

El [**método de Regula Falsi**](/posts/function-roots/regula-falsi) puede ser visto como un punto intermedio entre el [**método de la bisección**](/posts/function-roots/bisection) y el método de la secante.