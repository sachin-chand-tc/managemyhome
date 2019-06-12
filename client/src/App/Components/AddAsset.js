import React, { Component } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios';

class AddAsset extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(value) {
        this.setState({
            name: value
        })
    }
    handleTypeChange(value) {
        this.setState({
            type: value
        })
    }

    handleSubmit() {
        let asset = {
            name: this.state.name,
            type: this.state.type,
            assetId: this.state.name.split(' ').slice(0, -1).join(' ') + Date.now()
        }
        if (asset.name !== '') {
            axios.post('/add-asset', asset)
                .then((res) => {
                    alert("Asset is added!")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            alert("Please fill all details")
        }
    }

    render() {
        return (
            < div style={{ marginTop: '50px' }}>
                <Card >
                    <Card.Header>Add new asset</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formAssetName">
                                <Form.Label>Asset Name</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleNameChange(e.target.value) }}
                                    type="text" placeholder="Enter assetname" />
                            </Form.Group>
                            <Form.Group controlId="formAssetType">
                                <Form.Label>Asset Type</Form.Label>
                                <Form.Control
                                    onBlur={(e) => { this.handleTypeChange(e.target.value) }}
                                    type="text" placeholder="wearable, utensil, place, etc (optional) " />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add new asset
                                    </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default AddAsset