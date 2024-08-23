import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['React', 'Next', 'Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Front-end Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Vue', 'Nuxt', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Front-end Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['Vue', 'Vuetify', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];

export const examplesData = [
    {
        cover_image: '/example/kenjyukai.or.jp.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/baron-nakamura.com.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/clubmed.co.jp.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/daellenbach.ch.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/optimumresults.co.nz.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/harcourtsholidayhomes.co.nz.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/randomshapes.com.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/lmfx.com.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/dominos.com.jm.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    }
]