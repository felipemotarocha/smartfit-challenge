import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}

export default App;
