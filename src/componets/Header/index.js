import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Top, Logo, Title } from './styles'

import logo from '../../assets/Nubank_Logo.png'

export default function Header({ onHandlePress }) {
	const [opened, setOpened] = useState(false)

	function handleMenu() {
		onHandlePress()
		setOpened(!opened)
	}

	return (
		<Container>
			<Top>
				<Logo source={logo} />
				<Title>Lucas</Title>
			</Top>
			<Icon
				name={opened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
				size={20}
				color="#fff"
				onPress={handleMenu}
			/>
		</Container>
	)
}
