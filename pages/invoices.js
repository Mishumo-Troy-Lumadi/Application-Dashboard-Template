import Column from "../components/Column";
import Layout from "../components/Layout";
import { NavTop } from "../components/NavTop";
import Row from "../components/Row";
import SideBar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Payments from '../widgets/Payments'
import Footer from "../widgets/Footer";
import { useRef, useState } from "react";
import AllPayments from "../widgets/AllPayments";

export default function Invoices({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const invoices = useRef();

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

            <Column className="space-y-5 px-20 justify-between overflow-y-auto w-full">
                <NavTop>
                    All <span className="text-purple-800">Invoices</span>
                </NavTop>

                <Column className="h-full space-x-5 mt-10">
                   <AllPayments/>
                </Column>

                <Footer />
            </Column>
        </Layout>
    );
}