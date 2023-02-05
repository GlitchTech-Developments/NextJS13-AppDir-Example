import { setTimeout } from "timers/promises";

const Home = async () => {
  await setTimeout(2000);

  return <>Homepage</>;
};
export default Home;
