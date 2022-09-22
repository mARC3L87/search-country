import './Borders.scss';

interface BorderProps {
  border: string;
}
const Borders = ({ border }: BorderProps) => {
  return <div>{border}</div>;
};

export default Borders;
