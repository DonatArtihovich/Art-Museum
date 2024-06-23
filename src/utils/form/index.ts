import { object, string } from "yup";

export const formSchema = object({
    query: string().required('Please enter your query').max(50, 'Query is too long'),
    sort: string().oneOf(['artist', 'date'], 'Sorting not supported')
})