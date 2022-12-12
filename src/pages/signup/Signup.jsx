import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { MdOutlineCameraAlt } from "react-icons/md";
import { instance } from "../../api/api";
import { Container, StyledForm, UploaderWrapper } from "./style";

const Signup = () => {
  const navigate = useNavigate();
  const shcema = yup.object().shape({
    email: yup.string().required("이메일을 입력해주세요"),
    password: yup.string().min(8).required("비밀번호를 입력해주세요"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
      .required(),
    displayName: yup.string().required("이름을 입력해주세요"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shcema),
  });

  const onSubmit = async (data) => {
    const { email, password, displayName, profileImg } = data;

    // let profileImgBase64 = null;

    // const toBase64 = (profileImg) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(profileImg);
    //   reader.addEventListener("load", async (e) => {
    //     profileImgBase64 = e.target.result;
    //     console.log(profileImgBase64);
    //   });
    // };

    // toBase64(profileImg[0]);

    try {
      const res = await instance.request("/auth/signup", {
        method: "post",
        data: {
          email,
          password,
          displayName,
          // profileImgBase64,
        },
      });
      console.log(res);
      console.log(res.data);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }

    // console.log(profileImgBase64);
    console.log(data);
  };

  return (
    <section
      style={{
        margin: "80px 0",
      }}
    >
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <UploaderWrapper>
            <label className="img-uploader">
              <div className="profile" />
              <span className="icon-wrapper">
                <MdOutlineCameraAlt />
              </span>
              <input type="file" {...register("profileImg")} />
            </label>
          </UploaderWrapper>
          <input type="text" placeholder="이메일" {...register("email")} />
          <input
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register("confirmPassword")}
          />

          <div className="username-wrapper">
            <label htmlFor="username">이름</label>
            <input
              type="text"
              id="username"
              placeholder="이름을 입력하세요"
              {...register("displayName")}
            />
          </div>

          <button type="submit">가입하기</button>
        </StyledForm>
      </Container>
    </section>
  );
};
export default Signup;
