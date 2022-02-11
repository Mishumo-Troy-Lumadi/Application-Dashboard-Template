import { useState } from "react";
import Row from "../components/Row";
import Statistic from "../components/Statistic";

export default function Statistics(){

    const tempData = [
        {
            title:"Patients",
            previous:50,
            current:80
        }, {
            title: "Bookings",
            previous: 60,
            current: 40
        }, {
            title: "Profit",
            previous: 5000,
            current: 5500
        }, {
            title: "Page Visits",
            previous: 10,
            current: 10
        }
        
    ]


    const [data, setData] = useState(tempData)

/*
    setInterval(() => {
       setData(data.map(stat=>{
            stat.current += 10

            return stat
        })
       )
    }, 5000);
*/

    return(
        <Row className="justify-between">
            {data.map(stat=>{
                return (
                    <Statistic
                        key={data.indexOf(stat)}
                        title={stat.title}
                        previous={stat.previous}
                        current = {stat.current}
                    />
                )
            })}
        </Row>
    )
}