---
title: "¿Estás listo para aprender un Flask o Django? | Fundamentos de desarrollo Backend"
date: '2023-07-02'
description: 'Conceptos básicos de desarrollo backend, para que puedas aprender cualquier framework de backend'
image: '/imgs/fundamentos-backend/banner.webp'
categories: ["backend", "desarrollo", "flask", "django"]
---

Contenido

- [¿Que es una librería y un framework?](#que-es-una-librería-y-un-framework)
  - [Librería](#librería)
  - [Framework](#framework)
  - [Django y Flask](#django-y-flask)
  - [¿Es mejor Django o Flask?](#es-mejor-django-o-flask)
- [Modelo cliente servidor](#modelo-cliente-servidor)
  - [Cliente servidor en frontend](#cliente-servidor-en-frontend)
  - [Cliente servidor en backend](#cliente-servidor-en-backend)
- [Protocolo HTTP](#protocolo-http)
  - [Métodos HTTP](#métodos-http)
    - [Get](#get)
    - [Post](#post)
    - [Put](#put)
    - [Delete](#delete)
    - [Formularios](#formularios)
  - [Códigos de respuesta HTTP](#códigos-de-respuesta-http)
    - [1xx](#1xx)
    - [2xx](#2xx)
    - [3xx](#3xx)
    - [4xx](#4xx)
    - [5xx](#5xx)
- [Tipos de desarrollo backend](#tipos-de-desarrollo-backend)
  - [Por funcionalidad](#por-funcionalidad)
    - [Api](#api)
    - [Aplicación web](#aplicación-web)
  - [Por organización del código](#por-organización-del-código)
    - [Monolito](#monolito)
    - [Microservicios](#microservicios)
  - [Por framework](#por-framework)
    - [Django](#django)
    - [Flask](#flask)


Antes comenzar a crear tus aplicaciones web con django o flask, es importante que entiendas algunos conceptos básicos de **desarrollo backend** y desarrollo web en general.

## ¿Que es una librería y un framework?

![herramienta vs caja de herramientas](/imgs/fundamentos-backend/herramienta-vs-caja-de-herramientas.webp)

### Librería

Una librería (o módulo) es un conjunto de funciones que nos permiten realizar una tarea específica, por ejemplo, la librería `math` de Python nos permite realizar operaciones matemáticas.

Se puede entender como una **herramienta**, que nos permite realizar una tarea específica.

### Framework

Un framework es un **conjunto de librerías** que nos permiten realizar una tarea específica. 

Como una **caja de herramientas**, con muchas herramientas (librerías) dentro.

### Django y Flask

![flask vs django](/imgs/fundamentos-backend/flask-vs-django.webp)

Por ejemplo, **Django es un framework de Python que nos permite crear aplicaciones web**.

Flask es un **micro framework** de Python (es un framework, pero muy pequeño, practicamente una librería), para el mismo propósito.

Esto significa que **Django es más completo** (tiene incluido practicamente todo lo que puedas necesitar), pero eso lo hace **menos flexible** y **mas complejo de aprender**.
Mientras que **Flask es más flexible y fácil de usar**, pero seguramente tendrás que programar muchas cosas **manualmente** o **instalar librerías adicionales**.

### ¿Es mejor Django o Flask?

No hay una respuesta correcta, depende de lo que quieras hacer.

Si estás **comenzando en el backend**, lo mejor es que comiences con **Flask**, ya que te permitirá **entender fácilmente los conceptos básicos del desarrollo web**.
También es ideal para crear **aplicaciones web pequeñas y sencillas**.

Si **ya tienes experiencia** en el desarrollo backend, y quieres crear una **aplicación web compleja**, lo mejor es que uses Django, ya que te ahorrará mucho tiempo y esfuerzo.

## Modelo cliente servidor

![cliente-servidor](/imgs/fundamentos-backend/cliente-servidor.webp)

Es la forma en como funciona la web, el **cliente** (navegador web de tu computadora, como *google chrome*) hace una **petición** (por ejemplo, entrar a una página web, como [blog.darideveloper.com](https://blog.darideveloper.com/)) al **servidor** (una computadora que *aloja* la página o aplicación web), y este le **responde** con una respuesta (que puede ser una página html, json, xml, etc).

### Cliente servidor en frontend

![frameworks de frontend](/imgs/fundamentos-backend/frameworks-de-frontend.webp)

En una página web unicamente con frontend, lo mas habitual es que **todo el el proyecto sean archivos HTML, CSS y JavaScript** (hay muchas herramientas como React, Vue, Angular, Sass, etc, pero al final todo se compila a HTML, CSS y JavaScript), ya que un navegador web solo puede interpretar estos lenguajes.

Los archivos HTML, CSS y JavaScript se **alojan en un servidor** (se guardan), y cuando un usuario entra a la página web, el navegador web **descarga** estos archivos y los **interpreta** (los muestra).

A este tipo de páginas se les suele llamar **páginas estáticas**, ya que no cambian, siempre son las mismas.

Se pueden crear páginas con solo con estas 3 tecnologías, **si no necesitas conectarte a un servicio externo o a una base de datos**

[Click aquí para leer más sobre el frontend](https://platzi.com/blog/que-es-frontend-y-backend/)

### Cliente servidor en backend

[![frameworks de backend](/imgs/fundamentos-backend/frameworks-de-backend.webp)](https://survey.stackoverflow.co/2023/)

Se implementa backend cuando se necesita **conectarse a una base de datos o a un servicio externo** (por ejemplo, un servicio de pago como PayPal).

El funcionamiento es similar, pero la diferencia es que el servidor **no aloja archivos HTML, CSS y JavaScript**, sino que aloja **archivos de código** (por ejemplo, Python, PHP, Java, etc), que se pueden encargan de **generar** los archivos HTML, CSS y JavaScript, y **enviarlos** al navegador web, o de devolver datos que el frontend recoge y muestra, de tal forma que el contenido de la página web **puede cambiar**.

[Click aquí para leer más sobre el backend](https://platzi.com/blog/que-es-frontend-y-backend/)

## Protocolo HTTP

![protocolo http](/imgs/fundamentos-backend/http.webp)

El protocolo HTTP (Hypertext Transfer Protocol) es un protocolo de comunicación que permite la transferencia de información en la web.

Es la forma en como un cliente y un servidor se comunican.

### Métodos HTTP

Los métodos HTTP son los **tipos de peticiones** (mensajes) que se pueden hacer a un servidor.

Puedes indicarle al servidor que quieres **consultar** datos, que quieres **enviar** datos, que quieres **actualizar** datos, o que quieres **eliminar** datos.

Es un **indicador sobre la acción que quieres realizar**.

En el backend, podemos **detectar** el método HTTP que se está usando, y **realizar una acción u otra**.

En cada petición **se pueden enviar datos** (por ejemplo, parametros de busqueda) los cuales se pueden leer en el backend.

Los métodos mas utilizados son los siguientes, aun que hay más, y pese a que lo recomendable es usar el método correcto, en la practica puede variar.

#### Get

![ejemplo de http get](/imgs/fundamentos-backend/http-get.webp)

Este es el método mas común y el que se usa por cuando navegas por internet.

Es utilizado para **consultar datos** al servidor.

Por ejemplo, cuando vas a [blog.darideveloper.com](https://blog.darideveloper.com/), tu navegador web hace una petición GET al servidor, y este le responde con la página web (le estás diciendo que quieres consultar la página web)

#### Post

Este método se usa para **enviar nuevos datos** al servidor.

Por ejemplo, cuando te **registras en una página web**, tu navegador web hace una petición POST al servidor, y este le responde con un mensaje de confirmación (le estás diciendo que quieres enviar tus datos de registro)

#### Put

Este método se usa para **actualizar datos** en el servidor.

Por ejemplo, cuando **actualizas tu información de perfil** en una página web, tu navegador web hace una petición PUT al servidor, y este le responde con un mensaje de confirmación (le estás diciendo que quieres actualizar tus datos de perfil)

#### Delete

Este método se usa para **eliminar datos** en el servidor.

Por ejemplo, cuando **eliminas tu cuenta** en una página web, tu navegador web hace una petición DELETE al servidor, y este le responde con un mensaje de confirmación (le estás diciendo que quieres eliminar tu cuenta)

#### Formularios

![formulario html](/imgs/fundamentos-backend/form.webp)

En el backend, podemos recibir y leer información de formularios.
Un formulario de html solo se puede enviar con los métodos GET y POST, por lo que si queremos usar PUT o DELETE, tendremos que usar JavaScript.

### Códigos de respuesta HTTP

![error 404 not found](/imgs/fundamentos-backend/404.webp)

Después de enviar una petición, el servidor nos envía una respuesta con (entre otras cosas), un código de respuesta HTTP, lo cuál es, basicamente, una abreviatura de la respuesta.

En el frontend, podemos **enviar** el código de respuesta HTTP, según necesitemos.

#### 1xx

**Respuesta informativa**: La petición se ha recibido y el proceso continúa.

![meme respuesta 100](/imgs/fundamentos-backend/meme-respuesta-100.webp)

#### 2xx

**Respuesta satisfactoria**: La petición se ha recibido, se ha comprendido y se ha aceptado.

![meme respuesta 300](/imgs/fundamentos-backend/meme-respuesta-200.webp)

#### 3xx

![meme respuesta 300](/imgs/fundamentos-backend/meme-respuesta-300.webp)

**Respuesta de redirección** Se necesita una acción adicional por tu parte para completar la solicitud.

#### 4xx

![meme respuesta 400](/imgs/fundamentos-backend/meme-respuesta-400.webp)

**Error del cliente**: La solicitud contiene sintaxis incorrecta o no se puede procesar.

#### 5xx

![meme respuesta 500](/imgs/fundamentos-backend/meme-respuesta-500.webp)

**Error del servidor**: El servidor no pudo completar una solicitud aparentemente válida.

## Tipos de desarrollo backend

### Por funcionalidad

#### Api

![imagen de una pokedex como referencia a la pokeapi](/imgs/fundamentos-backend/imagen-de-pokedex-como-referencia-a-la-pokeapi.webp)

Un api es un **servicio web** que se encarga de **enviar y recibir datos**.
No se encarga de **renderizar** (mostrar) **páginas web**.

Por ejemplo la PokeAPI. En su [documentación](https://pokeapi.co/) puedes ver que accediendo el enlace [pokeapi.co/api/v2/pokemon/ditto](https://pokeapi.co/api/v2/pokemon/ditto) nos devuelve información.


![documentación de pokeapi](/imgs/fundamentos-backend/documentación-de-pokeapi.webp)

Datos devueltos por la api:

![datos de la pokeapi sin formato](/imgs/fundamentos-backend/datos-de-la-pokeapi-sin-formato.webp)

![datos de la pokeapi formateados](/imgs/fundamentos-backend/datos-de-la-pokeapi-formateados.webp)

#### Aplicación web

Por el contrario, una aplicación web es un **servicio web** que se encarga de **renderizar** (mostrar) **páginas web**.

Por ejemplo, [comunidadmc.com](http://comunidadmc.com/), que tiene, entre otras, una landing page, una página de inicio, etc. 

![comunidadmc landing](/imgs/fundamentos-backend/comunidadmc-landing.webp)

![comunidadmc inicio](/imgs/fundamentos-backend/comunidadmc-inicio.webp)

### Por organización del código

#### Monolito

Se llama así a un proyecto en el que **todo el código está en un solo lugar**.



#### Microservicios

Se llama así a un proyecto en el que **el código está separado en varios proyectos**.

### Por framework

#### Django

Un proyecto de **Django** por lo general **es un monolito**, ya que todo el código está en un solo proyecto.

#### Flask

Flask es mucho mas flexible, por lo que puedes crear un proyecto **monolito** o **microservicios**.


[Más información en este video](https://www.youtube.com/watch?v=qAcUGw7HhxM)