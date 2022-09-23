import './Borders.scss';

interface BorderProps {
  countryName: {
    name: {
      common: string;
    };
  };
}
const Borders = ({ countryName }: BorderProps) => {
  return (
    <div>
      <p className='border'>{countryName.name.common}</p>
    </div>
  );
};

export default Borders;
