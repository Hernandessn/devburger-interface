import PropTypes from "prop-types";
import { CardImage, Container } from "./styles";
import { CartButton } from "../CartButton";

export function CardProduct({ product }) {
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton />
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currencyValue: PropTypes.string.isRequired,
  }).isRequired,
};
