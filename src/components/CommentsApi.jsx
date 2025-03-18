import PropTypes from 'prop-types'
import {
  SubTitle,
  List,
  ListElement,
  Flex,
  Remarck,
  Carrusel,
  FormInput,
  Form,
  Button
} from './styles/ui'
import useComments from '../hooks/useComments'

const Comments = ({ userEmail }) => {
  const { comments, newComment, setNewComment, handleSubmit, newCommentRef } =
    useComments(userEmail)

  return (
    <Flex>
      <SubTitle>Reviews</SubTitle>
      <Carrusel>
        <List $commentsStyles>
          {comments.map((comment, index) => (
            <ListElement
              data-testid='comment'
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
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Write a review!!'
        />
        <Button $commentsMarging type='submit'>
          Send
        </Button>
      </Form>
    </Flex>
  )
}

Comments.propTypes = {
  userEmail: PropTypes.string.isRequired
}

export default Comments
