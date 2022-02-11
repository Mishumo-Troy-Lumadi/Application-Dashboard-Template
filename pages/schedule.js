import { useRef, useState } from "react";
import Column from "../components/Column";
import Layout from "../components/Layout";
import { NavTop } from "../components/NavTop";
import SideBar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Footer from "../widgets/Footer";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import Appointments from "../widgets/Appointments";
import Row from "../components/Row";

export default function Schedule() {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState();
  const appointments = useRef();

  function dateChanged(d) {
    setDate(d)
    d = new Date(d).toDateString()
    appointments.current(d)
   
  }

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return (
      <Layout>
        <SideBar />
        <div className="flex justify-center items-center h-screen w-full cursor-wait">
          <Spinner />
        </div>
      </Layout>
    );
  }

  return (
    <Layout className="w-screen h-screen bg-purple-100">
      <SideBar />

      <Column className="space-y-5 px-20 justify-between overflow-y-auto w-full">
        <NavTop>
          Your <span className="text-purple-800">Schedule</span>
        </NavTop>

        <Row className="space-x-5 mt-10">
          <Column
            className={"w-1/3 h-fit p-4 rounded-md shadow-lg bg-purple-50"}
          >
            <DatePickerCalendar
              date={date}
              onDateChange={dateChanged}
              locale={enGB}
              modifiersClassNames="p-2 bg-purple-800"
            />
          </Column>
          <Appointments onDateChange={appointments} className={"flex-grow"} />
        </Row>

        <Footer />
      </Column>
    </Layout>
  )
}
