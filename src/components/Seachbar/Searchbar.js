

export const Seachbar = ({onSubmit}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <input name="query" type="text"></input>
            <button type="submit">Serch</button>
        </form>
    )

}