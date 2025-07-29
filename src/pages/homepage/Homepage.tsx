import BarChartMoods from "../../components/chart/BarChartMoods";
import Container from "../../components/container/Container";
import AverageBox from "./components/AverageBox";
import Hero from "./components/Hero";

function Homepage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col md:grid grid-cols-12 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {/* Left column */}
        <Container className="col-span-4 gap-3">
          <AverageBox title="Mood" />
          <AverageBox title="Sleep" />
        </Container>

        {/* Right column */}
        <Container className="col-span-8 overflow-x-scroll">
          <BarChartMoods />
        </Container>
      </div>
    </>
  );
}

export default Homepage;
