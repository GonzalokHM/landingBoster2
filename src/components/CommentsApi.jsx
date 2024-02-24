import { useState, useEffect, useRef } from 'react';
import { SubTitle } from './ui/SubTitle';
import { List } from './ui/List';
import { ListElement } from './ui/ListElement';
import { Flex } from './ui/Flex';
import { Remarck } from './ui/Remarck';
import { Carrusel } from './ui/Carrusel';
import PropTypes from 'prop-types';
import { FormInput } from './ui/FormInput';
import { Form } from './ui/Form';
import { Button } from './ui/Button';

const Comments = ({ userEmail }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const newCommentRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setComments(data))
      .catch((error) => console.error('Fetching error: ', error));
  }, []);

  useEffect(() => {
    if (newCommentRef.current) {
      newCommentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comments]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    // Crea un nuevo comentario con estructura similar a los de JSON Placeholder
    const commentToAdd = {
      id: comments.length + 1,
      body: newComment,
      email: userEmail,
    };

    // Actualiza el estado para incluir el nuevo comentario
    setComments([commentToAdd, ...comments]);
    setNewComment(''); // Resetea el campo de entrada
  };

  return (
    <Flex>
      <SubTitle>Reviews</SubTitle>
      <Carrusel>
        <List $commentsStyles>
          {comments.map((comment, index) => (
            <ListElement data-testid="comment"
              $small
              $cards
              key={comment.id}
              ref={index === 0 ? newCommentRef : null}
            >
              <Remarck>{comment.email}</Remarck>: {comment.body}
            </ListElement>
          ))}
        </List>
      </Carrusel>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a review!!"
        />
        <Button $commentsMarging type="submit">
          Send
        </Button>
      </Form>
    </Flex>
  );
};

Comments.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default Comments;
