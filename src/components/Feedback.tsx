import React from 'react'

interface FeedbackProps {
  message: string
}

const Feedback: React.FC<FeedbackProps> = ({ message }) => {
  if (!message) return null
  return <div className="feedback">{message}</div>
}

export default Feedback