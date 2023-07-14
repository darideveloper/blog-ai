---
title: "¿Como estructurar un proyecto en Python? | Archivos y carpetas recomendadas"
date: '2023-07-12'
description: 'Guia paso a paso para estructurar y organizar un proyecto en Python, para casi cualquier librería y framework.'
image: '/imgs/estructura-python/banner.webp'
categories: ['python', 'fundamentos']
---

Contenido

- [¿Por qué es importante tener una estructura de proyecto?](#por-qué-es-importante-tener-una-estructura-de-proyecto)
- [Estructura de proyecto en Python](#estructura-de-proyecto-en-python)
  - [Carpeta principal](#carpeta-principal)
  - [Archivo principal](#archivo-principal)
  - [Ajustes del proyecto](#ajustes-del-proyecto)
  - [Dependencias del proyecto](#dependencias-del-proyecto)
    - [¿Por qué es importante tener un archivo de requerimientos?](#por-qué-es-importante-tener-un-archivo-de-requerimientos)
  - [Carpeta de tests](#carpeta-de-tests)
  - [README.md](#readmemd)
  - [Licencia](#licencia)
  - [Modulos internos](#modulos-internos)
  - [.gitignore](#gitignore)
  - [Resultado final](#resultado-final)

Al trabajar con python, si el framework o librería que estemos usando, **no nos da una estructura de proyecto**, es muy probable que nos encontremos con un proyecto **desorganizado**, con **archivos y carpetas por todos lados, y que no sepamos donde poner cada cosa**.

En este post, te voy a mostrar una **estructura de proyecto en python**, que te va a servir para **casi cualquier librería o framework**.

## ¿Por qué es importante tener una estructura de proyecto?

Si bien, **no es obligatorio tener una estructura de proyecto**, es muy recomendable tenerla, ya que nos va a permitir:

* **Tener un proyecto organizado**, con archivos y carpetas en su lugar.
* **Facilitar la lectura y comprensión del proyecto**, tanto para nosotros, como para otros desarrolladores.
* **Trabajar de formas mas eficiente** con nuestro proyecto, ya que vamos a saber donde esta cada cosa.
* **Instalar rápidamente nuestro proyecto en otros equipos**, ya que contaremos con un archivo de requerimientos, que nos va a permitir instalar todas las dependencias de nuestro proyecto, con un solo comando.
* **Facilitar la colaboración con otros desarrolladores**
* **Facilitar la publicación de nuestro proyecto**
* **Facilitar la creación de tests**, ya que vamos a tener una carpeta dedicada a ellos.

## Estructura de proyecto en Python

### Carpeta principal

Obviamente tenemos que crear una carpeta para nuestro proyecto.

![meme de crear carpeta principal](/imgs/estructura-python/main-folder-meme.webp)

```bash
> mi-proyecto/
```
### Archivo principal

Dentro de la carpeta principal, vamos a crear un archivo llamado `__main__.py`, que va a ser el archivo principal de nuestro proyecto.

Con frameworks de desarrollo web le solemos llamar `app.py`

```bash
# Estructura
mi-proyecto/
    __main__.py
```

```bash
# Ejemplo de __main__.py
print('Hola mundo')
```

### Ajustes del proyecto

La mejor practica es crear un archivo `.env`, en donde vamos a guardar todas las variables de entorno/configuraciones de nuestro proyecto.
Como por ejemplo:
* Tokens de apis
* Usuarios y contraseñas
* Urls de apis

La amyoría de lenguajes de programación, tienen librerías para leer archivos `.env`, en python la mas popular es [python-dotenv](https://pypi.org/project/python-dotenv/)

En este posts, se explica mas detalle como usar archivos `.env` en python: [Como usar archivos .env en python](/posts/env-python)

```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
```

```bash
# Ejemplo de .env
DB_USER=usuario_god
DB_PASS=contraseña123
DB_HOST=localhost
DB_PORT=5432
```

### Dependencias del proyecto

Para instalar las dependencias de nuestro proyecto (osea, los módulos necesarios para que este funciones, como flask, django, selenium, etc), vamos a crear un archivo llamado `requirements.txt`, en donde vamos a listar todos los módulos con su versión exacta.

```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
    requirements.txt
```

```bash
# Ejemplo de requirements.txt
flask==2.0.1
dotenv==0.19.0
```

#### ¿Por qué es importante tener un archivo de requerimientos?

![meme de homer confundido](/imgs/estructura-python/confused-meme.webp)

Cuando compartes el proyecto con otras personas, o lo vuelves a retomar espués de un tiempo, es muy probable que **no recuerdes que módulos necesitas instalar para que el proyecto funcione**, teniendo que **revisar todo el código y perdiendo mucho tiempo**.

Incluso si recuerdas que módulos necesitas, es muy probable que **no recuerdes la versión exacta** que necesitas, y tengas que **probar con varias versiones hasta encontrar la correcta** (si instalas una versión incorrecta, es muy probable que el proyecto no funcione).

Justamente, creando un archivo de requerimientos, **nos aseguramos de que el proyecto funcione correctamente**, y **nos ahorramos mucho tiempo**.

Para instalar las dependencias de nuestro proyecto, vamos a usar el comando `{tu acceso dircto a python} pip install -r requirements.txt`

Remplaza `{tu acceso dircto a python}` por el comando que usas para acceder a python, por ejemplo:
* `python`
* `python3`
* `python311`
* `py`
* `py3`
* `py311`

### Carpeta de tests

En caso de que el proyecto incluya prueba (tema **altamente recomendado**, pero que escapa del alcance de este post), vamos a crear una carpeta llamada `tests`, en donde vamos a guardar todos los tests.

```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
    requirements.txt
    tests/
        test_1.py
        test_2.py
        test_3.py
```

En pocas palabras, las `pruebas` o `tests`, son un conjunto de instrucciones que nos permiten **verificar que nuestro proyecto funcione correctamente**.

### README.md

El archivo `README.md` es un archivo de texto, que se usa para **documentar el proyecto**, el él podemos indicar cosas como:
* De que trata el proyecto
* Como se instala el proyecto
* Como se usa el proyecto
* Configuraciones del proyecto
* Que uso se le puede dar

Este archivo, se escribe en formato `markdown`, que es un lenguaje de marcado (similar a html, pero mucho mas sim0plificado), que nos permite darle formato al texto, de forma muy sencilla.

Mas información de markdown en: [Markdown](https://www.markdownguide.org/basic-syntax/)


```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
    README.md
    requirements.txt
    tests/
        test_1.py
        test_2.py
        test_3.py
```

```bash
# Ejemplo de README.MD

# Titulo del proyecto
Este proyecto es un ejemplo de como estructurar un proyecto en python.
![texto altenativo de la imagen](https://mi-imagen.com)
```

### Licencia

El archivo `LICENSE` es un archivo de texto, que se usa para **indicar que tipo de licencia tiene nuestro proyecto**, y que uso se le puede dar.

Si no añades un archivo `LICENSE`, se asume que el proyecto no tiene licencia, y por lo tanto **no se puede usar**, tiene derechos de autor (como una canción o una película).

Mas información de licencias en: [Choose a License](https://choosealicense.com/)

En lo personal, recomiendo usar la licencia `MIT`, ya que es la mas simple y flexible.

```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
    LICENSE
    README.md
    requirements.txt
    tests/
        test_1.py
        test_2.py
        test_3.py
```

```bash
# Ejemplo de LICENSE
MIT License

Copyright (c) 2023 {tu nombre o usuario}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Modulos internos

En caso de que el proyecto requiera código adicional, que no sea el archivo principal, podemos crear una carpeta llamada `src`, en donde vamos a guardar todos los módulos.

Otra opción sería colocar una carpeta por cada módulo, pero esto ya depende de cada proyecto.

Asegurate de añadir un archivo `__init__.py` en cada carpeta, para que python reconozca la carpeta como un módulo y nos permita importarla.

```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
    emails/
        enviar.py
        __init__.py
    LICENSE
    README.md
    requirements.txt
    tests/
        test_1.py
        test_2.py
        test_3.py
```

### .gitignore

Este es un archivo que tenemos que añadir, si trabajamos con git, para indicarle a git que archivos y carpetas no queremos que sean subidos a github.

**Obligatoriamente debemos incluir el archivo `.env` en el `.gitignore`**, ya que este archivo contiene información sensible, como contraseñas y tokens de apis.

De otra forma, cuando subamos el proyecto a github, **cualquiera podría ver nuestras contraseñas y tokens**.

Mas info sobre `.gitignore` en el [**curso de git**](/posts/git-2023)

```bash
# Estructura
mi-proyecto/
    __main__.py
    .env
    .gitignore
    emails/
        enviar.py
        __init__.py
    LICENSE
    README.md
    requirements.txt
    tests/
        test_1.py
        test_2.py
        test_3.py
```

```bash
# ejemplo de .gitignore
.env
*.temp
__pycache__/
*.jpg
/emails/
```

### Resultado final

```bash
# Estructura
mi-proyecto/ # carpeta del proyecto
    __main__.py # archivo principal
    .env # archivo de configuraciones
    .gitignore # archivo de git
    emails/ # módulo
        enviar.py # archivo del módulo
        __init__.py
    LICENSE # archivo de licencia
    README.md # archivo de documentación
    requirements.txt # archivo de requerimientos
    tests/ # carpeta de tests
        test_1.py # archivo de test
        test_2.py
        test_3.py
```