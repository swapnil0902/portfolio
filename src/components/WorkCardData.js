import music from "../assets/music.jpeg"
import face from "../assets/face.jpg"
import social from "../assets/social-media.jpeg"


const ProjectCardData = [
    {
        imgsrc: music,
        title: "Music Genre Classificaiton",
        text: "The AI-based music genre classification project aims to automatically analyze and classify audio tracks into different genres such as rock, pop, jazz, hip-hop, and more. It basically converts waveform of each audio file into its MFCC vector and stores it in a JSON file. We apply CNN to our preprocessed JSON file containing the MFCCs. We load our model and try to predict the genre of some songs",
        source: "https://github.com/swapnil0902/music_genre_classification",
    },
    {
        imgsrc: face,
        title: "Facial Emotion Detection",
        text: "The AI-based facial expression detection project aims to accurately analyze and recognize various facial expressions in real-time.By leveraging deep learning techniques, the project employs convolutional neural networks to detect and classify emotions such as happiness, sadness, anger, and surprise.The system utilizes haarcascades to extract facial features and map them to specific emotions, allowing for robust and reliable emotion detection.",
        source: "https://github.com/swapnil0902/facial_emotion_detection",
    },
    {
        imgsrc: social,
        title: "Social Media App",
        text: "It is an end-to-end social media application whose goal is to give users a seamless and engaging platform for social networking and communication. We have used firebase as our cloud platform to perform our CRUD operations (create, read, update and delete). React.js for frontend and Node.js for backend. Chakra UI has been used as our building blocks that helped us to create a simple, modular and accessible React UI.",
        source: "https://github.com/swapnil0902/social_media_app",
    },
];

export default ProjectCardData;