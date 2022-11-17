import { useFetch, useCounter } from "../hooks/index";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {
    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {quote, author} = !!data && data[0];

    

    return (
        <div className="container m-auto p-4">
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
        isLoading 
            ? (
                <LoadingQuote/>
            )
            : (
                <Quote quote={quote} author={author}/>
            )
        }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>Next quote</button>

        </div>
    )
}

