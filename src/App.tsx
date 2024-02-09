import { QueryClient, QueryClientProvider } from "react-query";
import Welcome from "./components/welcome";
import Header from "./components/header";
import Filter from "./components/filter";
import Labels from "./components/labels";
import Locations from "./components/locations";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Welcome />
      <Filter />
      <Labels />
      <Locations />
    </QueryClientProvider>
  );
}

export default App;
