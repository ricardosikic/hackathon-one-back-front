// React
import React from 'react';

// React-bootstrap
import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

// Style
import './style.sass';

const LoadMoreButton = ({loadMoreBooks, isLoading}) => {
    const getMoreBooks = () => {
        loadMoreBooks();
    }

    return(
        <Container className="container-load-more">
            <Row className="justify-content-md-center">
                <Button
                onClick={getMoreBooks}
                className="load-more-button"
                >
                    {isLoading === true ? 'Loading...' : 'More'}
                </Button>
            </Row>
        </Container>
    );
}

export default LoadMoreButton;