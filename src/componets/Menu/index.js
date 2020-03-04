import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
	Container,
	Code,
	Nav,
	NavItem,
	NavText,
	SignOutButton,
	SignOutButtonText,
} from './styles'

export default function Menu({ translateY }) {
	return (
		<Container
			style={{
				opacity: translateY.interpolate({
					inputRange: [0, 150],
					outputRange: [0, 1],
				}),
			}}
		>
			<Code>
				<QRCode
					value="https://github.com/heeisenbeergg"
					backgroundColor="#fff"
					color="#8b10ae"
					size={80}
				/>
			</Code>

			<Nav>
				<NavItem>
					<Icon name="help-outline" size={20} color="#fff" />
					<NavText>Me ajuda</NavText>
					<Icon name="keyboard-arrow-right" size={28} color="#fff" />
				</NavItem>
				<NavItem>
					<Icon name="person-outline" size={20} color="#fff" />
					<NavText>Perfil</NavText>
					<Icon name="keyboard-arrow-right" size={28} color="#fff" />
				</NavItem>
				<NavItem>
					<Icon name="attach-money" size={20} color="#fff" />
					<NavText>Configurar conta</NavText>
					<Icon name="keyboard-arrow-right" size={28} color="#fff" />
				</NavItem>
				<NavItem>
					<Icon name="credit-card" size={20} color="#fff" />
					<NavText>Configurar cartão</NavText>
					<Icon name="keyboard-arrow-right" size={28} color="#fff" />
				</NavItem>
				<NavItem>
					<Icon name="home" size={20} color="#fff" />
					<NavText>Pedir conta PJ</NavText>
					<Icon name="keyboard-arrow-right" size={28} color="#fff" />
				</NavItem>
				<NavItem>
					<Icon name="smartphone" size={20} color="#fff" />
					<NavText>Configurações do app</NavText>
					<Icon name="keyboard-arrow-right" size={28} color="#fff" />
				</NavItem>
			</Nav>

			<SignOutButton onPress={() => {}}>
				<SignOutButtonText>SAIR DO APP</SignOutButtonText>
			</SignOutButton>
		</Container>
	)
}
