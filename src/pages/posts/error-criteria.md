---
layout: "../../layouts/MarkdownTheoryLayout.astro"
author: "Mauricio Klainbard"
tags: ["Criterios de error y detención de bucles"]
title: Criterios de error y detención de bucles
---

A veces no queremos extendernos demasiado con estos métodos de raíces. Pueden haber ocasiones en las que se requieran muchos pasos para llegar a la solución exacta, pero supóngase que la aproximación de la raíz en el paso 4 es x=0.999998 y recién en el paso 100 es la solución exacta x=1. Fíjese que se requieren cien pasos para llegar a la solución exacta cuando en el cuarto paso ya se tiene una solución lo suficientemente aproximada. Conviene dejar de lado el perfeccionismo y fijar una "tolerancia" al error. Diremos que hallamos la solución al problema cuando hallemos una aproximación "k" tal que:

$$|f(k)|<tolerancia$$

Fíjese que la tolerancia debe ser un número positivo. 

<br/>

Existen otros tipos de criterio que pueden ser aplicados para detener un bucle y conformarnos con la última aproximación. También se puede fijar una máxima cantidad de pasos, de esta manera, cuando programamos los métodos en una computadora, evitamos la posibilidad de un bucle infinito.

<br>

Mi criterio favorito es el de error relativo porcentual. Suponiendo que x<sub>s</sub> sea la solución a la ecuación f(x)=0 y x<sub>r</sub> sea una aproximación cualquiera, el error relativo porcentual entre la aproximación y la solución es:

$$e=\left|\frac{x_s - x_r}{x_s}\right| \cdot 100\%$$

Por supuesto, a priori es imposible conocer este error relativo ya que se debería conocer x<sub>s</sub>, y si se conoce x<sub>s</sub>, no tiene sentido aplicar un método numérico. Lo que si se puede hacer es reemplazar x<sub>s</sub> por x<sub>r+1</sub>, la siguiente aproximación calculada:

$$e_r=\left|\frac{x_{r+1} - x_r}{x_{r+1}}\right| \cdot 100\%$$

Aquí si conocemos todos los datos. La cuestión es que estamos considerando como si x<sub>r+1</sub> fuera la solución real, por lo que pararemos el bucle cuando:

$$\left|\frac{x_{r+1} - x_r}{x_{r+1}}\right| \cdot 100\<tolerancia%$$

Esto resulta extremadamente útil, ya que básicamente se detecta cuando el método está convergiendo a un valor, pues ese valor al que converge debe ser la solución. Si la diferencia x<sub>r+1</sub>-x<sub>r</sub> es lo suficientemente pequeña en relación a x<sub>r+1</sub>, el error relativo entre dos aproximaciones sucesivas es muy, muy pequeño y eso es lo que justamente indica la convergencia de las aproximaciones.

<br>

Sin embargo, por mucho que me guste utilizar el anterior criterio para detener los bucles, he decidido usar el criterio que he mostrado al principio, pues considero que es el más sencillo de usar y el más adecuado para empezar a programar con los bucles.