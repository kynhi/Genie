import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      image: ""
    };
  }
  render() {
    return (
      <Form>
      <FormGroup>
        <legend><strong>Create New Event</strong></legend>
        <Label className="Event_Name"><strong>Event Name</strong></Label>
        <Input type="textarea" name="name" id="Event_Name" placeholder="Ex: EarthXHack" />
      </FormGroup>
      <FormGroup>
        <Label for="Event_Description"><strong>Event Description</strong></Label>
        <Input type="textarea" name="description" id="Event_Description" placeholder="Ex: To protect our living enviroment. Location: Dallas" />
      </FormGroup>
      <FormGroup>
        <Label for="Event_File"><strong>Picture/Poster</strong></Label>
        <Input type="file" name="image" id="Event_Image" />
        <FormText color="muted">
        </FormText>
      </FormGroup>
      <Button>Submit</Button>
      </Form>
    );
  }
}
