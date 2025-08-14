import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, features, price } = option
    return (
        <div className="bg-blue-500 rounded-lg p-4 text-white flex flex-col ">
            <h2 className="text-center">
                <span className="text-6xl font-extrabold">
                    {price}
                </span>
                <span className="text-2xl">
                    /mon
                </span>
            </h2>
            <h4 className="text-xl text-center py-4">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-500 w-full py-2 font-bold rounded-lg hover:bg-green-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;