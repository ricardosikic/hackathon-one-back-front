// React
import React from 'react';

// React-bootstrap
import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';

// Styles
import './style.sass';

const Books = ({books = []}) => {

    const bookCard = () => {

        return (
            books.map((book, ix) => {
                console.log(book)
                return(
                    <Col className="book-col" xs={12} sm={3}>
                        <Card className="book-card">
                            <Card.Img variant="top" className="book-card-image" src={book.coverImage} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                    {book.author ? JSON.parse(book.author)[0] : 'No author'}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                )
            })
        )
    }
    return(
        <Container className="book-container">
            <Row className="book-row justify-content-md-center">
                {bookCard()}
            </Row>
        </Container>
    );

}

export default Books;