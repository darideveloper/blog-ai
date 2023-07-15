---
title: "Tu primera App Flask | ¿Como crear una aplicación web con Flask?"
date: '2023-07-12'
description: 'Como crear una aplicación web con Flask sencilla, y conceptos básicos del microframework de Python.'
image: '/imgs/flask-primera-app/banner.webp'
categories: ['python', 'flask', "backend"]
---

Contenido

- [Instalar Flask](#instalar-flask)
- [Tu primera App Flask](#tu-primera-app-flask)
- [Ejecutar la aplicación](#ejecutar-la-aplicación)
  - [Desde terminal](#desde-terminal)
  - [Desde el archivo / desde vscode](#desde-el-archivo--desde-vscode)
  - [Visualizar App](#visualizar-app)
  - [Modo de depuración](#modo-de-depuración)
- [Código final](#código-final)
- [Referencias](#referencias)

## Instalar Flask

Antes de usar flask, es necesario instalarlo en tu python. Para ello, abre una terminal y ejecutar el siguiente comando: 

```bash
$ python -m pip install flask==2.3.2
```

En el comando anterior: 
* `python` es tu acceso directo a python (también puede ser: `python3`, `py`, `py3`, etc.),
* `-m` es una opción que indica que vamos a ejecutar un modulo,
* `pip` es el modulo que vamos a ejecutar (el cuál se utiliza para instalar o borrar paquetes de pthon),
* `install` es el comando que vamos a ejecutar dentro de pip (en este caso, instalar un paquete)
* `flask` es el paquete que vamos a instalar.
* `==2.3.2` es la versión del paquete que vamos a instalar.

En resumen, estamos diciendo que en ese versión específica de python (la de nuestro acceso directo), vamos a ejecutar el modulo `pip` y dentro de este modulo, vamos a ejecutar el comando `install` para instalar el paquete `flask`.

## Tu primera App Flask

Para crear una aplicación web con flask, es necesario crear un archivo `.py` con el siguiente contenido:

```python
# app.py

# desde el módulo "flask" importamos la clase "Flask"
from flask import Flask

# Crear una instancia de Flask
app = Flask(__name__)

@app.get("/") # decorador que indica la ruta de la función
def hello_world(): # función que se ejecuta cuando se accede a la ruta
    return "<h1>Hello, F**k World!</h1>" # respuesta que se envía al navegador
```

## Ejecutar la aplicación

### Desde terminal

Para ejecutar la aplicación desde la terminal, es necesario ejecutar el siguiente comando:

```bash
$ python -m flask --app {nombre del archivo sin el ".py"} run
# ejemplo:
# flask --app app run
```

### Desde el archivo / desde vscode

Para ejecutar la aplicación **directamente al darle 'play' al archivo, dentro de vs code**, es necesario agregar el siguiente código al final:
```python
# app.py

if __name__ == "__main__":
    app.run()
```

### Visualizar App

Para visualizar la aplicación, es necesario abrir un navegador y acceder a la ruta `http://localhost:5000/`.

![captura de aplicación flask corriendo](/imgs/flask-primera-app/first-flask-running.webp)

### Modo de depuración

Si haces en cambios en el código, podrás ver que la aplicación **no se actualiza automáticamente**. para eque eso suceda, es necesario realizar el siguiente cambio

```bash
# añadir la opción "--debug"
$ python -m flask --app {nombre del archivo sin el ".py"} run --debug
```

```python
# app.py

# Linea que se ejecuta cuando se accede al archivo directamente
if __name__ == "__main__":
    app.run(debug=True) # añadir la opción "debug=True"
```

## Código final

```python
# app.py

# desde el módulo "flask" importamos la clase "Flask"
from flask import Flask

# Crear una instancia de Flask
app = Flask(__name__)

@app.get("/") # decorador que indica la ruta de la función
def hello_world(): # función que se ejecuta cuando se accede a la ruta
    return "<h1>Hello, F**k World!</h1>" # respuesta que se envía al navegador

if __name__ == "__main__":
    app.run(debug=True) # añadir la opción "debug=True"
```

## Referencias
* [https://flask.palletsprojects.com/en/2.3.x/quickstart/](https://flask.palletsprojects.com/en/2.3.x/quickstart/)