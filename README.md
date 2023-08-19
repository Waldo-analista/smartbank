# Proyecto React y Styled Components de Alura Latam

Proyecto realizado utilizando lo enseñado en el curso llamado **React: Utilizando Styled Components** en el cual se utiliza la librería React junto a la librería Styled Components. La librería Styled Components facilita el encapsular estilos aplicados a componentes vía los **_tagged template literals_** de JavaScript los cuales combinan funciones y cadenas de texto. EL proyecto implementa la librería ya sea instalándola como dependencia en el proyecto e importando funciones. En el curso se da estilo global vía la función `createGlobalStyle` de styled components y se utiliza la función `ThemeProvider` a la cual se le pasa la props theme para luego capturarla en las funciones definidas con styled components y aplicar estilos condicionales vía el método de objetos (no el método switch y case). Los temas (variables) se almacenan como objetos en el archivo **temas.js**. Lo anterior permite implementar la funcionalidad Oscuro y Claro (día y noche) la cual es muy común hoy en día vía el auge de tecnologías que facilitan el cambio de estilos (librerías que abstraen la operación).

He creado un **footer** el cual no es implementado por el instructor y además he realizado el **desafío** dejado por el instructor [Harland Lohora](https://github.com/HarlandLohora) el que consiste en almacenar el estado de la variable que determina el día o noche en el localstorage del navegador el cual permite recordar el estado dejado anteriormente por el usuario.

Como detalle del curso, el instructor exporta por defecto funciones anonimas sin asignarlas a variables lo que si bien no genera error, la extensión **ESLint** el cual tengo instalado en Visual Studio Code me genera una advertencia mencionando que lo anterior no debiera ocurrir por lo que siguiendo la sugerencia de ESLint he exportado por defecto funciones anónimas asignadas a variables y de este modo la alerta desaparece.

# Imagen del Proyecto

### Estado Día

![Imagen Día del Home](PresentaciónHomeDía.png)

### Estado Noche

![Imagen Noche del Home](PresentaciónHomeNoche.png)
