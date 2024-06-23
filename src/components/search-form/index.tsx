import { Input } from "@components/search-input";
import { SearchSelect } from "@components/search-select";
import { formSchema } from "@utils/form";
import { debounce } from "@utils/lib/debounce";
import { Formik } from "formik";

type SearchFormProps = {
    setQuery: (query: string) => void;
    setSorting: (sorting: string) => void;
    setPage: (page: number) => void;
}

export function SearchForm({
    setQuery,
    setSorting,
    setPage
}: SearchFormProps) {
    return (
        <Formik
            initialValues={{ query: '', sort: '' }}
            validationSchema={formSchema}
            onSubmit={(values, { setSubmitting }) => {
                setQuery(values.query);
                setSorting(values.sort)
                setPage(1)
                setSubmitting(false);
            }}
        >{({
            values,
            errors,
            handleChange,
            handleSubmit,
            submitForm
        }) =>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20
                }}
            >
                <Input
                    name="query"
                    placeholder='Search art, artist, work...'
                    onChange={e => {
                        handleChange(e)
                        debounce(submitForm)
                    }}
                    value={values.query}
                    error={errors.query}
                />
                <SearchSelect
                    name="sort"
                    error={errors.sort}
                    onChange={e => {
                        handleChange(e)
                        submitForm()
                    }}
                    value={values.sort}
                />
            </form>
            }
        </Formik>
    )
}