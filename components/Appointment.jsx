import Column from "./Column";
import Row from "./Row";

export default function Appointment({ fname, lname, email, mobile,time}){


    return(
        <>
            <Row className="grid text-center rounded-t-md border-b-2 grid-cols-5 justify-center items-center w-full px-2 py-2 hover:bg-purple-100 cursor-pointer">
                <Column>{fname}</Column>
                <Column>{lname}</Column>
                <Column className={"text-left"}>{email}</Column>
                <Column>{mobile}</Column>
                <Column>{time}</Column>
            </Row>
        </>
       
    )
}