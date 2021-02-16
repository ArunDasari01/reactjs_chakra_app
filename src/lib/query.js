import { QueryClient, QueryClientProvider } from "react-query";
import axios from "./axios";

async function defaultQueryFn({ queryKey }) {
  const { data } = await axios.get(`${queryKey}`);
  return data;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { queryFn: defaultQueryFn, refetchOnWindowFocus: false },
  },
});

export default function ReactQueryConfig({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
