---
layout: "../../../layouts/MarkdownTheoryLayout.astro"
author: "Mauricio Klainbard"
tags: ["Raíces de funciones"]
animation: https://www.youtube.com/embed/IWt9uuycKlM
title: Método de Punto Fijo
nextPage: "/posts/function-roots/error-criteria"
titleNextPage: "Criterios de error"
---

Es posible que este método no lo entienda a la primera lectura, pero no se preocupe, yo tampoco lo entiendo.

<br/>

Es broma. Aunque en realidad, el método de punto fijo parte de un teorema un poco más avanzado que el teorema visto anteriormente (TVI), así que aquí solo nos centraremos más en lo práctico. Considere el siguiente problema:
$$F(x_s)=0$$
Donde x<sub>s</sub> es la solución de la ecuación. Por supuesto, hallar x<sub>s</sub> es parte del problema. Sin embargo, primero haremos un pequeño arreglo; multiplicamos por λ, una constante distinta de cero:
$$λ[F(x_s)]=0$$
El problema no ha cambiado, por lo que parece incoherente realizar estos arreglos, pero usted debe confiar en mí cuando le digo que, en definitiva, vamos a llegar a un resultado interesante. Ahora, sumemos x<sub>s</sub> a ambos miembros:
$$x_s+λ[F(x_s)]=x_s$$
Ahora declaremos una nueva función G(x) que tendrá la misma estructura que el lado izquierdo de la anterior igualdad:
$$G(x)=x+λ[F(x)]$$
Ahora, el problema inicial F(x<sub>s</sub>)=0 es equivalente a resolver la siguiente ecuación:
$$G(x)=x$$
Resolver la anterior ecuación significa hallar x<sub>s</sub>, recordemos que:
$$G(x_s)=x_s+λ[F(x_s)]=x_s$$

Ahora, como a priori no conocemos la solución x<sub>s</sub>, supongamos que arrojamos cualquier número x<sub>r</sub> a la ecuación. Como x<sub>r</sub> no es solución, el resultado será otro número al que llamaremos x<sub>r+1</sub>:
$$G(x_r)=x_{r+1}$$
¿Para qué hicimos todo esto? Pues resulta que si se cumple una determinada condición con la función G(x), x<sub>r+1</sub> estará más cerca de la solución x<sub>s</sub>. De hecho, si esa condición se sigue cumpliendo y evaluamos G(x<sub>r+1</sub>), tendremos x<sub>r+2</sub>, ¡que estará todavía más cerca de la solución! En otras palabras, nuestra regla de recurrencia para hallar la raíz será la misma función G(x). ¡Por eso dimos tantas vueltas!



<br>

Bueno, pero, ¿cuál es esa mágica condición? Para entenderla, tomaremos la expresión G(x<sub>r</sub>)=x<sub>r+1</sub> y restaremos a ambos miembros de la igualdad G(x<sub>s</sub>):
$$G(x_r)-G(x_s)=x_{r+1}-G(x_s)$$
Pero como G(x<sub>s</sub>)=x<sub>s</sub>, entonces podemos escribir:
$$G(x_r)-G(x_s)=x_{r+1}-x_s$$

Ahora asumiremos que la función G(x) cumple ciertas condiciones: es continua en el intervalo [x<sub>s</sub>,x<sub>r</sub>] y derivable en el intervalo (x<sub>s</sub>,x<sub>r</sub>). Esto nos permite aplicar el [**teorema del valor medio**](https://es.wikipedia.org/wiki/Teorema_del_valor_medio):
$$G'(c)=\frac{G(x_r)-G(x_s)}{x_r-x_s}$$
$$c \in (x_s, x_r)$$
Si despejamos G(x<sub>r</sub>)-G(x<sub>s</sub>):
$$G(x_r)-G(x_s)=G'(c)(x_r-x_s)$$
Podemos reemplazar este resultado en la anterior igualdad G(x<sub>r</sub>)-G(x<sub>s</sub>)=x<sub>r+1</sub>-x<sub>s</sub>:
$$G'(c)(x_r-x_s)=x_{r+1}-x_s$$
Ahora tomaremos las magnitudes de ambos miembros de la igualdad:
$$|G'(c)||x_r-x_s|=|x_{r+1}-x_s|$$
Llamaremos a |x<sub>r</sub>-x<sub>s</sub>| como E<sub>r</sub>, el error absoluto que hay entre la aproximación inicial y la solución real, y a |x<sub>r+1</sub>-x<sub>s</sub>| como E<sub>r+1</sub>, como el error absoluto que hay entre la siguiente aproximación calculada y la solución real.
$$|G'(c)|E_r=E_{r+1}$$
Observe que si |G'(c)| < 1, entonces el error absoluto en la siguiente aproximación disminuye con respecto al valor absoluto de la aproximación actual. Esta era la condición que estabamos buscando. Ahora, vamos a analizar la derivada de G(x):
$$G'(x)=1+λF'(x)$$
La razón de haber hecho la multiplicación por λ, es que esta constante no afecta en nada al problema original F(x)=C, pero si nos permite escoger una constante adecuada para intentar que el valor absoluto de la derivada G(x), en un vecindario cercano a la solución x<sub>s</sub>, sea justamente menor a uno. Decimos vecindario cercano porque no podemos predecir quién será exactamente el número c que está entre x<sub>s</sub> y x<sub>r</sub>. Además, este número c cambia en cada paso (cuando hagamos G(x<sub>r+1</sub>), c estará entre x<sub>s</sub> y x<sub>r+1</sub>).
$$|1+\lambda F'(x)|<1$$
La elección de la constante es arbitraria y queda a su criterio. Como consejo: antes de usar este método, conviene conocer la forma de la función F(x) para escoger una constante adecuada.

<br/>

Hallar la solución del problema G(x)=x también puede ser visto como hallar la intersección entre la recta identidad f(x)=x y la función G(x) (sin importar la elección del parámetro λ, recuerde que este parámetro no modifica la naturaleza del problema, solo nos ayuda con la convergencia del método de punto fijo).

<br/>

**PSEUDOCÓDIGO**
<br/>
Paso 1: Introduzca el número x<sub>r</sub> y el parámetro λ. Si F(x<sub>r</sub>)=0 se retorna x<sub>r</sub> como solución.
<br/>
Paso 2: INICIA BUCLE "MIENTRAS / WHILE"
<br/>
**INICIO BUCLE**
<br/>
x<sub>r+1</sub>=x<sub>r</sub>+λF(x<sub>r</sub>)
<br/>
Es |F(x<sub>r+1</sub>)|< tolerancia ? Si lo es, se detiene el algoritmo y se retorna x<sub>r+1</sub> como solución. Si no lo es, se continúa con el algoritmo.
<br/>
x<sub>r</sub>=x<sub>r+1</sub>
<br/>
**CIERRE BUCLE**
<br/>
Paso 3: Se retorna la última aproximación x<sub>r+1</sub> calculada.

<br/>

En realidad, λ no necesita ser constante. Puede reajustarse en cada iteración para intentar asegurar la convergencia del método. Se puede hacer la elección de:
$$\lambda = -\frac{1}{F'(x_r)}$$
Y eso deriva al [**método de Newton Raphson**](/posts/function-roots/newton-raphson):
$$x_{r+1}=x_r-\frac{F(x_r)}{F'(x_r)}$$
Se puede ver al método de Newton Raphson como un caso especial del método de punto fijo.