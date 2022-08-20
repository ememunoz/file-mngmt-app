import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { FileContextProvider } from '../../context'
import ImagesScreen from './ImagesScreen'

describe('<ImagesScreen />', () => {
  it('renders correctly', () => {
    const component = (
      <FileContextProvider>
        <ImagesScreen />
      </FileContextProvider>
    )
    render(component)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
