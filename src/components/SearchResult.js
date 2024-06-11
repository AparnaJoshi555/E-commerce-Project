import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoginHeader from './LoginHeader';


function SearchResult() {
    const [searchResults, setSearchResults] = useState([]);
    const { query } = useParams();

    console.log("Search  result  query:", query);

    useEffect(() => {
        // Fetch search results when the component mounts
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:9078/api/byname/${query}`);
                setSearchResults(response.data);
                console.log("Search  result :", response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults(); // Call the fetch function
    }, [query]); // Run effect whenever the query changes

    if (searchResults.length === 0) {
        return <p>No search results found.</p>;
    }

    return (
       
        <div>
            <LoginHeader />
            <h2 style={{margin:'20px'}}>Search Results ...</h2>



            <Card style={{ flex: '0 0 calc(25% - 10px)', margin: '30px', width: '20rem' }}>
                <Card.Img variant="top" src={searchResults.imageurl} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{searchResults.name}</Card.Title>
                    <Card.Text>{searchResults.description}</Card.Text>
                    <Card.Text>{searchResults.productPrice}</Card.Text>
                    <Button variant="primary" style={{ backgroundColor: '#C7BDBD', border: 'none' }}>Add to Cart</Button>
                </Card.Body>
            </Card>

        </div>
       
   
    ); 
}

export default SearchResult;

