import {
  QuantityContainer,
  QuantityLabel,
  QuantityControls,
  QuantityValue,
  QuantityButton,
} from './ProductQuantitySelector.styles';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max,
  label = 'Qty',
}: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (!max || value < max) {
      onChange(value + 1);
    }
  };

  return (
    <QuantityContainer>
      <QuantityLabel variant="caption">{label}</QuantityLabel>
      <QuantityControls>
        <QuantityButton onClick={handleDecrease} disabled={value <= min}>
          -
        </QuantityButton>
        <QuantityValue variant="h5" title="Current quantity">
          {value}
        </QuantityValue>
        <QuantityButton onClick={handleIncrease} disabled={max ? value >= max : false}>
          +
        </QuantityButton>
      </QuantityControls>
    </QuantityContainer>
  );
};
