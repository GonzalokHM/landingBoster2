import { useState, useEffect, useRef } from 'react'

const useComments = (userEmail) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const newCommentRef = useRef(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok')
        return response.json()
      })
      .then((data) => setComments(data))
      .catch((error) => console.error('Fetching error: ', error))
  }, [])

  useEffect(() => {
    if (newCommentRef.current) {
      newCommentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [comments])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const commentToAdd = {
      id: comments.length + 1,
      body: newComment,
      email: userEmail
    }

    setComments([commentToAdd, ...comments])
    setNewComment('')
  }

  return { comments, newComment, setNewComment, handleSubmit, newCommentRef }
}

export default useComments
