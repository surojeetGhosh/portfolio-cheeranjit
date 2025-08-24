export interface CardProps {
    className: string;
    heading: string;
    body: string;
    bodyColor?: string;
    headingColor?: string;
}


export default function Card(props: CardProps) {
    return (
        <div className={props.className}>
            <div className={`${props.headingColor? props.headingColor: "bg-gray-100"} p-3 md:p-4 lg:p-5 shadow-2xl rounded-2xl`}>
                <div className="uppercase tracking-widest p-2 font-bold text-center">{props.heading}</div>
                <div className={`${props.bodyColor? props.bodyColor: "bg-gray-500"} text-justify text-white p-5 rounded-2xl`}>{props.body}</div>
            </div>
        </div>
    );
}
