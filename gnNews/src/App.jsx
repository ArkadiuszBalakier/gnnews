import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { Navbar } from "./components/Navbar";

import { Grid } from "@mui/material";

function App() {
  return (
    <main>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Navbar />
        </Grid>
        <Grid item xs={10}>
          <AllRoutes />
        </Grid>
      </Grid>

      <Footer />
    </main>
  );
}

export default App;
