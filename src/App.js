import React, {
  useState,
  useEffect,
} from "react";
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
import {
  AiOutlineMenu,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import {
  Button,
  Container,
  Col,
  Form,
  Modal,
  ProgressBar,
  Row,
  Stack,
  Tab,
  Tabs,
} from 'react-bootstrap';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from 'victory';

import 'react-pro-sidebar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <ProSidebar
      collapsed={collapsed}
      width={200}
    >
      <SidebarHeader>
        <div className="d-flex justify-content-center align-items-center">
          <AiOutlineMenu
            size={40}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
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
        <div className="d-flex justify-content-center align-items-center">
          This the Footer.
        </div>
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

function Ingredient() {
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  return (
    <Row>
      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              Edit Nutritional Value.
            </Row>
            <Row>
              <Col className="d-flex justify-content-left align-items-center">
                Crude Protein:
              </Col>
              <Col>
                <Form.Control
                  required
                  type="numeric"
                  placeholder="0-1000"
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-left align-items-center">
                Starch:
              </Col>
              <Col>
                <Form.Control
                  required
                  type="numeric"
                  placeholder="0-1000"
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-left align-items-center">
                Crude Fat:
              </Col>
              <Col>
                <Form.Control
                  required
                  type="numeric"
                  placeholder="0-1000"
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-left align-items-center">
                NDF:
              </Col>
              <Col>
                <Form.Control
                  required
                  type="numeric"
                  placeholder="0-1000"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleEditClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Ingredient?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Col>
        <Form.Label>
          Ingredient:
        </Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select ingredient</option>
          <option>Barley</option>
          <option>Corn</option>
          <option>Wheat</option>
        </Form.Select>
      </Col>
      <Col>
        <Form.Label>
          Inclusion (%):
        </Form.Label>
        <Form.Control
          required
          type="numeric"
          placeholder="0-100"
        />
      </Col>
      <Col md={1} className="d-flex justify-content-center align-items-center">
        <button onClick={() => handleEditShow()}>
          <AiFillEdit size={30} />
        </button>
      </Col>
      <Col md={1} className="d-flex justify-content-center align-items-center">
        <button onClick={() => handleDeleteShow()}>
          <AiFillDelete size={30} />
        </button>
      </Col>
    </Row>
  );
}

function Home() {
  const [progress, setProgress] = useState(11);

  var count = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Log every second", count);
      count = count + Math.floor(Math.random() * 10);
      if (100 < count) {
        count = 0;
      }
      setProgress(count);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const milkData = [
    {quarter: 1, my: 1000},
    {quarter: 2, my: 1100},
    {quarter: 3, my: 1200},
    {quarter: 4, my: 1250},
    {quarter: 5, my: 1200},
    {quarter: 6, my: 1100},
    {quarter: 7, my: 1000},
    {quarter: 8, my: 1200},
  ];

  return (
    <DashboardLayout>
      <Container fluid>
        <Row>
          <h1>Home</h1>
        </Row>

        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >

          <Tab eventKey="farm" title="Farm">
            Farm information.
          </Tab>

          <Tab eventKey="ingredients" title="Ingredients">
            <Row>
              <Col>
                <Stack gap={2}>
                  <h2>Diet 1</h2>
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                  <Button variant="success">
                    Add new ingredient
                  </Button>
                </Stack>
              </Col>
              <Col>
                <Stack gap={2}>
                  <h2>Diet 2</h2>
                  <Ingredient />
                  <Button variant="success">
                    Add new ingredient
                  </Button>
                </Stack>

              </Col>
            </Row>
          </Tab>

          <Tab eventKey="result" title="Result">
            <Stack gap={2}>
              Calculating responses
              <ProgressBar animated now={progress} label={`${progress}%`} />
            </Stack>
          </Tab>

          <Tab eventKey="history" title="History">
            <Stack gap={2}>
              Historical milk yield
              <VictoryChart
                domainPadding={20}
                theme={VictoryTheme.greyscale}
              >
                <VictoryBar
                  data={milkData}
                  x="quarter"
                  y="my"
                  style={{ data: { fill: "#c43a31" }}}
                />
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[300, 500, 700, 900, 1100, 1300]}
                />
              </VictoryChart>
            </Stack>
          </Tab>

        </Tabs>

      </Container>
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
