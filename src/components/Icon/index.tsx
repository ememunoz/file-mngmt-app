import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import svgs from './svgs'

interface Props extends React.SVGProps<SVGSVGElement> {
  name: 'main' | 'home' | 'image' | 'csv-file'
}

const Icon = ({ name, ...rest }: Props) => {
  const component = svgs[name](rest)
  return component
}

const styles = StyleSheet.create({})

export default Icon
