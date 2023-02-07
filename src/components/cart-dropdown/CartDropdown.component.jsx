import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  Button
} from "./CartDropdown.style.jsx";

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItems>
        <EmptyMessage>Your Cart is empty</EmptyMessage>
      </CartItems>
      <Button>Go to checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
