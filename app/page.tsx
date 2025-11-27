import { CarouselPlugin } from "./components/carousel";
import Contentone from "./components/ContentOne";
import ReedsRoofContent from "./components/ReedsRoofContent";
import Gallary from "./components/Gallary"

export default function Home() {
  return (

<div>
  <CarouselPlugin/>
    <Contentone/>
    <ReedsRoofContent/>
    <Gallary/>
  </div>
  );
}
