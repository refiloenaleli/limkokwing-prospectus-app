const faculties = [
  {
    name: 'Faculty of Information & Communication Technology',
    courses: [
      {
        name: 'BSc (Hons) in Information Technology',
        description: 'This program delivers strong foundations in programming, networking, databases and cybersecurity. Graduates are equipped for IT support, system admin and development careers.',
        image: require('../assets/images/fict_course1.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1Gm6divMIsww0jCdxdRCnh0Ztzz9JlOts' }
      },
      {
        name: 'BSc (Hons) in Software Engineering with Multimedia',
        description: 'Integrates software engineering with multimedia design, animation and interactive applications. Ideal for game development and digital media roles.',
        image: require('../assets/images/fict_course2.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1QZIZlpBSEPjvXBDVp3EZE9Ow4ZFlCWmo' }
      },
      {
        name: 'BSc (Hons) in Business Information Technology',
        description: 'Combines business knowledge with IT systems, data analytics and e-commerce solutions. Prepares for roles in business IT consulting and management.',
        image: require('../assets/images/fict_course3.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1DwoRc2UIrGr1t-nZi4DkWEUYW9hjFsd1' }
      },
      {
        name: 'Diploma in Multimedia and Software Engineering',
        description: 'Practical diploma focusing on coding, web design, animation and multimedia production tools. Entry-level pathway to tech and creative industries.',
        image: require('../assets/images/fict_course4.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1yfVFz9akpX_Da5wMg2YnG5QhTEEG73ll' }
      },
      {
        name: 'Diploma in Information Technology',
        description: 'Foundational diploma covering hardware, software basics, networking and IT support skills. Excellent starting point in the IT field.',
        image: require('../assets/images/fict_course5.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=13kaa0EkiT_b0XtLmuoLGId8_nGd8d5tB' }
      },
    ]
  },
  {
    name: 'Faculty of Creativity in Tourism & Hospitality',
    courses: [
      {
        name: 'BA (Hons) in Tourism Management',
        description: 'Explores tourism marketing, destination development and sustainable tourism practices. Prepares for careers in travel agencies and tour operations.',
        image: require('../assets/images/tourism_course1.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1LgGopF9367hDjLfbSYyQAd5tTe_I7TvW' }
      },
      {
        name: 'Associate Degree in Hotel Management',
        description: 'Covers hotel operations, guest services, front office management and hospitality standards.',
        image: require('../assets/images/tourism_course2.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=15A5D7WhEu2513pHODjRWPCw8YVjAcHHu' }
      },
      {
        name: 'Associate Degree in Events Management',
        description: 'Focuses on planning and managing events, conferences, weddings and corporate functions.',
        image: require('../assets/images/tourism_course3.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1geTx-ipR5I6-FN4U8ovRg272ve7k_sgE' }
      },
      {
        name: 'Associate Degree in International Tourism',
        description: 'Studies global tourism trends, cultural tourism and international travel operations.',
        image: require('../assets/images/tourism_course4.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=12A9dWYugtWPACqfJbXCvSciVas4r5xw4' }
      },
      {
        name: 'Diploma in Hotel Management',
        description: 'Basic training in hotel operations, customer service and facility management skills.',
        image: require('../assets/images/tourism_course5.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1K50k-WgbBUXuBX-uhnlXhNEPPpk9e9Gr' }
      },
    ]
  },
  {
    name: 'Faculty of Business & Globalization',
    courses: [
      {
        name: 'BA (Hons) in International Business',
        description: 'Covers global trade, international finance, marketing and cross-cultural management.',
        image: require('../assets/images/business_course1.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1ePjkcwoCdSgv9_2dtjFJ6LRgQgeSaPj3' }
      },
      {
        name: 'BA (Hons) in Entrepreneurship',
        description: 'Teaches business startup, innovation, funding and market entry strategies.',
        image: require('../assets/images/business_course2.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1a0-pRPBOjRL0THVeJnMuU9Yew-X9PiDp' }
      },
      {
        name: 'BA (Hons) in Human Resource Management',
        description: 'Focuses on recruitment, employee relations, training and organizational behavior.',
        image: require('../assets/images/business_course3.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1NseOQrw18CSeON606Xx0fbufcnOCX-_U' }
      },
      {
        name: 'BA (Hons) in Business Management',
        description: 'Broad education in leadership, operations, strategy and business functions.',
        image: require('../assets/images/business_course4.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1WVb3CA1w08W24Wx-8WAY9ZtmQZLa5xqx' }
      },
      {
        name: 'Diploma in Retail Management',
        description: 'Covers retail operations, sales techniques, inventory and customer experience.',
        image: require('../assets/images/business_course5.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1R8nZnWq7KnvDjh-jcN6fBPtaIruQLyR4' }
      },
    ]
  },
  {
    name: 'Faculty of Communication, Media & Broadcasting',
    courses: [
      {
        name: 'BA (Hons) in Broadcasting & Journalism',
        description: 'Trains in news writing, reporting, broadcast production and media ethics.',
        image: require('../assets/images/comm_course1.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1TUowJF2tY1XcvnQZO8UhQP2Rd93rSzmS' }
      },
      {
        name: 'BA (Hons) in Professional Communication',
        description: 'Develops skills in corporate communication, public speaking and digital media strategies.',
        image: require('../assets/images/comm_course2.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1UqeXsTUQwz6gMMrE9YgIxz4GDKLuzbPO' }
      },
      {
        name: 'BA (Hons) in Television & Film Production',
        description: 'Hands-on training in scripting, directing, editing and TV/film production.',
        image: require('../assets/images/comm_course3.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1EO9P15COv4cswK-JrIJR59xhOT-TM6Qb' }
      },
      {
        name: 'BA (Hons) in Public Relations',
        description: 'Covers PR strategies, media relations, branding and crisis communication.',
        image: require('../assets/images/comm_course4.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1nuSdhS28Tm1DPWrzP0ChZjiO2l15iRY7' }
      },
      {
        name: 'Diploma in Journalism & Media Studies',
        description: 'Foundational skills in news gathering, writing and media production ethics.',
        image: require('../assets/images/comm_course5.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1nSBkOMWnwxcxijqUnR9_shnUFiDmPiM_' }
      },
    ]
  },
  {
    name: 'Faculty of Multimedia Creativity',
    courses: [
      {
        name: 'BA (Hons) in Graphic Design',
        description: 'Focuses on visual communication, typography, branding and digital design tools.',
        image: require('../assets/images/multi_course1.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1yOn7_pOpmoFht-sxQfa9NKVGvdVcRdUc' }
      },
      {
        name: 'BA (Hons) in Fashion & Retailing',
        description: 'Combines fashion design with retail strategy, trends and merchandising.',
        image: require('../assets/images/multi_course2.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1h9cjUIKlD6ZxWe8yWxXB--FmzeBe132B' }
      },
      {
        name: 'Diploma in Graphic Design',
        description: 'Practical training in graphic software, layout design and illustration.',
        image: require('../assets/images/multi_course3.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=1hB_hP2S2P4zNkCDUk7AG68ioNWsJ2xQi' }
      },
      {
        name: 'BA (Hons) in Creative Advertising',
        description: 'Teaches campaign development, copywriting and creative advertising concepts.',
        image: require('../assets/images/multi_course4.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=15gkBNiK-Rg8Iu_g0ta8KgHIlCHjeMNL9' }
      },
      {
        name: 'Diploma in Multimedia Design',
        description: 'Covers animation basics, interactive media and multimedia production.',
        image: require('../assets/images/multi_course5.jpg'),
        video: { uri: 'https://drive.google.com/uc?export=download&id=18BoHYamaNNQ9g4nGlsvoYvg9XLE4CmUS' }
      },
    ]
  },
];

export default faculties;

export const allCourses = faculties.flatMap(faculty => 
  faculty.courses.map(course => ({ ...course, faculty: faculty.name }))
);