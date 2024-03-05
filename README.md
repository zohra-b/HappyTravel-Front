# Transformando Sueños en Realidad: Happy Travel 
<div align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRau13DSahkZKYSvDdVdIHsY5ILYaXyD7o6E5Qm9169Q&s" width="100px">
   <img src="./laravel/public/assets/Logo.svg" width="180px">
</div>

|  
| :---: | :---: | :---: | :---: |

## 📓 Tabla de contenidos 
   1. [Información General](#información-general)
   2. [Mockups](#mockups)
   3. [Tecnologías](#tecnologías)
   4. [Herramientas](#herramientas)


## 🗃 Información General
¿Quién no disfruta de la emoción de viajar y descubrir nuevos lugares? La compañía HappyTravel nos ha contratado para desarrollar una plataforma web que permita a los usuarios compartir sus destinos de ensueño y las razones que los motivan. El objetivo es que tanto los visitantes no registrados como los usuarios autenticados puedan explorar y compartir sus sueños de viaje. Los usuarios autenticados tendrán la capacidad adicional de crear, editar y eliminar sus propias entradas de destinos.

## Mockups

#### Atomic Design
<img src="./laravel/public/assets/atomic-desing.png" width="400px">

#### Versión Desktop
<img src="./laravel/public/assets/desktop.png" width=900px>

## 🛠 Tecnologías
<div>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />  
<img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/php.svg" alt="php" width="40" height="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="react" width="40" height="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg" alt="Laravel" width="40" height="40"/>
</div>

<div>

Versiones : 
Next: "14.1.0",
React: "^18",
PHP 8.2.12,


</div>

## 🛠 Herramientas
<div>
<img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
<img src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png" alt="vscode" width="40" heigth="40"/>
<img src="https://w7.pngwing.com/pngs/115/721/png-transparent-trello-social-icons-icon.png" alt="trello" width="40" heigth="40"/>
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width="40" heigth="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/xampp.png" alt="react" width="40" height="40"/> </div>

## Instalación

Breve descripción de como poder ver nuestro proyecto, para ejecutarlo necesitas tener conocimientos previos sobre como funciona Mamp/Xamp y tener instalado composer
1. Clona este repositorio en tu máquina local:

2. Coloca la carpeta del proyecto en la carpeta de proyectos de tu MAMP o XAMPP según sea el caso.
3. Crea la base de datos y la tabla:
- Abre tu gestor de bases de datos (por ejemplo, phpMyAdmin).
- Crea una nueva base de datos con el nombre  "happy_travel" aquí las tablas las realizaremos desde tú editor de código.
4. Abre en tú editor de texto el proyecto y luego dentro de la carpeta laravel en la terminal debes poner
`composer install`
y luego, el cuál hará que se carguen las tablas del proyecto
`php artisan migrate`
Esta es una aplicación para guardar y compartir destinos, entoncés para que tener algunos datos en la base de datos, hemos creado los seeders los cuales te permitirán tener 10 destininos estos no podrás borrarlos, ni editarlos a diferencia de los que cargues tú, para poder tener estos destinos debes en la terminal poner 
`php artisan db:seed --class=DestinationsTableSeeder`

y finalmente para ver el proyecto en tú navegador ejecuta el comando 

`php artisan server`

Y disfruta de la experiencia de ver y guardar destinos.

