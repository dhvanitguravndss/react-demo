import { FaReact } from "react-icons/fa";

function Home() {
  const handleClick = () => console.log("Project Running!");

  return (
    <div>
      <h1>Dhvanit</h1>
      <button onClick={handleClick}>Run Project</button>
      <FaReact size={40} color="blue" />
    </div>
  );
}

export default Home;