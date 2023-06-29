---
title: 'Git vs Github, ¿Sabaes cual es la diferencia?'
date: '2032-06-28'
description: 'Git y Github, que son, como funcionan, y cual es la diferencia entre ellos.'
image: '/imgs/git-vs-github.webp'
categories: ['git', "github", "desarrollo"]
---

![imagen ilustrativa de Git vs Github](/imgs/git-vs-github-sabes-cual-es-la-diferencia.webp)


Cuando comienzas en el desarrollo de software, es muy probable que te encuentres con el término **Git** y **Github**, y es muy probable que te confundas, ya que son dos cosas diferentes, pero que se complementan.

*¿Que es git? ¿Que es Github? ¿Cual es la diferencia entre Git y Github? ¿Cual es mejor? ¿Cual debo usar?*

Vamos a responder estas preguntas.

![imagen ilustrativa de Git vs Github](/imgs/git-vs-github-meme1.webp)

## ¿Que es Git?

![imagen ilustrativa de Git vs Github](/imgs/git-vs-github-meme2.webp)

Git es un **sistema de control de versiones**, que nos permite llevar un **registro de los cambios que se realizan en un proyecto** lo largo del tiempo, de tal manera que podamos **recuperar versiones específicas más adelante.**

### Para que sirve Git?

¿Nunca te ha pasado que estas trabajando en un proyecto, y por alguna razón, **necesitas volver a una versión anterior del proyecto**, pero no tienes una copia de esa versión, o no recuerdas que cambios realizaste, o peor aún, no recuerdas que archivos modificaste?

O peor aún, **haces respaldos** de tu proyecto, pero **no sabes que cambios realizaste en cada respaldo**, y cuando necesitas volver a una versión anterior, **no sabes cual es la versión correcta**, pero terminas con 100 carpetas como: *respaldo1, respaldo-final, respaldo-final-final, respaldo-pero-no-mostrar-al-cliente-por-que-tiene-bug, etc?*

Justamente para solicionar eso existe Git, ya que **nos permite llevar un registro de cambios con mayor facilidad y movernos entre esos cambios**.

### ¿Como funciona Git?

Git funciona de la siguiente manera:

1. **Tienes un proyecto**, que puede ser un sitio web, una aplicación móvil, un juego, etc.
2. **Inicias un repositorio de Git** en tu proyecto (lo vinculas con Git)
3. **Haces cambios en tu proyecto**, como agregar una nueva funcionalidad, o corregir un error.
4. **Le indicas a Git que registre los cambios que realizaste**, y le das un nombre a ese cambio (por ejemplo: "agregué la funcionalidad de login")
5. **Continuas desde el paso 3** hasta que termines tu proyecto.

En cualquier momento, puedes volver a una versión anterior de tu proyecto, o ver que cambios realizaste en cada versión.

### ¿Que es un repositorio?

Un repositorio es un lugar donde se almacena información de los cambios que realizaste en tu proyecto.

**Cuando un proyecto está vinculado con git** (tiene una carpeta .git), digi-evoluciona y **se llama** repositorio (o **repo**, para abreviar).

### Como iniciar con git

Para iniciar con git, debes instalarlo en tu computadora, puedes descargarlo desde su [página oficial](https://git-scm.com/).

Puedes seguir este tutorial para [instalar git en windows](./instalar-git-windows.md).

### ¿Que es github?

![imagen ilustrativa de Git vs Github](/imgs/git-vs-github-meme3.webp)

Github (la página con un [gato-pulpo-mutante-de-la-disformidad](https://cdn.svgporn.com/logos/github-octocat.svg)) como mascota es una plataforma que nos permite **almacenar nuestros repositorios de git en la nube**, de tal manera que podamos **acceder a ellos desde cualquier computadora**, y **compartirlos con otras personas**.

Basicamente, como **una red social para programadores**.

Github tiene muchas ventajas, como **hosting gratis** para nuestros proyectos web básicos, y la posibilidad de **colaborar con otras personas** en nuestros proyectos, online. 

**No puedes programar directamente en Github**, si no, que debes hacerlo en tu computadora, y luego subir los cambios a Github.

Puedes comenzar creando una cuenta en [Github](https://github.com/)

## En resumen, cual es la entre Git y Github?

Git se **instala en nuestra computadora** y nos permite **gestionar los cambios que realizamos en nuestros proyectos.**

Github es una **plataforma online** que nos permite almacenar nuestros repositorios de git, **para acceder a ellos desde cualquier lugar, colaborar y compartir nuestro código**.