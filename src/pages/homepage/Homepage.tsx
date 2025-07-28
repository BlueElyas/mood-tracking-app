import Container from "../../components/container/Container";
import AverageBox from "./components/AverageBox";
import Hero from "./components/Hero";

function Homepage() {
  return (
    <div className="flex flex-col justify-center  p-4">
      <Hero />
      <div className="flex  justify-center gap-6 mt-8">
        <Container>
          <AverageBox title="Mood" />
          <AverageBox title="Sleep" />
        </Container>
        <Container>Graph here</Container>
      </div>
    </div>
  );
}

export default Homepage;
