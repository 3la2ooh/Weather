import React from 'react';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './screens/SearchScreen';
import CityWeather from './components/CityWeather';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={({ navigation }) => ({
						title: 'Current Weather',
						headerRight: () => {
							return (
								<Button
									title="Search"
									onPress={() => {
										navigation.navigate('Search');
									}}
								/>
							);
						},
					})}
				/>
				<Stack.Screen name="Search" component={SearchScreen} />
				<Stack.Screen name="City" component={CityWeather} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
