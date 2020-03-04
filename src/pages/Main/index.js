import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '../../componets/Header'
import Tabs from '../../componets/Tabs'
import Menu from '../../componets/Menu'

import {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	Title,
	Description,
	CardFooter,
	Annotation,
} from './styles'

export default function Main() {
	const translateY = new Animated.Value(0)

	const animatedEvent = Animated.event(
		[{ nativeEvent: { translationY: translateY } }],
		{
			useNativeDriver: true,
		}
	)

	const onHandlerStateChange = event => {}

	return (
		<Container>
			<Header />

			<Content>
				<Menu />

				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Card
						style={{
							transform: [
								{
									translateY: translateY.interpolate({
										inputRange: [-350, 0, 380],
										outputRange: [-25, 0, 380],
										extrapolate: 'clamp',
									}),
								},
							],
						}}
					>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponível</Title>
							<Description>R$ 200.000,65</Description>
						</CardContent>
						<CardFooter>
							<Icon name="attach-money" size={28} color="#666" />
							<Annotation>
								Transferência de R$ 100,00 recebida do salão pente fino
							</Annotation>
							<Icon name="arrow-forward" size={28} color="#666" />
						</CardFooter>
					</Card>
				</PanGestureHandler>
			</Content>

			<Tabs />
		</Container>
	)
}
