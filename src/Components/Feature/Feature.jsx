import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"> <FaCheckCircle className="mr-4 text-green-400"/> {feature}</p>
        </div>
    );
};

export default Feature;