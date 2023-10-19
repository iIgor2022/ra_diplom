import { useNavigate } from "react-router";

function CartHeader({ count }) {
  const navigate = useNavigate();

  return (
    <div
      className="header-controls-pic header-controls-cart"
      onClick={() => {
        navigate(`${import.meta.env.VITE_BASE_URL}/cart`)
      }}
    >
      {count !== 0 &&
        <div className="header-controls-cart-full">{count}</div>
      }
      <div className="header-controls-cart-menu"></div>
    </div>
  )
}

export default CartHeader;