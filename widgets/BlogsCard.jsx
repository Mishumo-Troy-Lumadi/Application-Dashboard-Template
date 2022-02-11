import { useState } from "react";
import Column from "../components/Column";
import Spinner from "../components/Spinner";

export default function BlogsCard(){

    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return (
            <Column className="justify-center items-center space-y-4 text-white rounded-md shadow-lg h-1/2 w-full p-4 bg-purple-800 hover:bg-purple-500 transition-all duration-300 cursor-pointer">
                <Spinner color={"bg-white"}/>
            </Column>
        );
    }

    return(
        <Column className="justify-center items-center space-y-4 text-white rounded-md shadow-lg h-1/2 w-full p-4 bg-purple-800 hover:bg-purple-500 transition-all duration-300 cursor-pointer">
            <h1 className="text-7xl font-bold">3</h1>
            <p>Blogs</p>
        </Column>
    )
}