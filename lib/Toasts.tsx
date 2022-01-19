import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { TextL1 } from "../components/ui/TextComponents";
import CloseIcon from "../assets/x.svg";
import ErrorIcon from "../assets/error.svg";
import { theme } from "../components/ui/styleVariables";
import styled from "styled-components";

const toastSuccess = (title: string) => {
  return toast.success((t) => (
    <StyledToastContainer>
      <div>
        <TextL1 nowrap color="black">
          {title}
        </TextL1>
        <TextL1 nowrap> redeemed successfully</TextL1>
      </div>
      <div onClick={() => toast.dismiss(t.id)}>
        <Image src={CloseIcon} alt="close" width={24} height={24} />
      </div>
    </StyledToastContainer>
  ));
};

const toastFail = (title: string) => {
  return toast.error((t) => (
    <StyledToastContainer>
      <div>
        <TextL1 nowrap color="black">
          Error{" "}
        </TextL1>
        <TextL1>{title}</TextL1>
      </div>
      <div onClick={() => toast.dismiss(t.id)}>
        <Image src={CloseIcon} alt="close" width={24} height={24} />
      </div>
    </StyledToastContainer>
  ));
};

const ToasterCustom = () => (
  <Toaster
    position="bottom-left"
    reverseOrder={true}
    toastOptions={{
      success: {
        style: {
          border: `2px solid ${theme.colors.green.default}`,
          height: "80px",
          width: "100%",
          minWidth: "min-content",
        },
      },
      error: {
        style: {
          border: `2px solid ${theme.colors.red.default}`,
          height: "80px",
          width: "100%",
          minWidth: "min-content",
        },
        icon: (
          <div style={{ width: "20px", height: "20px" }}>
            <Image src={ErrorIcon} alt="error" />
          </div>
        ),
      },
    }}
  />
);

const toasts = { success: toastSuccess, fail: toastFail, ToasterCustom };
export default toasts;

const StyledToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 769px) {
      flex-direction: row;
      flex-wrap: nowrap;
      white-space: pre;
    }
  }
  & > div:last-child {
    width: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (min-width: 769px) {
      margin-left: 10px;
    }
  }
`;
