import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { FileContextProvider } from '../../context'
import HomeScreen from './HomeScreen'

describe('<HomeScreen />', () => {
  const component = (
    <FileContextProvider>
      <HomeScreen />
    </FileContextProvider>
  )
  it('renders correctly', () => {
    render(component)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
