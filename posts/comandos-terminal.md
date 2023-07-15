---
title: "Comandos principales de terminal para desarrolladores"
date: '2023-07-14'
description: 'Comandos de terminal básicos, para linux y windows que cualquier programador debe saber'
image: '/imgs/comandos-terminal/banner.webp'
categories: ["cmd", "terminal", "powershell"]
---

Contenido

- [¿Que es una terminal (consola de comandos)?](#que-es-una-terminal-consola-de-comandos)
- [Diferencias entre CMD, PowerShell y Terminal](#diferencias-entre-cmd-powershell-y-terminal)
  - [CMD](#cmd)
  - [PowerShell](#powershell)
  - [Terminal](#terminal)
- [Anatomía de un comando](#anatomía-de-un-comando)
- [Comandos básicos de terminal](#comandos-básicos-de-terminal)
  - [pwd](#pwd)
  - [ls / dir](#ls--dir)
  - [cd](#cd)
    - [Rutas absolutas](#rutas-absolutas)
    - [Rutas relativas](#rutas-relativas)
    - [Moverse a la carpeta anterior](#moverse-a-la-carpeta-anterior)
  - [mkdir / md](#mkdir--md)
  - [touch / ni](#touch--ni)
  - [rm / del](#rm--del)
    - [Eliminar un archivo](#eliminar-un-archivo)
    - [Eliminar una carpeta](#eliminar-una-carpeta)


## ¿Que es una terminal (consola de comandos)?

Una terminal, también conocida como consola de comandos, es una **herramienta que nos permite ejecutar comandos** en nuestro sistema operativo.
Báscamante, hacer las mismas cosas que hacemos con el mouse de interfaz gráfica, pero con comandos.

Ejemplo: 
```bash
# moverte a una carpta
$ cd "C:\Users\daridev\Documents\"
```

## Diferencias entre CMD, PowerShell y Terminal

![imagen de las 3 terminales](/imgs/comandos-terminal/terminals.webp)

Practicamente los 3 hacen lo mismo, pero cada uno tiene sus ventajas y desventajas.

### CMD

CMD (Command Prompt) es la **consola de comandos de Windows, es la más antigua y la que tiene menos funcionalidades**.
**No se recomienda usarla**, pero varios de los comandos que veremos a continuación, funcionan en CMD.

### PowerShell

Powershell, también para windows, es una **consola de comandos más moderna**, que tiene más funcionalidades que CMD.

Posiblemnte las hayas usado antes sin darte cuenta, ya que algunos editores de código como **Visual Studio Code, la usan por defecto**.

### Terminal

La terminal es la **consola de comandos de Linux de linux**.
A diferencia de windows (donde podemos hacer cosas muy limitadas), en linux podemos hacer **casi cualquier cosa con la terminal**.

## Anatomía de un comando


Un comando se compone de 3 partes:
1. **Nombre del comando:** es el nombre del comando que vamos a ejecutar, por ejemplo: `cd`, `mkdir`, `touch`, etc.
2. **Argumentos:** son los valores que le pasamos al comando, por ejemplo: `cd "proyectos"`.
3. **Opciones:** son valores que le pasamos al comando para modificar su comportamiento, por ejemplo: `rm -r "carpeta"`.


Ejemplo:
```bash
$ rd -r "carpeta"
```

En el comando anterior:
* `rd` es el nombre del comando que vamos a ejecutar,
* `-r` es una opción que le pasamos al comando,
* `"carpeta"` es un argumento que le pasamos al comando.


## Comandos básicos de terminal

### pwd

*(Print Working Directory)*

Mostrar la *ruta/carpeta/directo* donde nos encontramos actualmente.

> Muchas terminales muestran la ruta actual en el prompt, pero no todas (o incluso las podemos configurar para que oculten la ruta actual), por lo que este comando nos ayuda a saber donde estamos.

```bash
# Linux
$ pwd
# /home/daridev
```

```powershell
# Windows
> pwd
# C:\Users\daridev
```

### ls / dir

*(List / Directory)*

Listar los archivos y carpetas de la ruta actual.

```bash
$ ls
# Documents  Downloads  Music  Pictures  Videos sample.text
```

```powershell
> dir
# Documents  Downloads  Music  Pictures  Videos sample.text
```

### cd

*(Change Directory)*

Cambiar de directorio.

#### Rutas absolutas

Indicar la ruta completa de la carpeta a la que queremos ir.

```bash
$ cd "/home/daridev/Documents"
```

```powershell
> cd "C:\Users\daridev\Documents"
```

#### Rutas relativas

Moverte a una carpeta que se encuentre dentro de la carpeta actual.

```bash
$ cd "Documents"
```

```powershell
> cd "Documents"
```

#### Moverse a la carpeta anterior

Desplazarse a la carpeta anterior o carpeta padre de donde nos encontremos.

> Por ejemplo, si estamos dentro de la carpeta "/proyectos/proyecto1", al ejecutar el comando "cd ..", nos moveremos a la carpeta "/proyectos"

```bash
$ cd ".."
```

```powershell
> cd ".."
```

### mkdir / md

*(Make Directory)*

Crear una carpeta en la ruta actual.

```bash
$ mkdir "nueva carpeta"
```

```powershell
> md "nueva carpeta"
```

### touch / ni

Crear un archivo vacío en la ruta actual.

```bash
$ touch "nuevo archivo.txt"
```

```powershell
> ni "nuevo archivo.txt"
```

### rm / del

#### Eliminar un archivo

*(Remove / Delete)*

```bash
$ rm "archivo.txt"
```

```powershell
> del "archivo.txt"
```

#### Eliminar una carpeta

*(Remove Directory)*

Si la carpeta no está vacía, añadir al final `-r "carpeta"`, para eliminar la carpeta y todo su contenido.

```bash
$ rm "carpeta"
```

```powershell
> rm "carpeta"
```
