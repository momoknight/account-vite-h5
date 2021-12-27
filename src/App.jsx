import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom"

import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'

import routes from '@/router'
import NavBar from "@/components/NavBar";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const needNav = ['/', '/data', '/user'];
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname])
  return <React.Fragment>
    <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
      <Routes>
        {
          routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)
        }
      </Routes>
    </ConfigProvider>
    <NavBar showNav={showNav} />
  </React.Fragment>
}

export default App;