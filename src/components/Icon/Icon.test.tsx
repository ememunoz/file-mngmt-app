import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Icon from './Icon'

describe('<Button />', () => {
  it('renders main correctly', () => {
    render(<Icon name="main" />)
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('renders home correctly', () => {
    render(<Icon name="home" />)
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('renders csv-file correctly', () => {
    render(<Icon name="csv-file" />)
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('renders image correctly', () => {
    render(<Icon name="image" />)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
