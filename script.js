const img_python = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
const img_excel = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
const img_sql = "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
const img_powerbi = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png"
const img_frontend = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Front-end-logo-color%402x.png/220px-Front-end-logo-color%402x.png"
const img_matlab = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/220px-Matlab_Logo.png"

let cont_skills = 0;

function addSkill(skillName, skillImage, skillDescription) {
    // Crea un nuevo elemento div para la skill
    const skillElement = document.createElement("div");
    skillElement.classList.add("skill_info");

    // Agrega la imagen a lado de la skillName para que queden juntos
    const skillTitle = document.createElement("div");
    skillTitle.classList.add("skill_title");
    skillElement.appendChild(skillTitle);

    const skillImageElement = document.createElement("img");
    skillImageElement.src = skillImage;
    skillImageElement.alt = skillName;
    skillTitle.appendChild(skillImageElement);

    const skillNameElement = document.createElement("h3");
    skillNameElement.textContent = skillName;
    skillTitle.appendChild(skillNameElement);

    // Agrega la descripción de la skill
    const skillDescriptionElement = document.createElement("p");
    skillDescriptionElement.textContent = skillDescription;
    skillElement.appendChild(skillDescriptionElement);

    // Agrega la skill al DOM
    const skillsElement = document.querySelector(".skills");
    skillsElement.appendChild(skillElement);

}


addSkill("Python", img_python, "Manejo de librerías como Numpy, Pandas, Matplotlib, Scikit-learn, etc. para el análisis de datos y machine learning.");
addSkill("Excel", img_excel, "Manejo de tablas dinámicas, gráficos, fórmulas, macros, etc. para el análisis y manipulación de datos.");
addSkill("SQL", img_sql, "Manejo de consultas básicas y avanzadas para el manejo de datos.");
addSkill("Power BI", img_powerbi, "Creación de reportes y dashboards para la visualización de datos.");
addSkill("Frontend", img_frontend, "Manejo de HTML, CSS y Javascript para la creación de páginas web.");
addSkill("Matlab", img_matlab, "Conocimiento y uso del lenguaje.");


// Lets do something like it but with the projects

function addProject(projectName, projectsubs, projectDescription, projectLink) {
    // Crea un nuevo elemento div para el proyecto
    const projectElement = document.createElement("div");
    projectElement.classList.add("project_info");

    // put the project name as the projectLink
    const projectTitle = document.createElement("a");
    projectTitle.classList.add("project_title");
    projectTitle.target = "_blank";
    projectTitle.href = projectLink;
    projectElement.appendChild(projectTitle);

    const projectNameElement = document.createElement("h3");
    projectNameElement.textContent = projectName;
    projectTitle.appendChild(projectNameElement);

    //Crea un div para info del proyecto
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project_info_container");
    projectElement.appendChild(projectInfo);

    // Agrega la descripción del proyecto
    const projectDescriptionElement = document.createElement("p");
    projectDescriptionElement.textContent = projectDescription;
    projectInfo.appendChild(projectDescriptionElement);

    // Agrega las subs del proyecto
    const projectSkillsElement = document.createElement("div");
    for (var i = 0; i < projectsubs.length; i++) {
        const projectSkillElement = document.createElement("span");
        projectSkillElement.classList.add("project_skill");
        projectSkillElement.textContent = projectsubs[i];
        projectSkillsElement.appendChild(projectSkillElement);
    }
    projectInfo.appendChild(projectSkillsElement);

    // Agrega el proyecto al DOM
    const projectsElement = document.querySelector(".projects_container");
    projectsElement.appendChild(projectElement);
}

addProject("Research Rising Stars", ['Python', 'ML'], "Búsqueda de futuras estrellas en la literatura por medio de una base de datos con más de 100, 000 datos, se utilizaron herramientasde ML como la regresión y el clustering. Además de análisis de los resultados por mediode visualizaciones.", "https://github.com/calberto05/reseach_rising_stars");
addProject("Análisis de calidad del aire", ['Python', 'Data Viz'], "Análisis de datos de calidad del aire y contaminantes en México por medio de visualizaciones y modelos de machine learning.", "https://github.com/calberto05/air_quality_analysis");
addProject("Análisis generación de gas y aceite en México 2018-2022", ['Power BI', 'SQL'], "Análisis de la generación de gas y aceite en México por medio de visualizaciones y consultas a una base de datos.", "https://github.com/calberto05/generacion_gas_aceite");
addProject("Generación Red Neuronal para clasificación de prendas de ropa", ['Python', 'ML'], "Generación de una red neuronal para la clasificación de prendas de ropa por medio de imágenes.", "https://github.com/calberto05/FashionMnist_neural_network");
addProject("Generación Red Neuronal para clasificación de Notas de Banco Falsas", ['Python', 'ML'], "Generación de una red neuronal para la clasificación de notas de banco falsas por medio de imágenes.", "https://github.com/calberto05/bank_notes_ML")
addProject("Creación de página web para grupo estudiantil.", ["Frontend", "Backend"], "Creación de página web para el grupo estudiantil ESTRATEGO en el cual se subían videos por medio de una base de datos sql conectada con YT.", "https://www.google.com/")

// lets do an experience function
function addExperience(name, subjects, date, year, description, img) {
    // Crea un nuevo elemento div para la experiencia
    const experienceElement = document.createElement("div");
    experienceElement.classList.add("experience_info");

    // Agrega la imagen a lado de la experiencia para que queden juntos
    const experienceTitle = document.createElement("div");
    experienceTitle.classList.add("experience_title");
    experienceElement.appendChild(experienceTitle);

    const experienceImageElement = document.createElement("img");
    experienceImageElement.src = img;
    experienceImageElement.alt = name;
    experienceTitle.appendChild(experienceImageElement);

    const experienceNameElement = document.createElement("h3");
    experienceNameElement.textContent = name;
    experienceTitle.appendChild(experienceNameElement);



    // Agrega las materias de la experiencia como lista
    const experienceSubjectsTitleElement = document.createElement("p");
    experienceSubjectsTitleElement.textContent = "Competencias:";
    experienceElement.appendChild(experienceSubjectsTitleElement);

    const experienceSubjectsElement = document.createElement("ul");
    experienceSubjectsElement.classList.add("experience_subjects");
    experienceElement.appendChild(experienceSubjectsElement);
    for (var i = 0; i < subjects.length; i++) {
        const experienceSubjectElement = document.createElement("li");
        experienceSubjectElement.classList.add("experience_subject");
        experienceSubjectElement.textContent = subjects[i];
        experienceSubjectsElement.appendChild(experienceSubjectElement);
    }

    // Agrega la descripción de la experiencia
    const experienceDescriptionElement = document.createElement("p");
    experienceDescriptionElement.textContent = "Descripción: " + description;
    experienceElement.appendChild(experienceDescriptionElement);

    // Agrega la fecha de la experiencia
    const experienceDateElement = document.createElement("p");
    experienceDateElement.textContent = "Date: " + date;
    experienceElement.appendChild(experienceDateElement);

    const experiencesElement = document.querySelector(".experiences_container");

    //put the year if there is the year isn't there yet, insdie a div
    if (year != null) {
        const experienceYearElement = document.createElement("div");
        experienceYearElement.classList.add("experience_year");
        // add a span to put the year
        const experienceYearSpanElement = document.createElement("span");
        experienceYearElement.appendChild(experienceYearSpanElement);
        experienceYearSpanElement.textContent = year;
        experiencesElement.appendChild(experienceYearElement);
    }
    // if not put a blank space 
    else {
        const experienceYearElement = document.createElement("div");
        experienceYearElement.classList.add("experience_year_blank");
        experienceYearElement.textContent = " ";
        experiencesElement.appendChild(experienceYearElement);
    }

    // Agrega la experiencia al DOM
    experiencesElement.appendChild(experienceElement);
}

addExperience("Servicio Social Data Science OEM", ["Data Science", "Data Analysis"], "Agosto 2023-Actualidad", 2023, "Análisis de datos de calidad del aire y contaminantes en México por medio de visualizaciones y modelos de machine learning.", "https://pbs.twimg.com/profile_images/1111787884196052992/hxDvukv0_400x400.png")
addExperience("Servicio Social DIF Atizapan", ["Análisis"], "Agosto 2022-Diciembre 2022", 2022, "Entender Problematicas y crear base de datos en Excel para facilitar el trabajo de los trabajadores del DIF Atizapan.", "https://play-lh.googleusercontent.com/JJTIl1SeH9xk0dvnzNB5vBB3QqSITpRIX-MCDKpSFuoG3hh35e6uT_wQho_cCtskkQ=w240-h480-rw")
addExperience("Líder de área diseño computacional en grupo estudiantil ESTRATEGO.", ["Liderazgo", "IT"], "Agosto 2020-Junio 2021", 2021, "Lider de área computacional en Estratego, grupo estudiantil para ayudar a la eduación de niños afectados por pandemia.", "img/estratego.enc")

// lets do an courses function
function addCourse(name, date, description, img, link) {
    // Crea un nuevo elemento div para la experiencia
    const courseElement = document.createElement("a");
    courseElement.classList.add("course");
    courseElement.target = "_blank";
    courseElement.href = link;
    courseElement.classList.add("course_info");

    // Agrega la imagen a lado del curso para que queden juntos
    const courseTitle = document.createElement("div");
    courseTitle.classList.add("course_title");
    courseElement.appendChild(courseTitle);

    const courseImageElement = document.createElement("img");
    courseImageElement.src = img;
    courseImageElement.alt = name;
    courseTitle.appendChild(courseImageElement);

    const courseNameElement = document.createElement("h3");
    courseNameElement.textContent = name;
    courseTitle.appendChild(courseNameElement);

    // Agrega la descripción del curso
    const courseDescriptionElement = document.createElement("p");
    courseDescriptionElement.textContent = description;
    courseElement.appendChild(courseDescriptionElement);

    // Agrega la fecha del curso
    const courseDateElement = document.createElement("p");
    courseDateElement.textContent = date;
    courseElement.appendChild(courseDateElement);

    // Agrega el curso al DOM
    const coursesElement = document.querySelector(".courses_container");
    coursesElement.appendChild(courseElement);
}

addCourse("Python for everybody", "2021", "Especialización en Coursera de python de 5 cursos.", "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~DPZKGMMFTH6T/CERTIFICATE_LANDING_PAGE~DPZKGMMFTH6T.jpeg", "https://coursera.org/share/ed10d45b74a2b6fd05a0f0ae25267974")
addCourse("Ask Questions to Make Data-Driven Decisions", "2023", "Segundo curso de especialización en cursera por Google, Data Analitics", "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~R4HQE727KDVG/CERTIFICATE_LANDING_PAGE~R4HQE727KDVG.jpeg", "https://coursera.org/share/6ea3b7cf9d20c8738b81be0cd09be04a")
addCourse("Foundations: Data, Data, Everywhere", "2023", "Primer curso de especialización en cursera por Google, Data Analitics", "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UJJY4FN3765X/CERTIFICATE_LANDING_PAGE~UJJY4FN3765X.jpeg", "https://coursera.org/share/70bc4c86bb15b00b92a13ec6230d7dae")
addCourse("Introduction to the Internet of Things and Embedded Systems", "2022", "Curso sobre Internet of things", "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CCDECDMPA48Y/CERTIFICATE_LANDING_PAGE~CCDECDMPA48Y.jpeg", "https://coursera.org/share/05a11bb1cee6f14cdc029c31cf3e1f1a")

// Obtener todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu a');

// Función para verificar el desplazamiento y resaltar el elemento del menú activo
function onScroll() {
    // Obtener la posición actual de desplazamiento
    const scrollPosition = window.scrollY;

    // Recorrer cada sección
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        // Verificar si la sección está visible en la ventana
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight - 100) {
            // Remover la clase 'active' de todos los enlaces del menú
            menuLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Agregar la clase 'active' al enlace del menú correspondiente a la sección visible
            document.querySelector(`.menu a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

const dynamicTitles = [
    "Data Scientist",
    "Web Developer",
    "Data Analyst"
];

let currentTitleIndex = 0;
let titleElements = document.getElementsByClassName('dynamicTitle');

function changeDynamicTitle() {
    let dynamicText = dynamicTitles[currentTitleIndex];
    let index = 0;

    let interval = setInterval(function () {
        for (let i = 0; i < titleElements.length; i++) {
            let titleElement = titleElements[i];
            titleElement.textContent = dynamicText.slice(0, index);
        }
        index++;

        if (index > dynamicText.length) {
            clearInterval(interval);
            setTimeout(eraseText, 1000); // Tiempo para mostrar el texto antes de borrarlo
        }
    }, 100); // Tiempo entre cada letra mostrada (ajusta según sea necesario)
}

function eraseText() {
    let index = dynamicTitles[currentTitleIndex].length;

    let interval = setInterval(function () {
        for (let i = 0; i < titleElements.length; i++) {
            let titleElement = titleElements[i];
            titleElement.textContent = dynamicTitles[currentTitleIndex].slice(0, index);
        }
        index--;

        if (index === 0) {
            clearInterval(interval);
            currentTitleIndex = (currentTitleIndex + 1) % dynamicTitles.length;
            setTimeout(changeDynamicTitle, 500); // Tiempo antes de iniciar el próximo texto
        }
    }, 100); // Tiempo entre cada letra borrada (ajusta según sea necesario)
}

// Iniciar la animación
changeDynamicTitle();
