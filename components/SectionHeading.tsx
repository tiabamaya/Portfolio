type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({
  number,
  title,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
    </div>
  );
}