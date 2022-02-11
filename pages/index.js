import { useState } from "react";
import Column from "../components/Column";
import Row from "../components/Row";
import Layout from "../components/Layout";
import { NavTop } from "../components/NavTop";
import SideBar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Statistics from "../widgets/Statistics";
import DateCard from "../widgets/DateCard";
import WebsiteCard from "../widgets/WebsiteCard";
import BlogsCard from "../widgets/BlogsCard";
import Footer from "../widgets/Footer";
import Appointments from "../widgets/Appointments";
import Payments from "../widgets/Payments";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return (
      <Layout>
        <SideBar />
        <div className="flex justify-center items-center h-screen w-full cursor-wait">
          <Spinner />
        </div>
      </Layout>
    );
  }

  return (
    <Layout className="w-screen h-screen bg-purple-100">
      <SideBar />

      <Column className="space-y-5 px-20 overflow-y-auto w-full">
        <NavTop>
          Hello <span className="text-purple-800">Khuthadzo</span>
        </NavTop>

        <Column className="space-y-5">
          <Statistics />

          <Row className="space-x-4">
            <DateCard />
            <Appointments titile={"Todays Appointments"} />
          </Row>

          <Row className="space-x-4">
            <Payments />
            <Column className="w-1/4 space-y-4">
              <BlogsCard />
              <WebsiteCard />
            </Column>
          </Row>
        </Column>
        <Footer />
      </Column>
    </Layout>
  );
}
