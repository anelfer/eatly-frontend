import TestTextComponent from "../components/TestTextComponent.jsx";
import {Link} from "react-router-dom";

function NewTestPage() {
    return (
        <>
            <TestTextComponent/>

            <Link to="/">Go to main page</Link>
        </>
    );
}

export default NewTestPage;