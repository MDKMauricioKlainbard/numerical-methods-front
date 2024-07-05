---
layout: "../../../layouts/MarkdownTheoryLayout.astro"
author: "Mauricio Klainbard"
tags: ["Raíces de funciones"]
animation: https://www.youtube.com/embed/VqMYLQs_1XI
title: Método de Regula Falsi
nextPage: "/posts/function-roots/secant"
titleNextPage: "Método de Secante"
---

Los principios del método de Regula-Falsi se basan en los mismos principios del [**método de la bisección**](/posts/function-roots/bisection). Nos basamos en el teorema del valor intermedio de funciones continuas y proponemos un intervalo [a,b] donde podamos asegurar la existencia de una raíz de la función. La única diferencia es la "regla de recurrencia", llamamos regla de recurrencia al cálculo matemático repetido que usamos para hallar nuevas aproximaciones a la raíz. En el caso de la bisección, la regla de recurrencia era:
$$x_{r}=\frac{a+b}{2}$$
Para el método de Regula-Falsi, en cambio, trazamos una recta secante que pasa por los puntos (a, f(a)) y (b,f(b)):
![Imagen de la recta secante](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgudHVppGgSkEr4kBLHtmiUZC0Ka2_WHU62pYx5D9XTmi9yu2mc-ZxNxLaZVrZQkOeT2REXBzvB2YifUH3gDGwUeWhdb3hGFvb502XtlWWbi4xRLfXB-ZgdGKgJ4D695jG3Aefx7l26ZxA/s1600/metodo+regla+falsa.jpg)
Mientras más pequeño sea el intervalo [a,b], más parecida será la recta secante a la función dentro de ese intervalo, por ello se puede justificar que la raíz de la recta secante es una buena aproximación a la raíz de la función. Llamaremos a la recta secante como S(x). De hecho, podemos hallar su expresión matemática utilizando la fórmula punto-pendiente:
$$y-y_1=\frac{y_2-y_1}{x_2-x_1}(x-x_1)$$
Siendo:
$$y=S(x), y_1=f(a),y_2=f(b), x_1=a, x_2=b$$
$$S(x)-f(a)=\frac{f(b)-f(a)}{b-a}(x-a)$$
Buscamos el cero de la recta tangente al cual llamaremos "**x<sub>r</sub>**", es decir:
$$S(x_r)=0 \implies -f(a)=\frac{f(b)-f(a)}{b-a}(x_r-a)$$
Despejando **x<sub>r</sub>**:
$$x_r=a-f(a)\frac{b-a}{f(b)-f(a)}$$
Esta será nuestra regla de recurrencia para hallar la raíz de la función. La forma en la que se actualiza el intervalo en cada paso es la misma forma que teníamos con el [**método de la bisección**](/posts/function-roots/bisection).

<br/>

**PSEUDOCÓDIGO**
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
x<sub>r</sub>=a-f(a)(b-a)/(f(b)-f(a))
<br/>
Es |f(x<sub>r</sub>)|< tolerancia ? Si lo es, se detiene el algoritmo y se retorna x<sub>r</sub> como solución. Si no lo es, se continúa con el algoritmo.
<br/>
f(a)*f(x<sub>r</sub>)< 0 ? Si lo es, entonces a=a y b=x<sub>r</sub>: [a,x<sub>r</sub>]. Si no lo es, entonces a=x<sub>r</sub> y b=b: [c,x<sub>r</sub>]
<br/>
**CIERRE BUCLE**
<br/>
Paso 4: Se retorna la última aproximación x<sub>r</sub> calculada.
