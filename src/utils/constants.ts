import versa from '../assets/Versa.png';
import utp from '../assets/UTP.png';
import { ProjectType } from './enums';

class Constants {

  static jobs = [
    {
      logo: versa,
      company: 'Versa: Save, Invest and Grow',
      position: 'Front End Developer Intern',
      desc: 'The focus is on developing the VERSA mobile app using HTML, JS, TypeScript, and Flutter. The development process includes functional and non-functional testing to ensure system functionalities and address usability and reliability aspects.',
    },
    {
      logo: utp,
      company: 'Universiti Teknologi Petronas',
      position: 'Application Developer',
      desc: 'A virtual lab experiment was developed using Unity, providing users with a 3D environment to experience it. The Unity interface features were utilized to create and implement the necessary user interface (UI) requirements.',
    },
  ];
  
  static projects = [
      {
        type: ProjectType.MobileApp,
        title: 'PetZania',
        desc: 'This application can keep your pets data like name, age, and breed. You also can customize the card color for different pets.',
      },
      {
        type: ProjectType.MobileApp,
        title: 'Service Helper',
        desc: 'An app to find a nearby service around you to help you maintain and service your home using Google Place API.',
      },
      {
        type: ProjectType.MobileApp,
        title: 'Food Ordering App',
        desc: 'The application is for customer to make an order and admin can manage their restaurant by adding menu or more restaurants.',
      },
      {
        type: ProjectType.ServerSide,
        title: 'Food Ordering System',
        desc: 'To manage user authentication and database using ExpressJS',
      },
      {
        type: ProjectType.DeepLearning,
        title: 'Student Attendance System using Face Recognition',
        desc: 'Handle students attendance using automation of facial recognition by image processing.',
      },
    ];
}

export default Constants
