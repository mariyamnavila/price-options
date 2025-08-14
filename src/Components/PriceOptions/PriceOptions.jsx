import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
                "Access to all basic gym equipment",
                "Locker room access",
                "Free water station",
                "Open 6 AM - 10 PM",
                "Weekly progress tracking",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
                "All Basic plan features",
                "Access to group fitness classes",
                "1 free personal training session per month",
                "Access to yoga and pilates rooms",
                "Early booking for classes",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 79.99,
            "features": [
                "All Standard plan features",
                "Unlimited personal training sessions",
                "Access to sauna & steam room",
                "Free protein shakes after workouts",
                "Private workout zones",
                "Priority locker access",
                "Free guest passes (2 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Couple Plan",
            "price": 119.99,
            "features": [
                "Access for 2 people",
                "All Premium features",
                "2 personalized nutrition plans",
                "Couples workout sessions",
                "Discount on couples massage",
                "Joint progress tracking app access"
            ]
        },
        {
            "id": 5,
            "name": "Annual VIP",
            "price": 899.99,
            "features": [
                "All Premium features",
                "Priority booking for all classes",
                "Exclusive gym merchandise pack",
                "1-on-1 monthly wellness coaching",
                "Access to VIP lounge",
                "Annual health check-up",
                "Invitations to exclusive fitness events"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid grid-cols-3 gap-6 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;