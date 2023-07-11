---
title: "Crea funciones en python como un Pro"
date: '2023-07-11'
description: 'Guia y recomendaciones para crear funciones en python de forma profesional'
image: '/imgs/funciones-python/banner.webp'
categories: ["python", "funciones", "fundamentos"]
---

Contenido

- [Que es una función](#que-es-una-función)
- [¿Para que sirven las funciones?](#para-que-sirven-las-funciones)
- [Función básica](#función-básica)
- [Argumentos](#argumentos)
  - [Recibir argumentos](#recibir-argumentos)
  - [Argumentos por defecto](#argumentos-por-defecto)
  - [Argumentos con tipo de datos](#argumentos-con-tipo-de-datos)
- [Retorno](#retorno)
  - [Retornar valores](#retornar-valores)
  - [Retorno con tipo de datos](#retorno-con-tipo-de-datos)
- [autoDocstring](#autodocstring)
- [Funciones lambda](#funciones-lambda)

## Que es una función

En programación, una función es **un bloque de código que realiza una tarea específica**. 

Las funciones (comunmente) toman un valor de entrada, realizan un cálculo u operación con él y (opcionalmente) devuelven un valor de salida.

Se puede ver como una **caja negra** que recibe y devuelve datos.

O una **linea de producción** que recibe materia prima, la procesa y devuelve un producto terminado.

![ilustración de linea de producción](/imgs/funciones-python/production-line.webp)

## ¿Para que sirven las funciones?

Las funciones sirven para **reutilizar código**.

Por ejemplo, si en alguna parte de tu proyecto necesitas enviar emails, e*n lugar de escribir el código para enviar un email cada vez que lo necesites*, puedes *crear una función que se encargue de eso* y llamarla cada vez que la necesites.

## Función básica

A continuación se muestra la estructura básica de una función en python:

```python
def ejemplo ():
  print ("Soy una función")
```

* La palabra reservada `def` indica que se va a definir una función.
* `def` es el nombre de la función (como si fuera una variable).
* Se utiliza `:` al final de la primera linea (igual que en los condicionales y ciclos)
* El código que se encuentra dentro de la función debe estar indentado (igual que en los condicionales y ciclos)

## Argumentos

### Recibir argumentos

### Argumentos por defecto

### Argumentos con tipo de datos

## Retorno

### Retornar valores

### Retorno con tipo de datos

## autoDocstring

## Funciones lambda