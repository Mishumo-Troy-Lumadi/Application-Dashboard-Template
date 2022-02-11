import Column from "../components/Column";

export default function Footer(){
    return(
        <Column className="cursor-default justify-center items-center p-10 text-gray-500 text-sm">
            <h1>Copyright@{new Date(Date.now()).getFullYear()}</h1>
            <h1>Developed by <span className="hover:text-purple-800 hover:underline">Mishumo Troy Lumadi</span>.</h1>
        </Column>
    )
}