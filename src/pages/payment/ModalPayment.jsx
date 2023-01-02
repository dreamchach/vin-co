import { useEffect } from "react";
import styled from "styled-components";
import { instance } from "../../api/api";

const InputForm = styled.div`
  margin: 10px;
  > div {
    padding: 5px 0;
    line-height: 20px;
    font-size: 12px;
  }
  > input {
    padding: 10px 0;
    width: 100%;
    outline: 1px solid black;
    &:invalid {
      border: none;
      outline: 1px solid red;
    }
    &:invalid + div {
      display: block;
      color: red;
    }
    &:valid {
      outline: none;
    }
    &:valid + div {
      display: none;
    }
  }
`;

const ModalPayment = ({
  bank,
  closeModalPayment,
  loading,
  setLoading,
  accountInfo,
  setAccountInfo,
  accountLink,
  setAccountLink,
  setAccount,
}) => {
  useEffect(() => {
    if (accountLink === true) {
      const getData = async () => {
        const token = localStorage.getItem("token");

        try {
          const res = await instance.request("/account", {
            method: "post",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              bankCode: bank.code,
              accountNumber: accountInfo.accountNumber,
              phoneNumber: accountInfo.phoneNumber,
              signature: true,
            },
          });
          if (res.status === 200) {
            console.log(res.data);
            setAccount(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, [accountLink]);

  const accountLength = bank.digits.reduce((a, b) => a + b, 0);

  const setPhoneNumber = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setAccountInfo((prev) => {
      return { ...prev, phoneNumber: value };
    });
  };

  const accountInfoNumber = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setAccountInfo((prev) => {
      return { ...prev, accountNumber: value };
    });
  };

  const setOK = async () => {
    if (
      String(accountInfo.accountNumber).length === accountLength &&
      String(accountInfo.phoneNumber).length === 11
    ) {
      // eslint-disable-next-line no-sequences
      return await setLoading(true), setAccountLink(true), closeModalPayment();
    }
    return alert("계좌연동이 되지 않았습니다. 다시 확인해주세요.");
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: "9999",
      }}
    >
      <div
        style={{
          width: "350px",
          height: "fit-content",
          backgroundColor: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ fontSize: "20px", margin: "20px", fontWeight: "700" }}>
          결제 진행
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px 20px",
              borderBottom: "1px solid blue",
            }}
          >
            <div>결제은행</div>
            <div>{bank.name}</div>
          </div>
          <div style={{ margin: "20px 20px 0" }}>
            <InputForm>
              <input
                type="text"
                placeholder="계좌번호"
                maxLength={accountLength}
                minLength={accountLength}
                value={accountInfo.accountNumber || ""}
                onChange={accountInfoNumber}
                required
              />
              <div>
                계좌번호를 올바르게 입력해주세요
                <br />
                (&quot;-&quot;는 입력하지 않습니다.)
              </div>
            </InputForm>
            <InputForm>
              <input
                type="text"
                placeholder="전화번호"
                maxLength="11"
                value={accountInfo.phoneNumber || ""}
                onChange={setPhoneNumber}
                required
              />
              <div>
                전화번호를 올바르게 입력해주세요
                <br />
                (&quot;-&quot;는 입력하지 않습니다.)
              </div>
            </InputForm>
          </div>
          <button
            type="button"
            onClick={setOK}
            style={{
              backgroundColor: "lightblue",
              textAlign: "center",
              fontSize: "25px",
              width: "100%",
              padding: "10px",
              fontWeight: "700",
            }}
          >
            결제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;
