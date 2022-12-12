import styled from "styled-components";
import { containerStyle } from "../../styles/styleConstants";

const Container = styled.div`
  ${containerStyle}
  display: flex;
  padding-top: 5rem;

  .nav {
    padding-right: 7rem;
  }

  .nav button {
    display: block;
    color: #27397d;
    font-size: 0.9rem;
    margin: 15% 0;
    cursor: pointer;
  }

  .user {
    display: flex;
    padding: 10% 0;
  }

  .user-icon {
    font-size: 6rem;
    cursor: pointer;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1em;
    color: black;
  }

  .user-info h2 {
    font-size: 1.5rem;
  }

  .content {
    display: flex;
  }

  .title {
    font-weight: 600;
    font-size: 1.3rem;
  }

  .count-num {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 1%;
    line-height: 1.3rem;
    text-align: center;
    font-size: 0.8rem;
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .detail {
    color: #c7ccdd;
    text-align: center;
  }
`;

export { Container };
