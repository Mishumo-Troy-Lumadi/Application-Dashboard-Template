import { useState } from "react";
import Container from "../components/Containter";
import Layout from "../components/Layout";
import SideBar from "../components/Sidebar";
import Spinner from "../components/Spinner";

export default function Settings() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <Layout>
        <SideBar />
        <div className="flex justify-center items-center h-screen w-full">
          <Spinner />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <SideBar />
        <Container>
          <h1>Settings</h1>
        </Container>
      </Layout>
    );
  }
}
