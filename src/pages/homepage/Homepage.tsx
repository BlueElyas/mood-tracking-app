import { RadioGroup } from "react-aria-components";
import SingleTag from "../../components/tag/SingleTag";
import MultipleTag from "../../components/tag/MultipleTag";
import Hero from "./components/Hero";

function Homepage() {
  return (
    <>
      <Hero />
      <RadioGroup>
        <SingleTag value="Tag 1" />
        <MultipleTag value="Tag 2" />
      </RadioGroup>
    </>
  );
}

export default Homepage;
