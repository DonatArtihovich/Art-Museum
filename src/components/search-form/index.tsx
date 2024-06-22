import { Input } from "@components/search-input";

type SearchFormProps = {
    query: string;
    setQuery: (query: string) => void;
}

export function SearchForm({ query, setQuery }: SearchFormProps) {
    return (
        <form action="">
            <Input
                placeholder='Search art, artist, work...'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                value={query}
            />
        </form>
    )
}