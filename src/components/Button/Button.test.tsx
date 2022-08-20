import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'

import Button from './Button'

describe('<Button />', () => {
  it('renders correctly', () => {
    render(<Button onPress={() => {}}>Tap me</Button>)
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('calls onPress when pressed', () => {
    const mockFunction = jest.fn()
    render(<Button onPress={mockFunction}>Tap me</Button>)
    expect(mockFunction.mock.calls.length).toBe(0)
    fireEvent.press(screen.getByText('Tap me'))
    expect(mockFunction.mock.calls.length).toBe(1)
  })
})
