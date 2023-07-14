---
title: ".env Python | ¿Que son y como usar las variables de entorno en Python?"
date: '2023-07-14'
description: 'Guia rápida en español, para entender y usar variables de entorno en Python.'
image: '/imgs/env-python/banner.webp'
categories: ['python', 'env', 'fundamentos']
---

Contenido
- [¿Que son las variables de entorno?](#que-son-las-variables-de-entorno)
- [¿Como usar las variables de entorno en un proecto?](#como-usar-las-variables-de-entorno-en-un-proecto)
- [Variables de entorno en python](#variables-de-entorno-en-python)
  - [dotenv](#dotenv)
    - [Instalar](#instalar)
  - [Ejemplo de uso](#ejemplo-de-uso)
  - [Lo que NO debes hacer](#lo-que-no-debes-hacer)
    - [¿Por que no usar las variables de entorno de esta forma?](#por-que-no-usar-las-variables-de-entorno-de-esta-forma)
  - [Bonus: variables numericas](#bonus-variables-numericas)


## ¿Que son las variables de entorno?

Las variables de entorno son **variables globales** que (comunmente) se pueden usar en todo el sistema operativo, estas variables se pueden usar para guardar **información sensible como contraseñas, tokens, etc**.

## ¿Como usar las variables de entorno en un proecto?

Para no cambiar los ajustes del sistema, lo mas recomendable es usar un archivo `.env` en la raiz del proyecto, en este archivo se guardaran las variables de entorno **exclusivas** del proyecto.

## Variables de entorno en python

### dotenv

Para usar las variables de entorno en **python**, se puede usar la libreria `dotenv`.
Mas info de la libreria: [python-dotenv](https://pypi.org/project/python-dotenv/)

#### Instalar

Puedes añadirlo a tu archivo `requirements.txt` o instalarlo con pip:

```bash	
$ python -m pip install python-dotenv
```

### Ejemplo de uso

```bash
# Estructura de archivos
> my-projecto
    .env
    __main__.py
```

```bash
# .env
DB_USER=root
DB_PASS=mi-bebito-fiu-fiu-12345
```

```python
# __main__.py

# Importar módulos
import os
from dotenv import load_dotenv

# Llamar a la función load_dotenv para cargar las variables de entorno
load_dotenv ()

# Hardcodear variables de entorno
DB_USER = os.getenv ("DB_USER")
DB_PASS = os.getenv ("DB_PASS")

# ...
```

### Lo que NO debes hacer

```python
# __main__.py

# Importar módulo
import os
from dotenv import load_dotenv

# Llamar a la función load_dotenv para cargar las variables de entorno
load_dotenv ()

# Leer variables de entorno
DB_USER = "root"
DB_PASS = "mi-bebito-fiu-fiu-12345"
# ...
```

#### ¿Por que no usar las variables de entorno de esta forma?

![meme hackers](/imgs/env-python/hardcode-meme.webp)

Si escribes datos sensibles en el códio, como **usuarios**, **contraseñas**, **tokens**, etc, estos datos se pueden ver **comprometidos si subes el código a un repositorio público, o si compartes el código con alguien mas.**

### Bonus: variables numericas

Todos los datos que se leen del .env son **cadenas de texto**, por lo que si quieres usar un valor numerico, debes convertirlo a entero o flotante.

```python
# Leer variables de entorno
WAIT_TIME = int(os.getenv ("WAIT_TIME"))
```