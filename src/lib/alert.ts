import Swal from "sweetalert2";
import { SweetAlertIcon } from "sweetalert2";

type Props = {
  title: string;
  text: string;
  icon: SweetAlertIcon;
};
export const showAlert = ({ title, text, icon }: Props) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: "Ok",
    customClass: {
      confirmButton: "confirmBtn",
      htmlContainer: "popupText",
      title: "popupTitle",
    },
  });
};
