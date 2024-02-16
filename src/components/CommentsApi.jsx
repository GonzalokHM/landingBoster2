import { useState, useEffect } from 'react';
import { SubTitle } from './ui/SubTitle';
import { List } from './ui/List';
import { ListElement } from './ui/ListElement';
import { Flex } from './ui/Flex';
import { Remarck } from './ui/Remarck';
import { Carrusel } from './ui/Carrusel';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        // Limita los resultados a los primeros 5 comentarios
        setComments(data.slice(0, 5));
      });
  }, []); // El array de dependencias vacío asegura que esto se ejecute solo una vez al montar el componente

  return (
    <Flex>
      <SubTitle>Reviews</SubTitle>
      <Carrusel>
        <List $commentsStyles>
          {comments.map((comment) => (
            <ListElement $small $cards key={comment.id}>
              <Remarck>{comment.email}</Remarck>: {comment.body}
            </ListElement>
          ))}
        </List>
      </Carrusel>
    </Flex>
  );
};

export default Comments;
