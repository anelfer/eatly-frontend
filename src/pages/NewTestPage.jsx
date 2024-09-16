import TestTextComponent from "../components/TestTextComponent.jsx";
import {Link} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";

function NewTestPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderComponent/>

            <main className="flex-grow">
                <TestTextComponent/>

                <Link to="/">Go to main page</Link>
            </main>

            <FooterComponent/>
        </div>
    );
}

export default NewTestPage;