import HeaderComponent from "../../components/HeaderComponent.jsx";
import FooterComponent from "../../components/FooterComponent.jsx";
import GetStartedComponent from "../../components/main/GetStartedComponent.jsx";
import StatisticsComponent from "../../components/main/StatisticsCompoonent.jsx";
import DownloadComponent from "../../components/main/DownloadComponent.jsx";
import OurRestaurantsComponent from "../../components/main/OurRestaurantsComponent.jsx";

function MainPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderComponent/>

            <main className="flex-grow">
                <GetStartedComponent/>

                <StatisticsComponent/>

                <DownloadComponent/>

                <OurRestaurantsComponent/>
            </main>

            <FooterComponent/>
        </div>
    );
}

export default MainPage;
