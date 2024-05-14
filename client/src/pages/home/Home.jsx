import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
    <div className="flex flex-col md:flex-row h-auto md:h-[550px] rounded-lg overflow-hidden bg-pink-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-md">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
