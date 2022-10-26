import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Header,
    Overview,
    About,
    Sidebar,
    Logs,
    AddUser,
    AddGroup,
    ConfigurationManagement,
    Groups,
    Installation,
    IPConfiguration,
    NTPSettings,
    Permissions,
    PluginManagement,
    PortMirroring,
    PortStatistics,
    PortTable,
    Profinet, RSTPConfiguration, RSTPPorts, Security, SNMP, SystemDescription, UserList, Settings
} from "./components";
import {Box, Stack} from "@mui/material";

import SidebarMUI from "./components/SidebarMUI";

const App = () => {

    return (
      <BrowserRouter>
          <Header />
          <Stack sx={{ height: '94vh', flexDirection: { sx: "column", md: "row" } }}>
              <SidebarMUI />
              <Box sx={{bgcolor:'#f9f9fa', width: '80%'}} >
                  <Routes>
                      <Route path='/' element={<Overview />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/users/add' element={<AddUser />} />
                      <Route path='/groups/add' element={<AddGroup />} />
                      <Route path='/config' element={<ConfigurationManagement />} />
                      <Route path='/groups' element={<Groups />} />
                      <Route path='/installation' element={<Installation />} />
                      <Route path='/ipconfig' element={<IPConfiguration />} />
                      <Route path='/logs' element={<Logs />} />
                      <Route path='/ntps' element={<NTPSettings />} />
                      <Route path='/permissions' element={<Permissions />} />
                      <Route path='/plugin' element={<PluginManagement />} />
                      <Route path='/port/mirroring' element={<PortMirroring />} />
                      <Route path='/port/statistics' element={<PortStatistics />} />
                      <Route path='/port/table' element={<PortTable />} />
                      <Route path='/profinet' element={<Profinet />} />
                      <Route path='/rstp/config' element={<RSTPConfiguration />} />
                      <Route path='/rstp/ports' element={<RSTPPorts />} />
                      <Route path='/security' element={<Security />} />
                      <Route path='/settings' element={<Settings />} />
                      <Route path='/snmp' element={<SNMP />} />
                      <Route path='/description' element={<SystemDescription />} />
                      <Route path='/users' element={<UserList />} />
                  </Routes>
              </Box>
          </Stack>
      </BrowserRouter>
  )
}

export default App
