import led from '../assets/companies/LED.png';
import utp from '../assets/companies/UTP.png';
import versa from '../assets/companies/Versa.png';
import { ProjectType } from './enums';

class Constants {
  static jobs = [
    {
      logo: led,
      company: 'LED Vision Sdn Bhd',
      position: 'Software Engineer',
      year: 'Sept 2023 - Current',
      desc: 'I specialize in frontend development for dashboards, creating intuitive and responsive user interfaces. I oversee the deployment process to ensure smooth and efficient rollouts of new features and updates. Additionally, I provide support to my team in monitoring and troubleshooting software behavior to maintain optimal performance. My role also includes managing and configuring virtual machines to support various development and production environments.',
    },
    {
      logo: versa,
      company: 'Versa: Save, Invest and Grow',
      position: 'Front End Developer Intern',
      year: 'Jan 2022 - Aug 2022',
      desc: 'The focus is on developing the VERSA mobile app using HTML, JS, TypeScript, and Flutter. The development process includes functional and non-functional testing to ensure system functionalities and address usability and reliability aspects.',
    },
    {
      logo: utp,
      company: 'Universiti Teknologi Petronas',
      position: 'Application Developer',
      year: 'Jul 2021 - Dec 2021',
      desc: 'A virtual lab experiment was developed using Unity, providing users with a 3D environment to experience it. The Unity interface features were utilized to create and implement the necessary user interface (UI) requirements.',
    },
  ];

  static projects = [
    {
      type: ProjectType.MobileApp,
      title: 'PetZania',
      desc: 'This application can keep your pets data like name, age, and breed. You also can customize the card color for different pets.',
      link: 'https://play.google.com/store/apps/details?id=com.syafiqfadli.petzania&hl=en_NZ'
    },
    {
      type: ProjectType.MobileApp,
      title: 'Service Helper',
      desc: 'An app to find a nearby service around you to help you maintain and service your home using Google Place API.',
      link: ''
    },
    {
      type: ProjectType.MobileApp,
      title: 'Food Ordering App',
      desc: 'The application is for customer to make an order and admin can manage their restaurant by adding menu or more restaurants.',
      link: ''
    },
    {
      type: ProjectType.ServerSide,
      title: 'Food Ordering System',
      desc: 'To manage user authentication and database using ExpressJS. Implement API for front end with CRUD Operation.',
      link: ''
    },
    {
      type: ProjectType.DeepLearning,
      title: 'Student Attendance System using Face Recognition',
      desc: 'Handle students attendance using automation of facial recognition by image processing.',
      link: ''
    },
  ];
}

export default Constants;
