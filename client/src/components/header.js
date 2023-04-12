import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Sentiment Analysis</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>
        </div>
    
    );
}