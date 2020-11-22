import Home from './home';
import AboutMe from './about-me';
import FamilyProgramme from './family-programme';
import TimeoutProgramme from './timeout-programme';
import Qualifications from './qualifications';
import Contact from './contact';

const routes = [
  {
    path: '/',
    exact: true,
    name: "home",
    text: "Home",
    component: Home
  },
  {
    path: '/about-me',
    exact: true,
    name: "about-me",
    text: "About Me",
    component: AboutMe
  },
  {
    path: '/family-programme',
    exact: true,
    name: "family-programme",
    text: "Family Programme",
    component: FamilyProgramme
  },
  {
    path: '/timeout-programme',
    exact: true,
    name: "timeout-programme",
    text: "Time out Programme",
    component: TimeoutProgramme
  },
  {
    path: '/qualifications',
    exact: true,
    name: "qualifications",
    text: "Qualifications",
    component: Qualifications
  },
  {
    path: '/contact',
    exact: true,
    name: "contact",
    text: "Contact",
    component: Contact
  }
];

export default routes;