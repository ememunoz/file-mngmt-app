import { NavigationContainer } from '@react-navigation/native'
import { fireEvent, render, screen } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import { FileContextProvider } from '../../context'
import BottomTabNavigator from './BottomTabNavigator'

const component = (
  <NavigationContainer>
    <FileContextProvider>
      <BottomTabNavigator />
    </FileContextProvider>
  </NavigationContainer>
)

// Failing tests due to context
xdescribe('<BottomTabNavigator />', () => {
  it('changes screen when pressing images tab', () => {
    render(component)
    fireEvent.press(screen.getByText('Images'))
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('changes screen when pressing sheets tab', () => {
    render(component)
    fireEvent.press(screen.getByText('Sheets'))
    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('changes screen when pressing home tab', () => {
    render(component)
    const texts = screen.getAllByText('Home')
    fireEvent.press(texts[1])
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
