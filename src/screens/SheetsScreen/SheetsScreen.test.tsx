import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { FileContextProvider } from '../../context'
import SheetsScreen from './SheetsScreen'

describe('<SheetsScreen />', () => {
  const component = (
    <FileContextProvider>
      <SheetsScreen />
    </FileContextProvider>
  )
  it('renders correctly', () => {
    render(component)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
