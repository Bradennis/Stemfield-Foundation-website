import robotics from '../assets/images/circuits-multimeter.jpg';
import mathOlympiad from '../assets/images/classroom-question.jpg';
import environment from '../assets/images/water-testing.jpg';
import member1 from '../assets/images/team/member-1.jpg';
import member2 from '../assets/images/team/member-2.jpg';
import member3 from '../assets/images/team/member-3.jpg';
import member4 from '../assets/images/team/member-4.jpg';
import member5 from '../assets/images/team/member-5.jpg';
import member6 from '../assets/images/team/member-6.jpg';
import studentSmiling from '../assets/images/student-smiling-lab.jpg';
import labGlassware from '../assets/images/lab-glassware.jpg';
import lightPropagation from '../assets/images/light-propagation.jpg';
import basicElectricity from '../assets/images/basic-electricity.jpg';
import titrationSetup from '../assets/images/titration-setup.jpg';
import studentsPipette from '../assets/images/students-pipette.jpg';

export const stats = [
  {
    icon: 'Users',
    value: '2,841',
    label: 'Students reached',
    detail: 'Across 23 schools in Ghana',
  },
  {
    icon: 'GraduationCap',
    value: '47',
    label: 'STEM programs',
    detail: 'Active learning initiatives',
  },
  {
    icon: 'TrendingUp',
    value: '89%',
    label: 'Success rate',
    detail: 'Students pursuing STEM careers',
  },
  {
    icon: 'HeartHandshake',
    value: '156',
    label: 'Volunteers',
    detail: 'Dedicated educators and mentors',
  },
];

export const programs = [
  {
    badge: 'Ages 12–16',
    title: 'Robotics & Coding Lab',
    description:
      'Students learn programming fundamentals and build robots using Arduino and Raspberry Pi. This hands-on program develops problem-solving skills and introduces computational thinking through real-world projects.',
    impact: '347 students trained, 23 robots built',
    image: robotics,
  },
  {
    badge: 'High-achieving students ages 13–17',
    title: 'Math Olympiad Training',
    description:
      'Intensive preparation program for national and international mathematics competitions. Students work through advanced problem sets with mentors who have competed at the highest levels.',
    impact: '112 students trained, 9 national medals',
    image: mathOlympiad,
  },
  {
    badge: 'Ages 15–18',
    title: 'Environmental Science Projects',
    description:
      'Community-based research projects addressing local environmental challenges. Students collect data, analyze results, and present solutions to real problems like water quality and waste management.',
    impact: '8 community projects completed, 2 published papers',
    image: environment,
  },
];

export const team = [
  { name: 'Kwame Asante', role: 'Executive Director', image: member1 },
  { name: 'Anika Mensah', role: 'Program Director', image: member2 },
  { name: 'Kofi Osei', role: 'Education Coordinator', image: member3 },
  { name: 'Yaw Boateng', role: 'Community Outreach Lead', image: member4 },
  { name: 'Kojo Addo', role: 'STEM Facilitator', image: member5 },
  { name: 'Nana Adjei', role: 'Volunteer Coordinator', image: member6 },
];

export const gallery = [
  { image: studentSmiling, caption: 'Chemistry practical', school: 'Deduako MA JHS' },
  { image: lightPropagation, caption: 'Rectilinear propagation of light', school: 'Kotei Basic School' },
  { image: titrationSetup, caption: 'Titration set-up', school: 'Kotei Basic School', position: 'center 22%' },
  { image: labGlassware, caption: 'Working with lab glassware', school: 'Kotei Basic School' },
  { image: studentsPipette, caption: 'Measuring and observing', school: 'Deduako MA JHS' },
  { image: basicElectricity, caption: 'Basic electricity', school: 'Community outreach' },
];

export const involvedOptions = [
  {
    icon: 'HandHeart',
    title: 'Volunteer',
    description: 'Teach, mentor, or support our programs in schools across Ghana.',
  },
  {
    icon: 'Building2',
    title: 'Partner with us',
    description: 'Bring your organisation on board to sponsor programs or provide resources.',
  },
  {
    icon: 'Megaphone',
    title: 'Spread the word',
    description: 'Help us reach more students, schools, and supporters across the country.',
  },
];

export const pricingTiers = [
  {
    name: 'Supporter',
    price: '25',
    popular: false,
    benefits: [
      'Monthly impact newsletter',
      'Digital thank you certificate',
      'Updates on program outcomes',
    ],
  },
  {
    name: 'Champion',
    price: '75',
    popular: true,
    benefits: [
      'All Supporter benefits',
      'Quarterly video updates from students',
      'Invitation to annual showcase event',
    ],
  },
  {
    name: 'Innovator',
    price: '150',
    popular: false,
    benefits: [
      'All Champion benefits',
      'School visit opportunity',
      'Direct mentorship connection',
      'Annual impact report with your name',
    ],
  },
];
