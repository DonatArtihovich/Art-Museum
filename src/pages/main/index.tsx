import Footer from "@components/footer";
import Header from "@components/header";
import MainContent from "@components/main-content";
import PageLayout from "@components/page-layout";

export default function MainPage() {
    return (
        <PageLayout
            header={<Header />}
            content={<MainContent />}
            footer={<Footer />}
        />
    )
}