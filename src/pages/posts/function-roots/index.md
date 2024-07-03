---
layout: "../../../layouts/Layout.astro"
---

Los estudiantes de ingeniería están acostumbrados a lidiar con el problema de hallar las soluciones de distintas ecuaciones. Cualquier estudiante de esta carrera debería saber como resolver la siguiente ecuación:

$$x^2-1=0$$

Y en caso de que usted no lo sepa, considere un milagro el hecho de estar dentro de la carrera. Ahora, hallar las soluciones de la anterior ecuación también puede ser traducido en hallar los ceros o las raíces de la siguiente función:

$$f(x)=x^2+1$$

El problema se puede expresar de forma genérica como:

$$f(x_s)=0$$

En ingeniería surgen distintos problemas donde se buscan hallar las raíces de distintas funciones. Los estudiantes ya están acostumbrados a encontrar las raíces de ecuaciones lineales, cuadráticas, cúbicas, entre otras. Sin embargo, supóngase que usted se sienta a rendir un parcial y se encuentra con que la primera consigna es hallar una raíz de la siguiente función:

$$f(x)=\cos^3(x)+x^5\arctan(\sqrt{x})$$

Podría intentar despejar la incógnita **x**, pero probablemente rendirse sea su mejor opción. Podría usted pensar que este es un problema que se le ocurrió al profesor durante un episodio psicótico de pura maldad y que, por lo tanto, es inútil intentar aprender la teoría necesaria para despejar la **x** en una ecuación que jamás verá en su vida.

<br/>   

Sin embargo, déjeme destruir todas sus esperanzas diciéndole que probablemente se enfrente a monstruos similares o peores que este. ¡Pero anímese! No todo está perdido (por ahora). Existen diversas técnicas que le permitirán hallar soluciones aproximadas y a veces exactas. Estas técnicas fueron creadas por brujos matemáticos antiguos que alguna vez estuvieron en su lugar de no poder resolver una ecuación.

<br/>

En estos apuntes aprenderemos los siguientes métodos:
<br/>
- [**Método de la Bisección**](/posts/function-roots/bisection)
<br/>
- [**Método de Regula Falsi o Falsa Posición**](/posts/function-roots/regula-falsi)
<br/>
- [**Método de la Secante**](/posts/function-roots/secant)
<br/>
- [**Método de Newton-Raphson**](/posts/function-roots/newton-raphson)
<br/>
- [**Método de Punto Fijo**](/posts/function-roots/fixed-point)

Los dos primeros métodos de Bisección y Regula Falsi son **métodos cerrados**, porque se conoce un intervalo cerrado de **x** en donde se sabe con seguridad que existe una raíz de la función:
$$f(x_s)=0$$
$$x_s\in [a,b]$$

Los métodos restantes son métodos abiertos. En los métodos abiertos no se tiene un intervalo cerrado donde se asegure la existencia de una raíz, pero se cuentan con aproximaciones iniciales que, a partir de un algoritmo, se pueda llegar a la raíz.

<br/>

Los métodos cerrados suelen ser más lentos que los métodos abiertos, es decir, requieren realizar una mayor cantidad de pasos para llegar a la raíz, pero la ventaja es que siempre convergen a la solución. Si bien los métodos abiertos son rápidos, hay casos en los que pueden diverger y nunca llegar a la solución.