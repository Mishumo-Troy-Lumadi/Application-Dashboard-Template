import {  useEffect, useState } from "react";
import Appointment from "../components/Appointment";
import Column from "../components/Column";
import Row from "../components/Row";
import Spinner from "../components/Spinner";



export default function Appointments({ titile, onDateChange,className}) {

    const [isLoading, setIsLoading] = useState(true);
    const [date, setDate] = useState(new Date().toDateString())

    useEffect(()=>{
        if(onDateChange!= null){
            onDateChange.current = changeDate
        }
    })

    function changeDate(d) {
        setDate(d)
    }

    className = className || ""
    titile = titile || "Appointments"

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return (
            <Column className={`rounded-md space-y-3 font-light shadow-lg h-96 w-3/4 p-4 bg-purple-50 ${className}`}>
                <div className="flex justify-center items-center h-screen w-full cursor-wait">
                    <Spinner />
                </div>
            </Column>
        );
    }

    const temp_data = [
        {
            fname: "Mishumo Troy",
            lname: "Lumadi",
            email: "tmlumadi@gail.com",
            mobile: "071370847",
            time: "10:00",
            date: "09 Jan 2022"
        }, 
        {
            fname: "Khuthadzo",
            lname: "Thovhakale",
            email: "kthovhakale@gmail.co.za",
            mobile: "0713704879",
            time: "10:10",
            date: "18 Jan 2022"
        },
        {
            fname: "Mishumo Troy",
            lname: "Lumadi",
            email: "tmlumadi@gmail.com",
            mobile: "0713704879",
            time: "10:10",
            date: "18 Jan 2022"
        },
    ]

    let cnt = 0

    let appointments = temp_data.sort((a, b) => a.time.localeCompare(b.time)).map(appointment => {
        if (new Date(appointment.date).toDateString() == date) {
            cnt++
            return (
                <Appointment
                    key={temp_data.indexOf(appointment)}
                    fname={appointment.fname}
                    lname={appointment.lname}
                    email={appointment.email}
                    mobile={appointment.mobile}
                    time={appointment.time}
                />
            )
        }
    })


    console.log(appointments.length);

    if(cnt == 0){
        appointments = <Column className={" h-full justify-center items-center"}>No Appointments for {date}</Column>
    }

    

    return (
        <Column className="rounded-md space-y-3 font-light shadow-lg h-96 w-3/4 py-4 px-7  bg-purple-50">
            <Row className={"space-x-4 justify-between items-center"}>
                <h1 className="text-xl text-purple-800">{titile}</h1>{}
                <h1 className="text-xs text-gray-400">{date}</h1>
            </Row>
            
            <Column className="relative ">
                <Row className="absolute text-sm inset-0 h-10 justify-center grid text-center rounded-t-md grid-cols-5 items-center border-b-2 text-gray-500 w-full p-2">
                    <Column>First Name</Column>
                    <Column>Last Name</Column>
                    <Column>Email</Column>
                    <Column>Mobile</Column>
                    <Column>Time</Column>
                </Row>
                <Column className=" text-md my-4 overflow-y-auto h-64 mt-11 text-gray-900">
                    {appointments}
                </Column>
            </Column>
        </Column>
    )
}