import { Form, Input, Button, Cont } from "./Seachbar.styled"

export const Seachbar = ({onSubmit}) => {
    
    return (
        <Form onSubmit={onSubmit}>
            <Cont>
                <Input name="query" type="text"></Input>
                <Button type="submit">Serch</Button>
            </Cont>
        </Form>
    )

}