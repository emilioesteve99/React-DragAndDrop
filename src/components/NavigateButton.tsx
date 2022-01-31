import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const NavigateButton = (props: PropsType) => {

    const navigate = useNavigate();

    const handleNavigateButton = (event) => {
        event.preventDefault();
        navigate(props.path);
    }

    return (
        <Button
            label={props.label}
            className="p-button-raised"
            onClick={handleNavigateButton}
        >
            {props.children}
        </Button>
    )
}

type PropsType = {
    path: string;
    label: string;
    children?: any;
}