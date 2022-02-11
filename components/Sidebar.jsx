import { faBlog, faCalendar, faCog, faCube, faDatabase, faFileInvoice, faFilePrescription, faListOl, faNewspaper, faNotesMedical, faPlus, faPrescription, faReceipt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FabLink from "./FabLink";

export default function SideBar() {

    function execute(e) {
        alert(`${e.target.textContent} was clicked`)
    }


    return (
        <div className="flex flex-col rounded-r-lg space-y-6 justify-between items-center bg-purple-800 p-4 w-fit h-screen">
            <div>
                <FontAwesomeIcon className="text-white" icon={faCube} />
            </div>
            <div className="flex space-y-5 flex-col">
                <FabLink
                    icon={faDatabase}
                    title="Dashboard"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/"}
                />
                <FabLink
                    icon={faCalendar}
                    title="Schedule"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/schedule"}
                />
                <FabLink
                    icon={faReceipt}
                    title="Invoices"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/invoices"}
                />
                <FabLink
                    icon={faListOl}
                    title="Patients"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/"}
                />
                <FabLink
                    icon={faNotesMedical}
                    title="Pricings"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/"}
                />
                <FabLink
                    icon={faNewspaper}
                    title="Blogs"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/"}
                />
            </div>
            <div className="flex flex-col justify-self-end space-y-5">
                <FabLink
                    icon={faSignOutAlt}
                    title="Sign out"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/"}
                />
                <FabLink
                    icon={faCog}
                    title="Settings"
                    className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
                    destination={"/settings"}
                />
            </div>
        </div>
    )
}