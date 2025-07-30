import { sizeConfigs, StyledProductImage, StyledImageCard } from './ProductImage.styles';

interface ProductImageProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

export const ProductImage = ({
  src,
  alt,
  size = 'medium',
}: ProductImageProps) => {
  const sizeConfig = sizeConfigs[size];

  return (
    <StyledImageCard sizeConfig={sizeConfig}>
      <StyledProductImage
        src={src}
        alt={alt}
        sizeConfig={sizeConfig}
      />
    </StyledImageCard>
  );
};
