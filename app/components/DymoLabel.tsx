type DymoLabelProps = {
  as?: 'div' | 'h1';
  className?: string;
};

export default function DymoLabel({ as = 'div', className = '' }: DymoLabelProps) {
  const Tag = as;

  return (
    <Tag className={`dymo-label ${className}`.trim()} aria-label="At My Job And Loving It">
      <span className="dymo-strip dymo-strip-top" aria-hidden="true">AT MY JOB</span>
      <span className="dymo-strip dymo-strip-bottom" aria-hidden="true">AND LOVING IT™</span>
    </Tag>
  );
}
