import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const NavigateButton = (props: PropsType) => {
  const navigate = useNavigate();

  const handleNavigateButton = (event) => {
    event.preventDefault();

    console.log(props.path);

    Swal.fire({
      title: "Si cambias de vista perderás la configuración, estas seguro?",
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate(props.path);
      }
      // else if (result.isDenied) {
      //   Swal.fire("Puedes continuar", "", "info");
      // }
    });
  };

  return (
    <Button
      label={props.label}
      className="p-button-raised"
      onClick={handleNavigateButton}
    >
      {props.children}
    </Button>
  );
};

type PropsType = {
  path: string;
  label: string;
  children?: any;
};
