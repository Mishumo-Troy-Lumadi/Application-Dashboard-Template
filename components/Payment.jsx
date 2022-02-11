import Column from "./Column";
import Row from "./Row";

export default function Payment({ fname, lname, email, mobile, date }) {
    return (
        <Row className="grid text-center rounded-t-md border-b-2 grid-cols-5 items-center w-full px-2 py-2 hover:bg-purple-100 cursor-pointer">
            <Column>{fname}</Column>
            <Column>{lname}</Column>
            <Column>{email}</Column>
            <Column>{mobile}</Column>
            <Column>{date}</Column>
        </Row>
    )
}