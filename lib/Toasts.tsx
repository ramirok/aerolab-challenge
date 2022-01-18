import Image from "next/image";
import toast from "react-hot-toast";
import { TextL1 } from "../components/ui/TextComponents";
import CloseIcon from "../assets/x.svg";

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

const toasts = { success: toastSuccess, fail: toastFail };
export default toasts;
