import { SectionHeader as Header, SectionHeaderSubtitle, SectionHeaderTitle } from "./styled";

type SectionHeaderProps = {
    title: string;
    subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <Header>
            <SectionHeaderSubtitle>{subtitle}</SectionHeaderSubtitle>
            <SectionHeaderTitle>{title}</SectionHeaderTitle>
        </Header>
    )
}