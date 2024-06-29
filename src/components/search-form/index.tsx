import { Input } from "@components/search-input";
import { SearchSelect } from "@components/search-select";
import { formSchema } from "@utils/form";
import { debounce } from "@utils/lib";
import { Formik } from "formik";
import { Form } from "./styled";
import { FIRST_PAGE, SEARCH_INPUT_PLACEHOLDER } from "@constants/const";

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
                setPage(FIRST_PAGE)
                setSubmitting(false);
            }}
        >{({
            values,
            errors,
            handleChange,
            handleSubmit,
            submitForm
        }) =>
            <Form onSubmit={handleSubmit}>
                <Input
                    name="query"
                    placeholder={SEARCH_INPUT_PLACEHOLDER}
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
            </Form>
            }
        </Formik>
    )
}