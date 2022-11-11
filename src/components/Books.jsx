import {Book} from "./Book";

export const Books = ({booksIds, className}) => {
    return (
        <div className={className}>
            {
                booksIds.map((bookId) => <Book key={bookId} bookId={bookId}/>)
            }
        </div>
    )
}