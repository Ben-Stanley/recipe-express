import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Notification from './Notification'

describe('Notification', () => {
  it('renders the notification with the correct message and variant', () => {
    render(
      <Notification
        variant="information"
        message="This is an information notification."
      />
    )

    const notificationElement = screen.getByTestId('notification')

    expect(notificationElement).toBeInTheDocument()
    expect(notificationElement).toHaveClass(
      'bg-blue-50 border-blue-200 text-blue-800'
    )
  })

  it('renders the notification with error variant', () => {
    render(
      <Notification variant="error" message="This is an error notification." />
    )

    const notificationElement = screen.getByTestId('notification')

    notificationElement.click()

    expect(notificationElement).toBeInTheDocument()
    expect(notificationElement).toHaveClass(
      'bg-red-50 border border-red-200 text-red-700'
    )
  })

  it('renders the notification with warning variant', () => {
    render(
      <Notification
        variant="warning"
        message="This is a warning notification."
      />
    )

    const notificationElement = screen.getByTestId('notification')

    expect(notificationElement).toBeInTheDocument()
    expect(notificationElement).toHaveClass('bg-yellow-50 border-yellow-200')
  })
})
