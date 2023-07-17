---
title: "Crea funciones en Python como un Pro"
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
  - [Recibir un argumento](#recibir-un-argumento)
  - [Recibir multiples argumentos](#recibir-multiples-argumentos)
  - [Argumentos por defecto](#argumentos-por-defecto)
  - [Cambiar el orden de los argumentos](#cambiar-el-orden-de-los-argumentos)
  - [Argumentos con tipo de datos](#argumentos-con-tipo-de-datos)
- [Retorno](#retorno)
  - [Retornar valores](#retornar-valores)
    - [Ejemplo 1](#ejemplo-1)
    - [Ejemplo 2](#ejemplo-2)
  - [Retorno con tipo de datos](#retorno-con-tipo-de-datos)
- [Documentar funciones](#documentar-funciones)
  - [¿Qué es documentar?](#qué-es-documentar)
  - [¿Por que documentar?](#por-que-documentar)
  - [¿Como documentar?](#como-documentar)
  - [autoDocstring](#autodocstring)
- [Extra: Funciones lambda](#extra-funciones-lambda)

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
# Crear una dunción
def ejemplo ():
  print ("Soy una función")

# Llamar a la función
ejemplo ()
```

```python
# Salida
>> Soy una función
```

* La palabra reservada `def` indica que se va a definir una función.
* `ejemplo` es el nombre de la función (como si fuera una variable).
* Se utiliza `:` al final de la primera linea (igual que en los condicionales y ciclos)
* El código que se encuentra dentro de la función debe estar indentado (igual que en los condicionales y ciclos)

## Argumentos

Una función puede recibir datos, los cuales se conocen como **argumentos** o **parámetros**.

Una función puede recibir **cero o más argumentos**.

Como ejemplo, una función que saluda a un usuario:

### Recibir un argumento

```python
# Crear una función que recibe el dato "nombre"
def saludar (nombre):
  print (f"Buen día usuario {nombre}")
```

Al llamarla/invocarla, se debe pasar el argumento:

```python
# Llamar a la función enviado como nombre "Juan"
saludar ("Juan")
# >> Buen día usuario Juan

# Llamar a la función enviado como nombre "Juan"
saludar ("José")
# >> Buen día usuario José
```

### Recibir multiples argumentos

En caso de que se necesite recibir más de un datos, se separan por comas:

```python
# Saludar a un usuario o un administrador
def saludar (nombre, es_admin):
  if es_admin:
    print (f"Bienvenido Lord {nombre}")
  else:
    print (f"Buen día usuario {nombre}")

# Saludar a un usuario normal
saludar ("Juan", False)
# >> Buen día usuario Juan

# Saludar a un administrador
saludar ("José", True)
# >> Bienvenido Lord José

```
### Argumentos por defecto

Cuando un dato comunmente es el mismo, se puede definir un **valor por defecto** para ese argumento, y así no es necesario escribirlo cada vez que se llama a la función.

Por ejemplo, si tienes una función que envía emails, y si la mayoría de los emails son para el mismo destinatario, puedes definirlo como argumento por defecto:

```python
# Enviar un email
def enviar_email (destinatario, asunto, mensaje, remitente="darideveloper@gmail.com"):
  
  # Código mágico para enviar el email
  # ...

  print (f"Correo enviado a {destinatario} desde {remitente}")
```

Al llamar a la función, se puede omitir el argumento `remitente`:

```python
# Enviar un email a un usuario desde el remitente por defecto
enviar_email ("sample@gmail.com", "F*** y**", "holaaaaa")
# >> Correo enviado a sample@gmail desde darideveloper@gmail

# Enviar un email a un usuario desde otro remitente
enviar_email ("sample@gmail.com", "F*** y**", "holaaaaa", "otroemail@gmail.com")
# >> Correo enviado a sample@gmail desde otroemail@gmail
```

### Cambiar el orden de los argumentos

Podemos cambiar el orden en que se envían los datos, si especificamos el nombre del argumento:

Por ejemplo, en la función anterior, podríamos enviar el argumento `remitente` antes que el argumento `mensaje`:

```python
enviar_email ("sample@gmail.com", "F*** y**", remitente="otroemail@gmail.com", mensaje="holaaaaa")
# >> Correo enviado a sample@gmail desde otroemail@gmail
```

A esto se le conoce como **argumentos con nombre** (keyword arguments).
A partir del momento en que se envía un argumento con nombre, **todos los argumentos siguientes deben ser con nombre.**

Solo asegurate de **enviar los argumentos obligatorios** (los que no tienen valor por defecto).

### Argumentos con tipo de datos

Algo que no hacen muchos desarrolladores, pero es super-mega-hiper-verga-mamalon-recomendable, es **especificar el tipo de dato** que recibe cada argumento.

Esto se hace con la ayuda de **anotaciones de tipo**

A continuación un ejemplo con nuestra función `saludar`:

```python
def saludar (nombre:str):
  print (f"Buen día usuario {nombre}")
```

En este caso, el argumento `nombre` debe ser de tipo `str` (string).

Consiste en escribir `:` después del nombre del argumento, y luego el tipo de dato.

Los tipos de datos pueden ser:

| Tipo de dato | Descripción |
| ------------ | ----------- |
| `str` | String (cadena de texto) |
| `int` | Integer (entero) |
| `float` | Float (decimal) |
| `bool` | Boolean (booleano) |
| `list` | List (lista) |
| `tuple` | Tuple (tupla) |
| `dict` | Dictionary (diccionario) |
| `set` | Set (conjunto) |
| `None` | None (nulo) |

**IMPORTANTE:** Las anotaciones de tipo **no afectan el funcionamiento de la función**. Solo sirven para **documentar** el código y **ayudar a otros desarrolladores** a entenderlo. 
Esto quiere decir que si te equivocas al escribir el tipo de dato (enviar un string a un argumento que debe ser un entero, por ejemplo), **no va a pasar nada**.

Otro ejemplo con la función `enviar_email`:

```python
def enviar_email (destinatario:str, asunto:str, mensaje:str, remitente:str="darideveloper@gmail.com"):
  
  # Código mágico para enviar el email
  # ...

  print (f"Correo enviado a {destinatario} desde {remitente}")
```

En el ejemplo anterior, todos los argumentos son de tipo `str` (string).
En caso de contar con argumentos opcionales, colocar el tipo de datos antes, y luego el signo `=`:

## Retorno

Existen situaciones cuando necesitas hacer repetidamente algo como enviar emails, y **saber el resultado de la operación** (si el email se envió correctamente o no).

O **procesar una información** y después continuar tu código (como limpiar caracteres extra en un texto). 

Para esto, se utiliza la palabra reservada `return`, que lo hace es basicamente **devolver un valor** o **enviar un valor afuera de la función**.

### Retornar valores

#### Ejemplo 1

El siguiente código es una versión completa de la función `enviar_email`:

```python
def enviar_email (destinatario:str, asunto:str, mensaje:str, remitente="darideveloper@gmail.com"):

  # Lista de remitentes válidos
  remitentes_validos = [
    "darideveloper@gmail.com",
    "sample@gmail.com"
  ]
  
  # Comprobar se encuentra en la lista de remitentes válidos
  if remitente in remitentes_validos:

    # Código mágico para enviar el email
    # ...
    
    print (f"Correo enviado a {destinatario} desde {remitente}")

    # Devolver True indicando que el email se envió
    return True

  else:
    print (f"El remitente {remitente} no es válido")
    
    # devolver False indicando que el email no se envió
    return False
    
```

* Tenemos una lista de remitentes válidos
* Se comprueba si el remitente se encuentra en la lista o no
* En caso de que se encuentre, se envía el email y se devuelve `True`
* En caso de que no se encuentre, se devuelve `False`

Esto es lo que pasa cuando se llama a la función:

```python
# enviar correo usando los datos: destinatario, asunto, mensaje y remitente
enviar_email ("tu-mama@gmail.com", "hola wuapa", "holi :3", "darideveloper@gmail.com")
# >> Correo enviado a tu-mama@gmail desde darideveloper@gmail

enviar_email ("smple@gmail.com", "hola", "holi :3", "email-invalido@gmail.com")
# >> El remitente email-invalido@gmail no es válido
```

Hasta este punto es practicamente igual que la versión anterior, pero ahora podemos **saber si el email se envió o no**, de la siguiente forma:

```python
resultado_1 = enviar_email ("tu-mama@gmail.com", "hola wuapa", "holi :3", "darideveloper@gmail.com")
# >> Correo enviado a tu-mama@gmail desde darideveloper@gmail

print (resultado_1)
# >> True

resultado_2 = enviar_email ("smple@gmail.com", "hola", "holi :3", "email-invalido@gmail.com")
# >> El remitente email-invalido@gmail no es válido

print (resultado_2)
# >> False
```

Como se puede ver en los ejemplos anteriores, **el valor que devuelve la función se puede guardar en una variable** para despues imprimirlo (o darle el uso que se necesites).

#### Ejemplo 2

La siguiente función quita espacios en blanco y convierte el texto a minúsculas:

```python
def limpiar_texto (texto:str):
  texto_limpio = texto.strip().lower()
  return texto_limpio
```

* Se quitan los espacios en blanco con el método `strip()`
* Se coloca todo el texto en minúsculas con el método `lower()`
* Finalmente, se devuelve el texto limpio con la palabra reservada `return`

Al llamar a la función, se puede guardar el valor que devuelve en una variable:

```python
texto_original = " hola MUnDO  "
texto_limpio = limpiar_texto (texto_original)
print (f"*{texto_limpio}*") # se agregan asteriscos para ver los espacios en blanco

# >> *hola mundo*
```

### Retorno con tipo de datos

Al retornar un valor, se puede especificar el tipo de dato que se va a devolver:

```python
def limpiar_texto (texto:str) -> str:
  texto_limpio = texto.strip().lower()
  return texto_limpio
```

En este caso, la función `limpiar_texto` recibe un argumento de tipo `str` (string) y **devuelve un valor de tipo** `str` (string).

O en la función `enviar_email`:

```python
def enviar_email (destinatario:str, asunto:str, mensaje:str, remitente="darideveloper@gmail.com") -> bool:
  # ....
```

La función `enviar_email` recibe 4 argumentos, y devuelve un valor de tipo `bool` (booleano).

**IMPORTANTE:** Igual que los argumentos con tipo de datos, poner el tipo de dato de un return **no afectan el funcionamiento de la función**. Solo sirven para **documentar** el código y **ayudar a otros desarrolladores** a entenderlo, pero esto *hace la diferencia entre un código profesional y un código de principiante.*

## Documentar funciones

### ¿Qué es documentar?

![meme de pensar](/imgs/funciones-python/thinking.webp)

Documentar es **escribir comentarios** en el código, para **explicar** que hace cada cosa.

### ¿Por que documentar?

![meme de documentar el código](/imgs/funciones-python/documentation.webp)

Documentar es importante porque:
* Ayuda a **entender el código** a otras personas (o a ti mismo en el futuro)
* Ayuda a **encontrar errores** en el código
* Sirve como **guía** para saber como usar el código
* Facilita la **mantenibilidad** del código

### ¿Como documentar?

En funciones, la la documentación es el primer comentario multilinea (comentarios de triple comilla) que se encuentra dentro de la función.

La estructura básica de que yo recomiendo es la siguiente:

```python
"""
{resumen}

Args:
  {argumento_1} ({tipo_de_dato}): {descripcion}
  {argumento_2} ({tipo_de_dato}): {descripcion}

Returns:
  {tipo_de_dato}: {descripcion}
"""
```

Si no cuentas con argumentos, puedes omitir la sección `Args:`
Si no cuenta con un valor de retorno, puedes omitir la sección `Returns:`

Ejemplo con la función `enviar_email`:

```python
def enviar_email (destinatario:str, asunto:str, mensaje:str, remitente="darideveloper@gmail.com") -> bool:
  """
  Enviar un email

  Args:
    destinatario (str): Email del destinatario
    asunto (str): Asunto del email
    mensaje (str): Mensaje del email
    remitente (str, optional): Email del remitente. Defaults to "
  
  Returns:
    bool: True si el email se envió, False si no se envió

  """


  # Lista de remitentes válidos
  remitentes_validos = [
    "darideveloper@gmail.com",
    "sample@gmail.com"
  ]
  
  # Comprobar se encuentra en la lista de remitentes válidos
  if remitente in remitentes_validos:

    # Código mágico para enviar el email
    # ...
    
    print (f"Correo enviado a {destinatario} desde {remitente}")

    # Devolver True indicando que el email se envió
    return True

  else:
    print (f"El remitente {remitente} no es válido")
    
    # devolver False indicando que el email no se envió
    return False
```

Aquí un segundo ejemplo con la función `limpiar_texto`:

```python
def limpiar_texto (texto:str) -> str:
  """ Quitrar espaciados de un texto y convertirlo a minúsculas

  Args:
    texto (str): Texto a limpiar
  
  Returns:
    str: Texto limpio
  """
  texto_limpio = texto.strip().lower()
  return texto_limpio
```

### autoDocstring

En VS Code, existe una extensión llamada [autoDocstring](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) que te ayuda a crear la documentación de una función de forma automática, solo colocando los tipos de datos y abriendo el comentario multilinea.

## Extra: Funciones lambda

**IMPORTANTE:** Este es un **tema avanzado**, y **no es necesario aprenderlo si recién estas empezando con python**, pero si te interesa, puedes leerlo.

Las funciones lambda son funciones **anónimas** (sin nombre) que se pueden crear en una sola linea.

Para el siguiente ejemplo se hace uso de la `map`, que reciben como argumento una función, pero no se abordará a detalle en este post.
  
```python
# Datos de usuarios
users_data = [
  {
    "name": "sample 1",
    "age": 22
  },
  {
    "name": "sample 2",
    "age": 18 
  },
  {
    "name": "sample 3",
    "age": 25
  },
  {
    "name": "sample 4",
    "age": 17
  },
  {
    "name": "sample 5",
    "age": 30
  }
]

# Obtener los nombres de los usuarios
users_names = list(map (lambda user: user["name"], users_data))
print (list (users_names))
# >> ['sample 1', 'sample 2', 'sample 3', 'sample 4', 'sample 5']
```

En el ejemplo anterior, la función `lambda` es `lambda user: user["name"], users_data`
Está función recibe un dato: `user` y devuelve `user["name"]`.

Por su parte, la función `map` recibe como argumento una función y una lista, y devuelve una lista con los resultados de aplicar la función lambda a cada elemento de la lista.
En pocas palabras, **Aplica una función a cada elemento de una lista y nos devuelve el resultado**.

A continuación se resuelve el mismo ejemplo, pero con una función normal:

```python
def get_user_name (user):
  return user["name"]

users_data = [
  {
    "name": "sample 1",
    "age": 22
  },
  {
    "name": "sample 2",
    "age": 18 
  },
  {
    "name": "sample 3",
    "age": 25
  },
  {
    "name": "sample 4",
    "age": 17
  },
  {
    "name": "sample 5",
    "age": 30
  }
]

# Obtener los nombres de los usuarios
users_names = list(map (get_user_name, users_data))
print (list (users_names))
# >> ['sample 1', 'sample 2', 'sample 3', 'sample 4', 'sample 5']
```

El funcionamiento y resultados son los mismos: **Aplica una función a cada elemento de una lista y nos devuelve el resultado** (los nombres de los usuarios).
