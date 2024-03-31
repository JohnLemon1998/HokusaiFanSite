// A page that describes who you are (or the person you creating a website for)
import './About.css';
import manchesterCityLogo from './images/Manchester_City_Logo.png'
import englandLogo from './images/England_Logo.jpg'

function About() {

  const playerInfo = [
    { label: "Club Team", value: "Manchester City" },
    { label: "Nationality", value: "England" },
    { label: "Height", value: "1.71m" },
    { label: "Weight", value: "70kg" },
    { label: "Position", value: "Midfielder" },
    { label: "Date of Birth", value: "28 May 2000" }
];

const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
};

const dateOfBirth = "28 May 2000";
const age = calculateAge(dateOfBirth);

playerInfo.push({label:"Age", value: age});

    return (
      <div className="about">
         <h1>About</h1>
         <div className="border"></div>

         <h2>Philip Walter Foden</h2>
         <p>professional footballer who plays for Premier League</p>

      <div className='info-container'>
         {playerInfo.map((info, index) => (
                <div className='info-boxes' key={index}>
                    <div className='infoLabel'>{info.label} :</div>
                    <div className='infoValue'>{info.value}
                    {info.label === "Club Team" && <img src={manchesterCityLogo} alt="Manchester City Logo" />}
                    {info.label === "Nationality" && <img src={englandLogo} alt="England Logo" />}
                 </div>
                </div>
            ))}
        </div>
      </div>
    );
  }
  
  export default About;
  