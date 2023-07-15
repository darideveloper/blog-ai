---
title: "Configurar Git como un Pro | Ajustes y opciones principales después de instalar Git"
date: '2023-07-14'
description: 'Comandos para configurar git como un pro: usuario, correo, editor de código, etc. Aprende a configurar git como un pro con este tutorial.'
image: '/imgs/configurar-git/banner.webp'
categories: ["git"]
---

Contenido

- [Usuario y correo](#usuario-y-correo)
- [Editor de código](#editor-de-código)
- [Default git commit](#default-git-commit)
- [Archivos excluidos](#archivos-excluidos)
- [Referencias](#referencias)


# Usuario y correo

para funcionar correctamente, **git necesita saber quien eres**, para ello debes configurar tu usuario y correo usando los siguientes comandos:

**Nota:** preferentemente **usa el mismo correo que usas en github**, gitlab, etc. Si aún no tienes una cuenta en github, puedes crear una cuenta gratis en [github.com]

```bash
$ git config --global user.name "daridev"
$ git config --global user.email "darideveloper@gmail.com"
```

En el comando anterior: 
* `git` es la herramienta que estamos usando,
* `config` es el comando que vamos a ejecutar,
* `--global` es una opción que indica que la configuración se va a aplicar a todos los repositorios,
* `user.name` es el nombre de usuario que vamos a usar,
* `user.email` es el correo que vamos a usar.

# Editor de código

Después de instalar, podemos cambiar con que editor de código vamos a trabajar, por defecto git usa vim, pero podemos cambiarlo a nuestro editor favorito, por ejemplo, si usamos **visual studio code**, podemos configurarlo con el siguiente comando:

```bash
$ git config --global core.editor "code --wait"
```

Al escribir **"code --wait"** estamos indicando que queremos usar **visual studio code**, y que queremos que git **espere a que cerremos el editor para continuar** con el proceso.

# Default git commit

El comando `commit` es muy importante, ya que nos permite **guardar los cambios que realizamos en nuestro proyecto**, y **agregar un mensaje** que nos permita identificar que cambios realizamos.

Nosotros podemos establecer una "plantilla" que nos ayude posteriormente.

Para ello, puedes crear un archivo en `C:\Users\{tu-usuario}\.gitmessage.txt` con el siguiente contenido:

```bash
feat/chore/fix/doc (scope): commit name

# commit
# details
# here
```

Los detalles de este archivo y como crear commits, se verán a mas detalle en [comandos básicos de Git > commits](/posts/comandos-basicos-git#commits).
Posteriormente usar el siguiente comando para indicarle a git que use ese archivo como plantilla:

```bash	
$ git config --global commit.template ~/.gitmessage.txt
```

el `~` indica que el archivo está en la carpeta de usuario, y el `.gitmessage.txt` es el nombre del archivo.

# Archivos excluidos

En cada proyecto, podemos crear un archivo llamado `.gitignore`, el cual nos permite indicarle a git que archivos o carpetas **no queremos que sean tomados en cuenta**.

Puedes leer más sobre el archivo `.gitignore` en [comandos básicos de Git > gitignore](/posts/comandos-basicos-git#gitignore).

Pero es común que siempre queramos ignorar los mismos archivos, por ejemplo, **los archivos de configuración de visual studio code**, los **.env**, o **los archivos de configuración temporales de nuestro proyecto**.

Para ello, creamos un archivo en `C:\Users\{tu-usuario}\.gitignore_global` con (por ejemplo) el siguiente contenido:

```bash
temp.*
.vscode
.env
temp
__pycache__
```

En el archivo anterior:
* `temp.*` indica que queremos ignorar todos los archivos que comiencen con "temp.", como por ejemplo "temp.txt", "temp.py", etc.
* `.vscode` indica que queremos ignorar la carpeta .vscode (autogenerada por visual studio code)
* `.env` indica que queremos ignorar el archivo .env, donde se suelen guardar contraseñas y datos importantes. **No subas este archivo a github**. Más info sobre el archivo .env en python en [.env Python | ¿Que son y como usar las variables de entorno en Python?](/posts/dotenv-python)
* `/temp` indica que queremos ignorar la carpeta /temp
* `__pycache__` indica que queremos ignorar la carpeta __pycache__, donde se guardan archivos temporales de python.

Posteriormente, usamos el siguiente comando para indicarle a git que use ese archivo como plantilla:

```bash
$ git config --global core.excludesfile ~/.gitignore_global
```

# Referencias

* [https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)