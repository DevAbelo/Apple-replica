import Alert from "../main/Alert";
import FirstSec1 from "../main/FirstSec1";
import SecondSec2 from "../main/SecondSec2";
import ThirdSec3 from "../main/ThirdSec3";
import FourthSec4 from "../main/FourthSec4";
import FifthSec5 from "../main/FifthSec5";
import SixSec from "../main/SixSec";
import YoutubeVideos from "../Youtube/YoutubeVideos"; 

const MainContent = () => {
  return (
    <div className="main-content">
      <Alert />
      <FirstSec1 />
      <SecondSec2 />
      <ThirdSec3 />
      <FourthSec4 />
      <FifthSec5 />
      <SixSec />
      <YoutubeVideos />
    </div>
  );
};

export default MainContent;
