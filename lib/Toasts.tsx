import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { TextL1 } from "../components/ui/TextComponents";
import CloseIcon from "../assets/x.svg";
import ErrorIcon from "../assets/error.svg";

const toastSuccess = (title: string) => {
  return toast.success((t) => (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextL1 color="black">{title}</TextL1>
      <TextL1 nowrap> redeemed successfully</TextL1>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => toast.dismiss(t.id)}
      >
        <Image src={CloseIcon} alt="close" />
      </div>
    </div>
  ));
};

const toastFail = (title: string) => {
  return toast.error((t) => (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TextL1 nowrap>{title}</TextL1>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => toast.dismiss(t.id)}
      >
        <Image src={CloseIcon} alt="close" />
      </div>
    </div>
  ));
};

const ToasterCustom = () => (
  <Toaster
    position="bottom-left"
    reverseOrder={true}
    toastOptions={{
      success: {
        style: {
          border: "2px solid #29CC74",
          padding: "0 27px",
          height: "80px",
          minWidth: "530px",
          maxWidth: "550px",
        },
      },
      error: {
        style: {
          border: "2px solid #E07F4F",
          padding: "0 27px",
          height: "80px",
          minWidth: "530px",
          maxWidth: "550px",
        },
        icon: <Image src={ErrorIcon} alt="error" />,
      },
    }}
  />
);

const toasts = { success: toastSuccess, fail: toastFail, ToasterCustom };
export default toasts;
