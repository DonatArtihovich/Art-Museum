type PageLayoutProps = {
    header: React.ReactNode | null;
    content: React.ReactNode | null;
    footer: React.ReactNode | null;
}

export default function PageLayout({
    header,
    content,
    footer
}: PageLayoutProps) {
    return (
        <>
            {header}
            {content}
            {footer}
        </>
    )
}