import { DescriptionBox, DescriptionTitle, DescriptionText } from './ProductDescription.styles';

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <DescriptionBox>
      <DescriptionTitle variant="h5">Description</DescriptionTitle>
      <DescriptionText variant="body1" color="text.primary">
        {description}
      </DescriptionText>
    </DescriptionBox>
  );
};
