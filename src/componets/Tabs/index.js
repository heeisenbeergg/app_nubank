import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container, TabsContainer, TabItem, TabText } from './styles'

export default function Tabs({ translateY }) {
	return (
		<Container
			style={{
				transform: [
					{
						translateY: translateY.interpolate({
							inputRange: [0, 380],
							outputRange: [0, 30],
							extrapolate: 'clamp',
						}),
					},
				],
				opacity: translateY.interpolate({
					inputRange: [0, 280],
					outputRange: [1, 0.3],
					extrapolate: 'clamp',
				}),
			}}
		>
			<TabsContainer>
				<TabItem>
					<Icon name="person-add" size={24} color="#fff" />
					<TabText>Indicar amigos</TabText>
				</TabItem>
				<TabItem>
					<Icon name="smartphone" size={24} color="#fff" />
					<TabText>Recarga de celular</TabText>
				</TabItem>
				<TabItem>
					<Icon name="chat-bubble-outline" size={24} color="#fff" />
					<TabText>Cobrar</TabText>
				</TabItem>
				<TabItem>
					<Icon name="local-activity" size={24} color="#fff" />
					<TabText>Empréstimos</TabText>
				</TabItem>
				<TabItem>
					<Icon name="arrow-downward" size={24} color="#fff" />
					<TabText>Depositar</TabText>
				</TabItem>
				<TabItem>
					<Icon name="arrow-upward" size={24} color="#fff" />
					<TabText>Transferir</TabText>
				</TabItem>
				<TabItem>
					<Icon name="more-vert" size={24} color="#fff" />
					<TabText>Ajustar limite</TabText>
				</TabItem>
				<TabItem>
					<Icon name="help-outline" size={24} color="#fff" />
					<TabText>Me ajuda</TabText>
				</TabItem>
				<TabItem>
					<IconMC name="barcode" size={24} color="#fff" />
					<TabText>Pagar</TabText>
				</TabItem>
				<TabItem>
					<Icon name="lock" size={24} color="#fff" />
					<TabText>Bloquear cartão</TabText>
				</TabItem>
				<TabItem>
					<IconMC name="credit-card" size={24} color="#fff" />
					<TabText>Cartão virtual</TabText>
				</TabItem>
				<TabItem>
					<IconMC name="arrange-bring-forward" size={24} color="#fff" />
					<TabText>Organizar atalhos</TabText>
				</TabItem>
			</TabsContainer>
		</Container>
	)
}
