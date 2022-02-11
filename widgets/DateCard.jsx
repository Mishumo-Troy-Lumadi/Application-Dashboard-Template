import Column from "../components/Column";

export default function DateCard() {

    let d = new Date(Date.now()).toDateString().split(' ')

    let date = d[2]
    let month = d[1]
    let year = d[3]
    let day = d[0]

    return (
        <Column className="justify-center items-center space-y-4 rounded-md shadow-lg h-full w-1/4 p-4 bg-purple-800 text-white hover:bg-purple-500 transition-all duration-300 cursor-pointer">
            <h1 className="text-7xl font-bold">{date}</h1>
            <p>{day} {month} {year}</p>
        </Column>
    )
}