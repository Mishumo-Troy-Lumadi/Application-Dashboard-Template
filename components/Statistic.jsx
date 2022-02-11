import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretUp, faDownload, faEquals } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "./Column";
import Row from "./Row";

export default function Statistic({title, previous, current}){

    let difference = (current - previous)
    let sum = current + previous
    
    let percentage = ((current / sum) * 100).toPrecision(3)
    let increase = ((difference / previous) * 100).toPrecision(3)
    
    let icon = null
    let description = ""

    let color = ""

    if(increase < 0){
        icon = faCaretDown
        color = "text-red-500"
        description = `${increase}% decrease`
    }else if(increase > 0){
        icon = faCaretUp
        color = "text-green-500"
        description = `${increase}% increase`
    }else{
        icon = faEquals
        color = "text-yellow-500"
        description = "No change"
    }

    
    
    return (
        <Row className="w-56 cursor-default font-thin h-24 p-4 justify-between items-center rounded-md shadow-lg bg-purple-50 backdrop-blur">
            <Column className="space-y-2">
                <h1 className="text-2xl">{title}</h1>
                <h1 className={`text-xs ${color}`}>{`${description}`}</h1>
            </Column>
            <Row className={`justify-center items-center space-x-2 ${color}`}>
                <FontAwesomeIcon  icon={icon} />
                <h1>{`${percentage}%`}</h1>
            </Row>
        </Row>
    )
}