import { View, Text, Image, TextInput,ScrollView, Button } from 'react-native'
import { MapPinIcon } from "react-native-heroicons/micro";
import DateTimePicker from '@react-native-community/datetimepicker';
import { FunnelIcon,MagnifyingGlassIcon,XMarkIcon } from "react-native-heroicons/mini";
import {React,useState} from 'react'
import Checkbox from 'expo-checkbox';
import { mockCategoryData } from '../../assets/mockdata/data';
import { mockEventData } from '../../assets/mockdata/data';
import CategoryFIlter from '../components/CategoryFIlter';

export default function AllEventScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const initialpriceState = {
    free : false,
    affordable : false,
    premium : false,
  }

  const initialsizeState = {
    small : false,
    medium : false,
    large : false,
  }

  const [priceState, setPriceState] = useState(initialpriceState);
    const [sizeState, setSizeState] = useState(initialsizeState);

  const searchData = mockEventData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterData = searchData.filter((event) =>{
       if(categoryFilter && event.category !== categoryFilter){
           return false;
       }
       console.log(categoryFilter)

       if (dateFilter && event.date !== dateFilter.toISOString().split('T')[0]) {
        return false;
        }

        if (sizeState && priceState) {
            // console.log(sizeState, priceState)
            let eventSize = parseInt(event.size);
            let eventPrice = parseInt(event.price);
        
            // Size filter condition
            let sizeFilter = (
                (sizeState.small && eventSize >= 0 && eventSize < 50) ||
                (sizeState.medium && eventSize >= 50 && eventSize < 100) ||
                (sizeState.large && eventSize >= 100)
            );
        
            // Price filter condition
            let priceFilter = (
                (priceState.free && eventPrice == 0) ||
                (priceState.affordable && eventPrice >= 1 && eventPrice < 200) ||
                (priceState.premium && eventPrice >= 200)
            );
        
            // Return true if both size and price filters are met
            return !((sizeFilter || priceFilter) && !(sizeFilter && priceFilter))
        }
  });

  const isOpened = filter ? "block" : "hidden";
    return (
        <View className="pt-16 flex-col items-center">
                <View className="flex-row w-[385px] h-[50px] bg-white rounded-3xl border-2 border-slate-300">
                    <View className="flex-row items-center p-4">
                        <MagnifyingGlassIcon color="#ADADAD"/>
                        <TextInput
                            placeholder="Search"
                            value={searchTerm}
                            onChangeText={(e) => setSearchTerm(e)}
                            className="w-[240px] h-[50px] rounded-3xl p-2"
                        />
                    </View>

                    <View className="flex-row items-center mr-4 w-5 h-full">
                        <FunnelIcon color="#FF5B61" onPress={() => setFilter(!filter)}/>
                    </View>

                    <View className="w-[2px] h-[48px] border-r-2 border-slate-300"></View>

                    <View className="flex-row items-center justify-center ml-3">
                        <XMarkIcon color="#ADADAD" onPress={() => setSearchTerm()}/>
                    </View>
                </View>

            {
                    filter ? <View className={`absolute w-[250px] h-[650px] bg-white shadow-xl z-10 mt-32 right-7 rounded-xl p-5 ${isOpened}`}>
                    <View className="border-b-2 border-gray-200 pb-2">
                        <Text className="text-lg font-bold">
                                Refine Results
                        </Text>
                    </View>            
                        <Text className="text-[#ADADAD] text-base font-semibold mt-2">Category</Text>
                        <View className="flex-row gap-2 flex-wrap mt-1">
                        {mockCategoryData.map((category) => (
                            <View
                                key={category.name}
                                className={`w-auto h-[30px] rounded-full p-2 ${
                                    category.name === categoryFilter ? "bg-[#FF5B61] text-white" : "bg-[#F5F5F5] text-black"
                                }`}
                                onPress={() => setCategoryFilter(category.name)}
                            >
                                <Text>{category.name}</Text>
                            </View>
                            ))}
                        </View>

                        <Text className="text-[#ADADAD] text-base font-semibold mt-5">Date and Time</Text>
                        <DateTimePicker 
                            value={dateFilter || new Date()}
                            onChange={(e, date) => setDateFilter(date)}
                        />

                        <Text className="text-[#ADADAD] text-base font-semibold mt-5">Event Size</Text>
                        <View className="flex-col gap-y-1">
                            <View className="flex-row gap-2">
                                <Checkbox value={sizeState.small} onValueChange={() => setSizeState({...sizeState, small: !sizeState.small})}/>
                                <Text className="text-sm font-semibold">Small ( 1 - 50 people )</Text>
                            </View>

                            <View className="flex-row gap-2">
                                <Checkbox value={sizeState.medium} onValueChange={() => setSizeState({...sizeState, medium: !sizeState.medium})}/>
                                <Text className="text-sm font-semibold">Medium ( 51 - 200 people )</Text>
                            </View>

                            <View className="flex-row gap-2">
                                <Checkbox value={sizeState.large} onValueChange={() => setSizeState({...sizeState, large: !sizeState.large})}/>
                                <Text className="text-sm font-semibold">Large ( 200+ people )</Text>
                            </View>
                        </View>

                        <Text className="text-[#ADADAD] text-base font-semibold mt-5">Price</Text>
                        <View className="flex-col gap-y-1">
                            <View className="flex-row gap-2">
                                <Checkbox value={priceState.free} onValueChange={() => setPriceState({...priceState, free: !priceState.free})}/>
                                <Text className="text-sm font-semibold">Free</Text>
                            </View>

                            <View className="flex-row gap-2">
                                <Checkbox value={priceState.affordable} onValueChange={() => setPriceState({...priceState, affordable: !priceState.affordable})}/>
                                <Text className="text-sm font-semibold">Paid - Affordable</Text>
                            </View>

                            <View className="flex-row gap-2">
                                <Checkbox value={priceState.premium} onValueChange={() => setPriceState({...priceState, premium: !priceState.premium})}/>
                                <Text className="text-sm font-semibold">Paid - Premium</Text>
                            </View>
                        </View>
                </View> : null
            }
         
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                className="flex-col gap-10 mt-1 w-[425px]"
                contentContainerStyle={{paddingBottom: 100}}
            >
                {
                filterData.map((event) => {
                    return (
                        <View className="w-[370px] h-[90px] bg-white flex items-center rounded-2xl flex-row">
                            <Image source={require('../../assets/running_event.jpg')}
                            style={{width: 70, height: 100, borderRadius: 10, marginLeft: 16, marginBottom: 36,}}
                            />
                            <View className="flex-col justify-center gap-1 mx-5">
                                <Text className="text-[#FF5B61] text-md font-bold">{event.date}</Text>
                                <Text className="text-lg font-bold">{event.name}</Text>
                                <View className="flex-row">
                                        <MapPinIcon className="w-4 h-4" color="#ADADAD" />
                                    <Text className="text-[#ADADAD] font-extrabold">{event.location}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
            </ScrollView>
            
        </View>
    );
    }