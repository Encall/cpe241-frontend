import { FlightCard } from './flightResult/FlightCard';
import fakeFlightData from '../../data/fakeFlightData.json';

export interface FlightData {
    airlineIcon: string;
    airline: string;
    flightNumber: string;
    FlightTime: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    from: string;
    destination: string;
    subtotal: number;
}

const FlightResult = () => {
    return (
        <div className="col-span-9 flex flex-col gap-y-3">
            {fakeFlightData.map((flight,index) => (
                <FlightCard flight={flight} index={index}/>
            ))}
        </div>
    );
};
export default FlightResult;
