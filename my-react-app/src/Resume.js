// Resume
// This page should provide:
// An overview summary,Career history,Skills
//Publications/notable outputs,Qualifications

import './Resume.css';

function Resume() {

  const resumeContent = [
    {
        title: "Overview Summary",
        content: "Katsushika Hokusai, born in 1760 in Edo, Japan, was a prolific and influential artist known for his mastery of ukiyo-e, or woodblock prints. Over his 90-year lifespan, he produced a vast array of artwork, spanning landscapes, portraits, erotica, and illustrations for novels and poetry. Hokusai's innovative techniques and diverse subject matter earned him recognition both in Japan and abroad, influencing Western artists and sparking the Japonism movement. Despite facing personal challenges and setbacks, he remained dedicated to his craft until his death in 1849."
    },
    {
        title: "Career History",
        content: "Hokusai began his artistic journey at a young age, apprenticing with a woodcarver and later studying under ukiyo-e master Katsukawa Shunshō. He quickly gained recognition for his prints of kabuki actors and courtesans, but he later broke away from traditional ukiyo-e subjects, exploring landscapes and everyday life. Throughout his career, he continually evolved his style and experimented with various mediums, including painting and book illustrations. Despite facing expulsion from the Katsukawa school and financial hardships, Hokusai's talent and perseverance led him to become one of Japan's most celebrated artists."
    },
    {
        title: "Skills",
        content: "Hokusai demonstrated exceptional skill in woodblock printing, painting, and illustration. His ability to capture the essence of landscapes and depict everyday scenes with intricate detail set him apart from his contemporaries. Additionally, his willingness to experiment with perspective and composition showcased his innovative spirit and willingness to push artistic boundaries. Hokusai's versatility allowed him to excel in a variety of genres, from traditional ukiyo-e to more experimental works."
    },
    {
        title: "Publications",
        content: "Hokusai's most famous works include 'Thirty-six Views of Mount Fuji,' featuring iconic prints such as 'The Great Wave off Kanagawa,' and 'The Dream of the Fisherman's Wife,' a renowned piece of shunga erotica. He also produced numerous illustrated books, including 'Hokusai Manga,' a series of sketchbooks featuring thousands of drawings depicting various subjects, from animals to religious figures. Hokusai's prints and illustrations continue to captivate audiences worldwide, with his legacy enduring through exhibitions, adaptations, and artistic homages."
    },
    {
        title: "Qualifications",
        content: "While Hokusai did not have formal academic qualifications, his lifelong dedication to his craft and his profound impact on the art world solidify his status as one of Japan's greatest artists. His mastery of multiple mediums, innovative techniques, and enduring influence on subsequent generations of artists attest to his unparalleled skill and artistic vision."
    }
];

// Render resume content
const renderContent = resumeContent.map((item, index) => (
    <div key={index} className="resume-section">
        <h2>{item.title}</h2>
        <p>{item.content}</p>
    </div>
));

    return (
      <div className="resume">
      <h1>Resume</h1>
      <div className="border"></div>
      {renderContent}
      </div>
    );
  }
  
  export default Resume;
  