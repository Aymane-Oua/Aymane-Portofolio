export const personalInfo = {
  name: 'Aymane Ouabdelmoumen',
  title: 'Data Scientist & Machine Learning Engineer',
  bio: "Passionate about artificial intelligence, machine learning, and data analysis. I love turning data into value for the business.",
  location: 'Morocco, Oujda',
  email: 'aymaneouabdelmoumen@gmail.com',
  phone: '+212 709915773',
  avatar: 'Moumen.jpg',
};

export const skills = [
  // 🔷 Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Bootstrap', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },

  // 🧠 IA & Data Science
  { name: 'Python', level: 90, category: 'backend' },
  { name: 'Machine Learning', level: 85, category: 'backend' },
  { name: 'Scikit-learn', level: 85, category: 'backend' },
  { name: 'TensorFlow', level: 80, category: 'backend' },
  { name: 'PyTorch', level: 80, category: 'backend' },
  { name: 'OpenCV', level: 80, category: 'backend' },
  { name: 'Matplotlib', level: 90, category: 'backend' },
  { name: 'Pandas', level: 88, category: 'backend' },
  { name: 'NumPy', level: 90, category: 'backend' },
  { name: 'Stats', level: 80, category: 'backend' },
  { name: 'Time Series Analysis', level: 75, category: 'backend' },
  { name: 'Data Visualization', level: 85, category: 'backend' },
  { name: 'Data Analysis', level: 85, category: 'backend' },
  { name: 'Data Engineering', level: 80, category: 'backend' },
  { name: 'Data Mining', level: 75, category: 'backend' },

  // 🛠️ Outils & DevOps
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'Linux', level: 80, category: 'tools' },
  { name: 'Git / Github', level: 90, category: 'tools' },
  { name: 'CI/CD', level: 70, category: 'tools' },
  { name: 'Agile Methodologies', level: 80, category: 'tools' },
  { name: 'Jupyter Notebooks', level: 85, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },

  // 📊 Visualisation & BI
  { name: 'Tableau', level: 70, category: 'design' },
  { name: 'Power BI', level: 75, category: 'design' },
  { name: 'PostgreSQL', level: 70, category: 'design' },
  { name: 'SQL', level: 90, category: 'design' },
  { name: 'Excel', level: 85, category: 'design' },
  { name: 'Data Storytelling', level: 75, category: 'design' },
  { name: 'Business Intelligence', level: 70, category: 'design' },
  { name: 'Data Warehousing', level: 75, category: 'design' },
  { name: 'Data Governance', level: 60, category: 'design' },
  { name: 'Data Quality', level: 70, category: 'design' },
];

export const projects = [
  {
    id: '1',
    title: 'Analyse d’images par IA',
    description: "Classification, détection d'objets et segmentation d’images via TensorFlow et PyTorch.",
    image: 'analuseur.png',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker']
  },
  {
    id: '2',
    title: "Tableau de bord d'analyse de données",
    description: "Création d’un dashboard interactif de KPIs métiers avec Power BI et PostgreSQL.",
    image: 'TAbleau.jpg',
    technologies: ['Tableau', 'Power BI', 'Python', 'PostgreSQL']
  },
  {
    id: '3',
    title: "Prévision de la demande",
    description: "Modèles de séries temporelles pour anticiper les ventes et optimiser l’inventaire.",
    image: 'previous .png',
    technologies: ['Python', 'Scikit-learn', 'Stats', 'Time Series Analysis']
  },
  
  {
    id: '4',
    title: "FlowCell - Intelligence Artificielle",
    description: "Équipe spécialisée dans l'utilisation de l'IA et de l'apprentissage automatique pour traiter des données, faire des prédictions, et proposer des solutions innovantes.",
    image: "flowcell.jpg",
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Analysis', 'Predictions']
  },
  {
    id: '5',
    title: "Zoravision - Détection des Déchets sur les Plages",
    description: "Équipe utilisant des drones, l'intelligence artificielle et le modèle YOLOv8 pour détecter et classifier les déchets afin d'améliorer l'efficacité du nettoyage des plages.",
    image: "drone.jpg",
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Drones', 'Object Detection']
  },
];

export const experiences = [
  {
    id: '1',
    company: 'Tech Innovation Labs',
    position: 'Data Scientist',
    duration: '2023 - Present',
    description: [
      'Creating predictive models from customer data.',
      'Automating data pipelines and deploying models.',
      'Presenting results through interactive dashboards.'
    ],
    technologies: ['Python', 'Scikit-learn', 'Tableau', 'Docker']
  },
  {
    id: '2',
    company: 'University of Oujda',
    position: 'Stagiaire en Machine Learning',
    duration: '2022 - 2023',
    description: [
      "Data preprocessing and model experimentation.",
      "Performance analysis and report generation.",
      "Development of interactive notebooks with visualization."
    ],
    technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas']
  },
    {
    id: '3',
    company: 'Zoravision (Projet REMEDIES)',
    position: 'Computer Vision Engineer (Freelance)',
    duration: '2025 - Present',
    description: [
      "Participation in the development of a waste detection system on beaches using smart drones.",
      "Image annotation and training of YOLOv8 models for computer vision.",
      "Collaboration with the REMEDIES team and support from the European Union as part of an international environmental project."
    ],
    technologies: ['Python', 'YOLOv8', 'Roboflow', 'OpenCV', 'Deep Learning']
  },
  {
  id: '4',
  company: 'Commune Urbaine d’Ahfir',
  position: 'Stagiaire – Formation Microsoft Office',
  duration: 'June 01, 2023 - July 01, 2023',
  description: [
    "Comprehensive training in Microsoft Office suite.",
    "Creation and formatting of professional documents (Word, Excel, PowerPoint).",
    "Using additional tools such as Access and Publisher for database management and visual materials."
  ],
  technologies: ['Microsoft Word', 'Excel', 'PowerPoint', 'Publisher', 'Access']
},
{
  id: 5,
  company: 'Projet personnel – AWS Cloud',
  position: 'Développeur Full Stack Cloud',
  duration: 'Mars 2024 - Avril 2024',
  description: [
    "Development of a web application for inventory management in a factory.",
    "Implementation of a serverless architecture using AWS: S3 for storage, Lambda for business logic, and DynamoDB for the database.",
    "Design of an intuitive user interface with React.js to manage products, locations, and real-time stock movements."
  ],
  technologies: ['React.js', 'Node.js', 'AWS S3', 'AWS Lambda', 'DynamoDB', 'API Gateway']
},


];

export const socials = [
  { name: 'Github', url: 'https://github.com/Aymane-Oua', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aymane-ouabdelmoumen/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:aymaneouabdelmoumen@gmail.com', icon: 'Mail' }
];
