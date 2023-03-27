import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutComponent from './layout/Layout';
import Home from './component/home';
import Learn from './component/learn';
import Reference from './component/reference';
import Community from './component/community';
import Blog from './component/blog';
import TicTacToe from './component/learn/TicTacToe';
import ThinkingInReact from './component/learn/Installation';
import StartNewProject from './component/learn/StartNewProject';
import ReactDeveloperTools from './component/learn/ReactDeveloperTools';
import Installation from './component/learn/ThinkingInReact';
import EditorSetup from './component/learn/EditorSetup';
import AddToAnExistsProject from './component/learn/AddToAnExistsProject';
import "./App.scss"
import QuickStart from './component/learn/QuickStart';
const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/reference',
    element: <Reference />
  },
  {
    path: '/community',
    element: <Community />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/learn',
    element: <Learn />,
    children: [
      {
        path: '',
        element: <QuickStart />
      },
      {
        path: 'tic-tac-toe',
        element: <TicTacToe />
      },
      {
        path: 'thinking-in-react',
        element: <ThinkingInReact />
      },
      {
        path: 'installation',
        element: <Installation />
      },
      {
        path: 'start-a-new-project',
        element: <StartNewProject />
      },
      {
        path: 'add-to-an-existing',
        element: <AddToAnExistsProject />
      },
      {
        path: 'editor-setup',
        element: <EditorSetup />
      },
      {
        path: 'react-developer-tools',
        element: <ReactDeveloperTools />
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        <LayoutComponent>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element}>
                {route.children && route.children.map(child => (
                  <Route key={child.path} path={child.path} element={child.element} />
                ))}
              </Route>
            ))}
          </Routes>
        </LayoutComponent>
      </Router>
    </div>
  );
}

export default App;
