import { ArtworkPageContent } from "@components/artwork-content";
import Footer from "@components/footer";
import Header from "@components/header";
import PageLayout from "@components/page-layout";

export default function ArtworkPage() {
    return (
        <PageLayout
            header={<Header />}
            content={<ArtworkPageContent />}
            footer={<Footer />}
        />
    )
}