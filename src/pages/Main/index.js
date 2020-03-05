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
	TitleCard,
} from './styles'

export default function Main() {
	let offset = 0
	const translateY = new Animated.Value(0)

	const animatedEvent = Animated.event(
		[{ nativeEvent: { translationY: translateY } }],
		{
			useNativeDriver: true,
		}
	)

	const onHandlerStateChange = event => {
		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false
			const { translationY } = event.nativeEvent

			offset += translationY

			if (translationY >= 100) {
				opened = true
			} else {
				translateY.setValue(offset)
				translateY.setOffset(0)
				offset = 0
			}

			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true,
			}).start(() => {
				offset = opened ? 380 : 0
				translateY.setOffset(offset)
				translateY.setValue(0)
			})
		}
	}

	return (
		<Container>
			<Header />

			<Content>
				<Menu translateY={translateY} />

				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Card
						style={{
							transform: [
								{
									translateY: translateY.interpolate({
										inputRange: [0, 380],
										outputRange: [0, 380],
										extrapolate: 'clamp',
									}),
								},
							],
						}}
					>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<TitleCard>Conta</TitleCard>
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
							<Icon name="keyboard-arrow-right" size={28} color="#666" />
						</CardFooter>
					</Card>
				</PanGestureHandler>
			</Content>

			<Tabs translateY={translateY} />
		</Container>
	)
}
