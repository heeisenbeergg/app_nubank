import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'

const Stack = createStackNavigator()
const { Navigator, Screen } = Stack

export default function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen name="main" component={Main} />
			</Navigator>
		</NavigationContainer>
	)
}
