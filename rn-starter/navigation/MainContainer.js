import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from '../src/screens/HomeScreen'
import CalendarScreen from '../src/screens/CalendarScreen'
import NewsScreen from '../src/screens/NewsScreen'


//Screen names
const Home = 'Home';
const Calendar = 'Calendar';
const News = 'News';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Home}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === Home){
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (rn === Calendar) {
                            iconName = focused ? "calendar" : "calendar-outline";
                          } else if (rn === News) {
                            iconName = focused ? "newspaper" : "newspaper-outline";
                          }

                          return <Ionicons name={iconName} size={size} color={color}/>;

                    },
                    tabBaractiveTintColor: 'blue',
                    tabBarinactiveTintColor: 'grey',
                    tabBarlabelStyle: {paddingBottom:10, fontSize:10},
                    tabBarstyle:{padding:10, height: 70}

                 
                })}
                
                    
               
                
            >
                
                <Tab.Screen name={Home} component={HomeScreen}/>
                <Tab.Screen name={Calendar} component={CalendarScreen}/>
                <Tab.Screen name={News} component={NewsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    
    )
}