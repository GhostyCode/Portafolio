// Fuente única de datos del portafolio.
// Consumida por los componentes .astro (Experience, Projects, index) y por la
// terminal interactiva (TerminalWidget), para no duplicar contenido.
// Todo el contenido aquí es serializable (solo strings), de modo que también
// puede enviarse al cliente para la terminal.

export interface Profile {
  name: string;
  handle: string;
  role: string;
  specialties: string[];
  about: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export const PROFILE: Profile = {
  name: "Santander Iglesias",
  handle: "GhostyCode",
  role: "Systems Engineer | Backend Developer",
  specialties: [
    "SQL Server",
    "ETL Developer",
    "Python",
    "Django",
    "SSIS",
    "Node.js",
    "React",
  ],
  about:
    "Ingeniero de Sistemas y desarrollador backend de Colombia. Trabajo en el " +
    "desarrollo de aplicaciones web a medida, procesos ETL y análisis de datos, " +
    "administrando bases de datos SQL Server y construyendo integraciones con " +
    "Python/Django y Node.js/React. Integro inteligencia artificial como parte " +
    "genuina de mi flujo de desarrollo: la uso para acelerar prototipos, revisar " +
    "código y resolver problemas más rápido, sin dejar de entender lo que construyo.",
  location: "Colombia",
  email: "santander12342011@gmail.com",
  github: "https://www.github.com/GhostyCode/",
  linkedin: "https://www.linkedin.com/in/santander-iglesias/",
};

export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Rol",
    items: ["Systems Engineer", "Backend Developer"],
  },
  {
    category: "Datos & ETL",
    items: ["SQL Server", "ETL", "SSIS", "Análisis de datos"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["React", "Astro", "Tailwind CSS"],
  },
  {
    category: "Flujo de trabajo",
    items: ["IA aplicada al desarrollo", "Git", "Metabase"],
  },
];

export interface ExperienceEntry {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    date: "Actualmente...",
    title: "Analista de Sistemas",
    description:
      "Actualmente me desempeño como **Analista de Sistemas**, administrando el software del área de la salud y la base de datos en **SQL Server**. Diseño y optimizo procesos **ETL** utilizando **CTE, triggers, subconsultas y procedimientos almacenados**, mejorando el rendimiento y automatizando tareas que anteriormente eran manuales. Además, desarrollo **dashboards** con información en tiempo real para apoyar la toma de decisiones.\n\nTambién desarrollo aplicaciones web con **Next.js**, **Django**, **Docker**, **Tailwind CSS**, **jQuery** y **Pandas**. Entre mis proyectos destaca un sistema interno de gestión presupuestal que permite controlar el presupuesto y la ejecución de cada área de la empresa.",
  },
  {
    date: "Septiembre 2022",
    title: "Analista de Sistemas de información",
    description:
      "Durante mi trabajo en este puesto, asumí el rol de analista desarrollador, colaborando en el desarrollo de una aplicación web destinada a realizar visitas domiciliarias. Durante este proceso, contribuí implementando mejoras utilizando PHP y MySQL.",
  },
];

// Los proyectos guardan sus tags como strings (claves de TAGS en Projects.astro)
// y una clave de imagen (`image`), para que este archivo sea serializable y la
// terminal pueda consumirlo sin depender de componentes de iconos ni de imports
// de imágenes.
export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  tags: string[];
}

export const PROJECTS: ProjectEntry[] = [
  {
    id: "cafecito",
    title: "Cafecito Para Orar - Ecommerce",
    description:
      "Plataforma ecommerce para la venta de productos físicos como libros. Creado desde cero con Wordpress, CSS, y PHP.",
    link: "https://cafecitoparaorar.com",
    github: "#",
    image: "cafecito",
    tags: ["WORDPRESS", "PHP"],
  },
  {
    id: "dashboard",
    title: "Dashboard de Análisis de Atenciones en IPS",
    description:
      "Dashboard desarrollado en Metabase para el análisis de los datos de atenciones realizadas en una IPS, evaluando diversos indicadores como la cantidad de citas asignadas, citas perdidas, desempeño médico, entre otros factores.",
    link: "https://cafecitoparaorar.com",
    github: "#",
    image: "dashboard",
    tags: ["PYTHON"],
  },
];
