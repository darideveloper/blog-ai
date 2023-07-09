---
title: 'La mayoría de personas no hacen esto al instalar GIT. Tutotial para instalar git en windows paso a paso'
date: '2023-07-01'
description: 'Guia paso a paso para instalar Git en Windows, con capturas de pantalla'
image: '/imgs/instalar-git-windows/banner.webp'
categories: ["tutorial", "git", "desarrollo"]
---

La instalación de Git en Windows es muy sencilla, basicamente es *"siguiente", "siguiente", "siguiente", "sí, acepto vender mi alma", "instalar".*

Pero en particular **los pasos 6 y 8 son los mas importantes** que muchos usuarios se saltan, y por eso tienen problemas al usar git.

## 1. Ir a la página oficial de git (enlace abajo) y seleccionar instalador para tu sistema (puedes comprobarlo en ajustes > sistema > acerca de)
 
[Página oficial de git](https://git-scm.com/)

![captura de pantalla de: Página de descargas](/imgs/instalar-git-windows/1_página_de_descargas.png)

![captura de pantalla de: Seleccionar instalador](/imgs/instalar-git-windows/1_seleccionar_instalador.png)

## 2 Abrir instalador
![captura de pantalla de: Abrir instalador](/imgs/instalar-git-windows/2_abrir_instalador.png)

## 3 Dar permisos al instalador
![captura de pantalla del paso: 3 dar permisos al instalador](/imgs/instalar-git-windows/3_dar_permisos_al_instalador.png)

## 4 Aceptar la licencia
![captura de pantalla de: Aceptar la licencia](/imgs/instalar-git-windows/4_aceptar_la_licencia.png)

## 5 Seleccionar ruta de instalación
Nota: preferentemente, **dejar por defecto la ruta de instalación**
![captura de pantalla de: Seleccionar ruta de instalación](/imgs/instalar-git-windows/5_seleccionar_ruta_de_instalación.png)

## 06 Seleccionar todos los componentes
`Importante`: al hacer esto nos aseguramos de que **git funcione correctamente** y de **tener todas las herramientas necesarias**
![captura de pantalla de: Seleccionar todos los componentes](/imgs/instalar-git-windows/6_seleccionar_todos_los_componentes.png)

## 07 Dejar por defecto las opciones de acceso directo
![captura de pantalla de: Dejar por defecto las opciones de acceso directo](/imgs/instalar-git-windows/7_dejar_por_defecto_las_opciones_de_acceso_directo.png)

## 08 Seleccionar un editor de código
Selecciona cualquiera que ya tengas instalado (preferentemente, y si ya lo tienes instalado, "Visual Studio Code") en tu pc, o deja por defecto Nano.
![captura de pantalla de: Seleccionar un editor de código](/imgs/instalar-git-windows/8_seleccionar_un_editor_de_código.png)

## 09 Dejar por defecto el nombre de rama
![captura de pantalla de: Dejar por defecto el nombre de rama](/imgs/instalar-git-windows/9_dejar_por_defecto_el_nombre_de_rama.png)

## 10 Dejar por defecto los ajustes del path
![captura de pantalla de: Dejar por defecto los ajustes del path](/imgs/instalar-git-windows/10_dejar_por_defecto_los_ajustes_del_path.png)

## 11 Dejar por defecto los ajustes de ssh
![captura de pantalla de: Dejar por defecto los ajustes de ssh](/imgs/instalar-git-windows/11_dejar_por_defecto_los_ajustes_de_ssh.png)

## 12 Dejar por defecto los ajustes de http
![captura de pantalla de: Dejar por defecto los ajustes de http](/imgs/instalar-git-windows/12_dejar_por_defecto_los_ajustes_de_http.png)

## 13 Dejar por defecto los ajustedes de final de linea
![captura de pantalla de: Dejar por defecto los ajustedes de final de linea](/imgs/instalar-git-windows/13_dejar_por_defecto_los_ajustedes_de_final_de_linea.png)

## 14 Dejar por defecto el emulador de terminal
![captura de pantalla de: Dejar por defecto el emulador de terminal](/imgs/instalar-git-windows/14_dejar_por_defecto_el_emulador_de_terminal.png)

## 15 Dejar por defecto el git pull
![captura de pantalla de: Dejar por defecto el git pull](/imgs/instalar-git-windows/15_dejar_por_defecto_el_git_pull.png)

## 16 Dejar por defecto el administrador de credenciales
![captura de pantalla de: Dejar por defecto el administrador de credenciales](/imgs/instalar-git-windows/16_dejar_por_defecto_el_administrador_de_credenciales.png)

## 17 Dejar por defecto las opciones adicionales
![captura de pantalla de: Dejar por defecto las opciones adicionales](/imgs/instalar-git-windows/17_dejar_por_defecto_las_opciones_adicionales.png)

## 18 Dejar por defecto las opciones experimentales
![captura de pantalla de: Dejar por defecto las opciones experimentales](/imgs/instalar-git-windows/18_dejar_por_defecto_las_opciones_experimentales.png)

## 19 Esperar a que la instalación termine
![captura de pantalla de: Esperar a que la instalación termine](/imgs/instalar-git-windows/19_esperar_a_que_la_instalación_termine.png)

## 20 Abrir git bash y finalizar instalación
![captura de pantalla de: Abrir git bash y finalizar instalación](/imgs/instalar-git-windows/20_abrir_git_bash_y_finalizar_instalación.png)

## 21 Comprobar el Git bash
Este es un programa que se instala junto con git, y nos permite usar git desde cualquier lugar.
![captura de pantalla de: Git bash](/imgs/instalar-git-windows/21_git_bash.png)

## 22 Comprobar instalación en cmd
1. Abre una ventana de cmd (ve a inicio y escribe "cmd")
2. Escribre `git --version`
3. Comprobar que te aparezca la versión de git
![captura de pantalla de: Comprobar instalación en cmd](/imgs/instalar-git-windows/22_comprobar_instalación_en_cmd.png)

## 23 Comprobar instalación desde powershell
1. Abre una ventana de powershell (ve a inicio y escribe "powershell")
2. Escribre `git --version`
3. Comprobar que te aparezca la versión de git
![captura de pantalla de: Comprobar instalación desde powershell](/imgs/instalar-git-windows/23_comprobar_instalación_desde_powershell.png)

## 24 Felicidades!
Ya tienes git instalado en tu computadora, ahora puedes usarlo para llevar un registro de los cambios que realizas en tus proyectos.