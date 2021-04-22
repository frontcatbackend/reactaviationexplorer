import Theme from './Theme'
import Name from './Name'
import Button from './Button'
import { Col, Container, Row } from 'react-bootstrap'

const Card = ({cards}) => {
    return(
    <Container>
        <Row  className="d-flex">
            <Col md={6}>
            <div className="card p-3" >
        <Theme cards={cards}/>
        <Name cards={cards}/>
        <Button/>
    </div>
            </Col>
        </Row>
    </Container>
    )
    }



export default Card