import React from "react";
import { StatusBar } from "react-native";
import Nav from "./navigation/mainNav";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import tw from "./utils/tw";
import { useDeviceContext } from "twrnc";

const qc = new QueryClient();

export default function App() {
  useDeviceContext(tw);

  return (
    <QueryClientProvider client={qc}>
      <Nav />
      <StatusBar />
    </QueryClientProvider>
  );
}
