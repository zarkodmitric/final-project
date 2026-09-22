import { Button } from "../ui/button";

const Employee = (props) => {
    return(
        <div className="flex flex-col items-center h-auto w-100 p-10">
            <img src={props.image} alt={props.name} className="w-80 h-120 object-cover"/>
            <div className="flex flex-col gap-2 mt-4 mb-6">
                <h3 className="text-xl">{props.name}</h3>
                <p className="text-gray-400">{props.position}</p>
                <p className="text-justify">{props.description}</p>
            </div>
            <Button className="w-50 h-10 cursor-pointer mt-auto">Contact</Button>
        </div>
    )
}

export default Employee;