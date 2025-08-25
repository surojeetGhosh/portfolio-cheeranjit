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
      <div
        className={`${props.headingColor ? props.headingColor : "bg-gray-100"} rounded-2xl p-3 shadow-2xl md:p-4 lg:p-5`}
      >
        <div className="p-2 text-center font-bold tracking-widest uppercase">
          {props.heading}
        </div>
        <div
          className={`${props.bodyColor ? props.bodyColor : "bg-gray-500"} rounded-2xl p-5 text-justify text-white`}
        >
          {props.body}
        </div>
      </div>
    </div>
  );
}
