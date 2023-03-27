import './index.scss'
import Login from './Login';
const ROOT = 'home'
function Home() {
  return (
    <div className={ROOT}>
      <div className={`${ROOT}_container`}>
        <Login></Login>
      </div>
    </div >
  );
};
export default Home;
