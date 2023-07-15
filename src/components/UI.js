import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/card';
import { Row,Col,Container } from 'react-bootstrap';


function UI() {
    const [news, setNews] = useState([]);

    const apiKey = '9e4fa49303664636939844a9f3787f08';
    

    useEffect(() => { 
        getData();
    }, []);

    const getData = async () => {
        const request = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const response = await request.json()
        setNews(response.articles)
    }

  return (
    <>
    <Container fluid>
        <h1 className='text-center my-5'>START READING THE NEWS</h1>
        <Row >
            {
                news.map((haber,i) =>
                    haber.urlToImage !== null &&
                        <Col xs={3} key={i} style={{marginTop:'10px'}} className='col-3'>
                            <Card style={{ width: '400px'}}>
                            <Card.Img variant="top" src={haber.urlToImage} />
                            <Card.Body>
                                <Card.Title>{haber.title}</Card.Title>
                                <Card.Text className='text-danger'>
                                    {haber.description}
                                </Card.Text>
                                <Card.Footer>
                                    <a href={haber.url}>Go to Link</a>
                                </Card.Footer>
                            </Card.Body>
                            </Card>
                        </Col> 
                )}
        </Row>
    </Container>
    </>
  )
}

export default UI