// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.

import TokyoImage1 from "../assets/TokyoImage1.jpg";
import TokyoImage2 from "../assets/TokyoImage2.jpg";
import TokyoImage3 from "../assets/TokyoImage3.jpg";
import LondonImage1 from "../assets/LondonImage1.jpg";
import LondonImage2 from "../assets/LondonImage2.jpg";
import LondonImage3 from "../assets/LondonImage3.jpg";
import SFImage1 from "../assets/SFImage1.jpg";
import SFImage2 from "../assets/SFImage2.jpg";
import SFImage3 from "../assets/SFImage3.jpg";

const TravelData = [
  {
    id: 1,
    placeHeading: "Tokyo",
    placeImg1: TokyoImage1,
    placeImg2: TokyoImage2,
    placeImg3: TokyoImage3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    placeHeading: "London",
    placeImg1: LondonImage1,
    placeImg2: LondonImage2,
    placeImg3: LondonImage3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    placeHeading: "SanFrancisco",
    placeImg1: SFImage1,
    placeImg2: SFImage2,
    placeImg3: SFImage3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default TravelData;
