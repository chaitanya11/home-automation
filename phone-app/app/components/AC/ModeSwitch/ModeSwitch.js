import React from 'react';

import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import styles from './styles';

export default function ({
	value,
	onChange,
}) {
	const isHeatMode = value === 'heat';

	return (
		<TouchableOpacity
		 onPress={() => onChange(isHeatMode ? 'cool' : 'heat')}>
		 	<View>
	            <View style={styles.background} />

	           	<View
	             style={[styles.circle, { marginLeft: !isHeatMode ? 25 : 2 }]} />

	            <Image
	             source={require('app/assets/icon_hot.png')}
	             style={styles.iconHot}
	             resizeMode="contain" />

	            <Image
	             source={require('app/assets/icon_cold_white.png')}
	             style={styles.iconCold}
	             resizeMode="contain" />
	        </View>
        </TouchableOpacity>
	);
}