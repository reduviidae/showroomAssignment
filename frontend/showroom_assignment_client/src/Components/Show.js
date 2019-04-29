import React, { Component } from "react";
import capitalize from "lodash/capitalize";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class Show extends Component {
  state = {
    show: {}
  };

  componentDidMount() {
    this.fetchShow();
  }

  fetchShow = () => {
    fetch(`${API_ROOT}show/${this.props.match.params.id}`, {
      method: "GET",
      headers: HEADERS
    })
      .then(r => r.json())
      .then(show => this.setState({ show }))
      .catch(console.log);
  };

  render() {
    const comments =
      this.state.show.Comments &&
      this.state.show.Comments.map(comment => {
        return (
          <ListGroup.Item className="comment">
            {comment.comment_body}
          </ListGroup.Item>
        );
      });

    const show = () => {
      if (this.state.show.Genre) {
        return (
          <div className="showDisplay">
            <div className="imgBox">
              <img
                width="100%"
                src={this.state.show.img_url}
                alt="show poster"
              />
            </div>
            <div className="text">
              <h1 className="showText">{this.state.show.title}</h1>
              <h2 className="showText">
                {capitalize(this.state.show.Genre.genre_name)}
              </h2>
            </div>
            <ListGroup className="comments">{comments}</ListGroup>
          </div>
        );
      } else {
        return <div className="error">Unable to display show.</div>;
      }
    };
    return (
      <Container className="showContainer">
        {show()}
        <br/>
        <Form className="commentForm">
          <Form.Group>
            <Form.Control
              className="commentBody"
              type="text"
              placeholder="Enter your comment ..."
              onChange={this.commentOnChange}
            />
            <br/>
            <Button>Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Show;
