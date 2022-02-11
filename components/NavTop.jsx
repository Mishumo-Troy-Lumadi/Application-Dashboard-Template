import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import Fab from "./Fab";
import Layout from "./Layout";

export function NavTop({children}){
    return(
        <Layout className="cursor-default p-4 space-x-4 justify-between w-full items-center">
            <h1 className="w-full text-xl font-thin">
                {children}
            </h1>
            <Layout className="space-x-4 justify-end w-full items-center">
                <Fab
                    icon={faBell}
                    title="Notifications"
                    className="bg-purple-800 hover:bg-purple-500"
                    destination={"/"}
                />
                <Fab
                    icon={faUser}
                    title="Account"
                    className="bg-purple-800 hover:bg-purple-500"
                    destination={"/"}
                />
            </Layout>
        </Layout>
    )
}