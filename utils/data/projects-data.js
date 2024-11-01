import ayla from '/public/image/ayla.jpg'
import crefin from '/public/image/crefin.jpg'
import realEstate from '/public/image/real-estate.jpg'
import travel from '/public/image/travel.jpg'

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['React', 'Next', 'Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Front-end Engineer',
        code: '',
        demo: '',
        image: crefin
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['Vue', 'Nuxt', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Front-end Developer',
        code: '',
        demo: '',
        image: travel
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['Vue', 'Vuetify', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer'
    }
]

export const examplesData = [
    {
        cover_image: '/example/kenjyukai.or.jp.png',
        title: 'Anshinkai',
        url: 'https://anshinkai-gr.jp/',
        description: 'This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.'
    },
    {
        cover_image: '/example/baron-nakamura.com.png',
        title: 'Baron Nakamura',
        url: 'https://baron-nakamura.com/',
        description: 'It is for Cradle of the Universe. Infomed about the latest information on retreats, sessions, and more nationwide in Japan.'
    },
    {
        cover_image: '/example/clubmed.co.jp.png',
        title: 'Club MED',
        url: 'https://www.clubmed.co.jp/',
        description: 'It specialises in luxury all-inclusive holidays – with absolutely no hidden costs including Thrilling skiing, sensational islands getaways and wonderful cultural.'
    },
    {
        cover_image: '/example/daellenbach.ch.png',
        title: 'Daellenbach Swich',
        url: 'https://daellenbach.ch/',
        description: 'Their traditional Thun company has been a competent partner for all plastering and painting work for our customers since 1949.'
    },
    {
        cover_image: '/example/optimumresults.co.nz.png',
        title: 'Optimum Results',
        url: 'http://optimumresults.co.nz/',
        description: 'They’re paid search scientists who specialise in optimising Google and Bing Ads accounts. They can manage your accounts, provide professional guidance, or help with a particular facet of paid search, like remarketing.'
    },
    {
        cover_image: '/example/harcourtsholidayhomes.co.nz.png',
        title: 'Harcouts Holiday',
        url: 'https://www.harcourtsholidayhomes.co.nz/',
        description: 'They’re a small, local team who have the utmost respect and care when it comes to ensuring your holiday stay is the best one it possibly could be. All their guests enjoy an outstanding level of service that is second to none, as are their beautiful private holiday homes.'
    },
    {
        cover_image: '/example/randomshapes.com.png',
        title: 'Random Shapes',
        url: 'https://randomshapes.com/',
        description: 'They\'re Random Shapes, They Build Minimum Viable Products and Help Teams Grow.'
    },
    {
        cover_image: '/example/lmfx.com.png',
        title: 'LMFX',
        url: 'https://lmfx.com/',
        description: 'When it comes to trading, LMFX is the broker you are looking for, that offers advanced institutional and retail trading conditions to a global audience. They have thought of everything you might need, to ensure a smooth hassle-free trading experience.'
    },
    {
        cover_image: '/example/dominos.com.jm.png',
        title: 'DOMINOS',
        url: 'https://www.dominos.com.jm/',
        description: 'Domino\'s Pizza Jamaica, Order Pizza Online for Delivery or Serve. Everyone is able to be served from the reliable and trust sercice of Domino\'s Pizza.'
    }
]
