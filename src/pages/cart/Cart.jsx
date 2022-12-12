import "./Cart.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin-inline: auto;
`;

const Cart = () => {
  return (
    <Container>
      <h2 className="Carth2">
        장바구니<span className="itemSize">0</span>
      </h2>

      <div className="table">
        <div className="th">
          <div className="itemName">상품 이름</div>
          <div className="th-itemSize">수량</div>
          <div className="itemMoney">주문금액</div>
          <div className="postInfo">배송정보</div>
        </div>
        <div className="emptyTD">
          <MdOutlineShoppingCart
            style={{
              fontSize: "3.125rem",
              marginBottom: "1rem",
            }}
          />
          <div>장바구니가 비어있습니다.</div>
        </div>
      </div>

      <button className="home" type="button">
        <Link to="/">계속 쇼핑하기</Link>
      </button>
    </Container>
  );
};
export default Cart;
