import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import { AiOutlineMenu } from "react-icons/ai";

import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProSidebar
      collapsed={collapsed}
      width={200}
    >
      <SidebarHeader>
        <center>
          <AiOutlineMenu
            size={40}
            onClick={() => setCollapsed(!collapsed)}
          />
        </center>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <SubMenu title="Components">
            <MenuItem>
              Page A
              <Link to="/pagea" />
            </MenuItem>
            <MenuItem>
              Page B
              <Link to="/pageb" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        This the Footer.
      </SidebarFooter>
    </ProSidebar>
  );
}

function DashboardLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <main className="w-full min-h-screen">
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex flex-col flex-1 overflow-hidden">
            <main className="content">
              <section className="sm:flex-row flex flex-col flex-1">
                <div
                  className="content-box"
                  style={{ flexGrow: 2, flexBasis: "0%" }}
                >
                  {children}
                </div>
              </section>
            </main>
          </div>
        </div>
      </main>
    </div>
  )
};

function PageA() {
  return (
    <DashboardLayout>
      Page A
    </DashboardLayout>
  );
}

function PageB() {
  return (
    <DashboardLayout>
      Page B
    </DashboardLayout>
  );
}

function Home() {
  return (
    <DashboardLayout>
      Home
    </DashboardLayout>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagea">
          <PageA />
        </Route>
        <Route path="/pageb">
          <PageB />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Routes />
  );
}

export default App;
