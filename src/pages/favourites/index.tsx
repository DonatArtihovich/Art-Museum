import FavoritesContent from "@components/favorites-content";
import Footer from "@components/footer";
import Header from "@components/header";
import PageLayout from "@components/page-layout";

export default function FavoritesPage() {
    return (
        <PageLayout
            header={<Header />}
            content={<FavoritesContent />}
            footer={<Footer />}
        />
    )
}