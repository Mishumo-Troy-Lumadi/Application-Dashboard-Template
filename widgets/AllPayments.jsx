import { useState } from "react";
import Column from "../components/Column";
import Payment from "../components/Payment";
import Row from "../components/Row";
import Button from "../components/Button"
import Spinner from "../components/Spinner";

export default function AllPayments() {

    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return (
            <Column className="rounded-md space-y-3 font-light shadow-lg h-full w-full p-4 bg-purple-50">
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
            date: "09 Jan 2022"
        }, {
            fname: "Thendo",
            lname: "Thovhakale",
            email: "tthovhakale@gmail.com",
            mobile: "0713704879",
            date: "10 Jan 2022"
        },
    ]

    let payments = temp_data.map(payment => {
        return (
            <Payment
                key={temp_data.indexOf(payment)}
                fname={payment.fname}
                lname={payment.lname}
                email={payment.email}
                mobile={payment.mobile}
                date={payment.date}
            />
        )
    })

    return (
        <Column className="rounded-md space-y-3 font-light shadow-lg h-full w-full py-4 px-7 bg-purple-50">
           
            <Column className="relative mt-10">
                <Row className="absolute text-sm inset-0 h-10 justify-center grid text-center rounded-t-md grid-cols-5 items-center border-b-2 text-gray-500 w-full p-2">
                    <Column>First Name</Column>
                    <Column>Last Name</Column>
                    <Column>Email</Column>
                    <Column>Mobile</Column>
                    <Column>Date</Column>
                </Row>
                <Column className=" space-y-2 text-md my-4 overflow-y-auto h-64 mt-11 text-gray-900">
                    {
                        payments
                    }
                </Column>
            </Column>
        </Column>
    )
}