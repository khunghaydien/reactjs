import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutMenu, { routerItem } from './LayoutMenu';
import { useLocation } from 'react-router-dom';
import logo from './../logo.svg';
import './Layout.scss';
import Search from '../component/common/Search';
type LayoutProps = {
  children: ReactNode
}
const listRouter: routerItem[] = [
  {
    id: 'learn',
    name: "Learn",
    path: "/learn"
  },
  {
    id: 'reference',
    name: "Reference",
    path: "/reference"
  },
  {
    id: 'community',
    name: "Community",
    path: "/community"
  },
  {
    id: 'blog',
    name: "Blog",
    path: "/blog"
  }
]
const listRouterSidebar: routerItem[] = [
  {
    id: 'learn_1',
    name: "Quick start",
    path: "",
    title: 'get started',
    chidren: [
      {
        id: 'learn_1_sub_1',
        name: "Tutorial: Tic-Tac-Toe",
        path: "/tic-tac-toe"
      },
      {
        id: 'learn_1_sub_2',
        name: "Thinking in React",
        path: "/thinking-in-react"
      },
    ]
  },
  {
    id: 'learn_2',
    name: "Installation",
    path: "/installation",
    title: 'get started',
    chidren: [
      {
        id: 'learn_2_sub_1',
        name: "Start a New React Project",
        path: "/start-a-new-project"
      },
      {
        id: 'learn_2_sub_2',
        name: "Add React to an Existing Project",
        path: "/add-to-an-existing"
      },
      {
        id: 'learn_2_sub_3',
        name: "Editor Setup",
        path: "/editor-setup"
      },
      {
        id: 'learn_2_sub_4',
        name: "React Developer Tools",
        path: "/react-developer-tools"
      }
    ]
  },
]
const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [currentTitle, setCurrentTitle] = useState('React Docs')
  const [routerParent, setRouterParent] = useState('')
  useEffect(() => {
    console.log(location);
  }, [location])
  const navigate = useNavigate()
  const handleClickRoute = (routerItem: routerItem) => {
    if (routerItem.path) {
      navigate(routerItem.path)
    }
    setCurrentTitle(routerItem.name)
  }
  const handleClickRouteHeader = (routerItem: routerItem) => {
    handleClickRoute(routerItem)
    setRouterParent(routerItem.path)
  }
  const handleChangeSearch = (e: any) => {
    console.log(e.target.value);
  }
  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  }
  const ROOT = 'layout'
  return (
    <div className={ROOT}>
      <div className={`${ROOT}__header`}>
        <div className={`${ROOT}__header-container`}>
          <div className={`${ROOT}__header-logo`}>
            <img src={logo} className={`${ROOT}__header-logo--image`} alt="logo" />
            <div>React</div>
          </div>

          <LayoutMenu
            handleClickRoute={handleClickRouteHeader}
            currentRoute={location.pathname}
            rootClass={`${ROOT}__header-menu`}
            listRouter={listRouter} />

          <div className={`${ROOT}__header-right`}>
            <Search handleChange={handleChangeSearch} onKeyDown={onKeyDown}></Search>
            <a className={`${ROOT}__header-social`} href='https://github.com' target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className={`${ROOT}__body`}>
        <div className={`${ROOT}__sidebar`}>
          <div className={`${ROOT}__sidebar-header`}>
            <div className={`${ROOT}__sidebar-header--title`}>
              {currentTitle}
            </div>
          </div>
          <LayoutMenu
            rootClass={`${ROOT}__sidebar-menu`}
            parentPath={routerParent}
            currentRoute={location.pathname}
            listRouter={listRouterSidebar}
            handleClickRoute={handleClickRoute} />
        </div>
        <div className={`${ROOT}__main`}>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Layout