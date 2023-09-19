import { useEffect, useState } from "react";
import { testingService } from "./services/testing.service";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "./utilities/snackbar-manager";

const App = () => {
  const [morty, setMorty] = useState({} as any);

  const fetchMorty = async () => {
    const { data } = await testingService();

    setMorty(data);
  };

  useEffect(() => {
    fetchMorty();
  }, []);

  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <h1>App</h1>
      <p>{JSON.stringify(morty)}</p>
    </SnackbarProvider>
  );
};

export default App;
