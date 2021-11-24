import {CONTACT_PAGE, GALLERY_PAGE, HOME_PAGE, NOW_IN_SPACE_PAGE, SPOT_PAGE} from "./utils/routsPath";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import SpotPage from "./Pages/SpotPage/SpotPage";
import NowInSpacePage from "./Pages/NowInSpacePage/NowInSpacePage";

export const routs = [
    {
        path: HOME_PAGE,
        Component: HomePage,
        name: "home"
    },
    {
        path: GALLERY_PAGE,
        Component: GalleryPage,
        name: "gallery"
    },
    {
        path: SPOT_PAGE,
        Component: SpotPage,
        name: "spot the station"

    },
    {
        path: NOW_IN_SPACE_PAGE,
        Component: NowInSpacePage,
        name: "now in space"

    },
    {
        path: CONTACT_PAGE,
        Component: ContactPage,
        name: "contact"

    }
]