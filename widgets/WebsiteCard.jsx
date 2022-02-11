import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Column from "../components/Column";

export default function WebsiteCard(){
    return(
        <Link href="https://www.betteryourhealth.co.za" passHref>
            <Column className="justify-center items-center space-y-4 text-white rounded-md shadow-lg h-1/2 w-full p-4 bg-purple-800 hover:bg-purple-500 transition-all duration-300 cursor-pointer">
                <FontAwesomeIcon
                    height={200}
                    width={200}
                    icon={faGlobeAfrica}
                />
                <h1 className="font-thin text-md">Goto Website</h1>
            </Column>
        </Link>
    )
}