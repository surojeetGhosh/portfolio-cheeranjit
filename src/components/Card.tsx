export interface CardProps {
  className: string;
  heading: string;
  body: string;
  bodyColor?: string;
  headingColor?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className={`${props.className} engineering-card group`}>
      <div className="h-full w-full rounded-2xl overflow-hidden shadow-card hover:shadow-engineering transition-all duration-300">
        <div className={`${props.headingColor ? props.headingColor : "bg-gradient-to-r from-primary-600 to-primary-800 text-white"} p-6 text-center`}>
          <h3 className="font-bold text-lg md:text-xl tracking-wide uppercase font-inter">
            {props.heading}
          </h3>
        </div>
        <div
          className={`${props.bodyColor ? props.bodyColor : "bg-white text-engineering-darkGray"} p-6 text-justify leading-relaxed`}
        >
          <p className="text-sm md:text-base">{props.body}</p>
        </div>
      </div>
    </div>
  );
}
