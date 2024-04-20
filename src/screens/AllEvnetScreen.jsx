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
  const [category, setCategory] = useState("");
  const [isChecked, setChecked] = useState(false);

  const searchData = mockEventData.filter((mockEventData) =>
    mockEventData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterData = searchData.filter((searchData) =>{
    return searchData.category === "Hackathon"
  }
  );

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

            <View className="flex-row items-center mr-4">
              <FunnelIcon color="#FF5B61" onPress={() => setFilter(!filter)}/>
            </View>

            <View className="w-[2px] h-[48px] border-r-2 border-slate-300"></View>

            <View className="flex-row items-center justify-center ml-3">
              <XMarkIcon color="#ADADAD" onPress={() => setSearchTerm()}/>
            </View>
          </View>

        <View className={`absolute w-[250px] h-[650px] bg-white shadow-xl z-10 mt-32 right-7 rounded-xl p-5 ${isOpened}`}>
          <View className="border-b-2 border-gray-200 pb-2">
            <Text className="text-lg font-bold">
                Refine Results
            </Text>
          </View>            
            <Text className="text-[#ADADAD] text-base font-semibold mt-2">Category</Text>
            <View className="flex-row gap-2 flex-wrap mt-1">
            {
              mockCategoryData.map((category) => {
                const bgColorStyle = category.isUsing ? "bg-[#FF5B61] " : "bg-[#F5F5F5]"
                const textColorStyle = category.isUsing ? "text-white" : "text-[#000000]"
                return (
                    <CategoryFIlter name={category.name}/>
                )
              })
            }
            </View>

            <Text className="text-[#ADADAD] text-base font-semibold mt-5">Date and Time</Text>
            <DateTimePicker value={new Date()}/>

            <Text className="text-[#ADADAD] text-base font-semibold mt-5">Event Size</Text>
            <View className="flex-col gap-y-1">
              <View className="flex-row gap-2">
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text className="text-sm font-semibold">Small ( 1 - 50 people )</Text>
              </View>

              <View className="flex-row gap-2">
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text className="text-sm font-semibold">Medium ( 51 - 200 people )</Text>
              </View>

              <View className="flex-row gap-2">
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text className="text-sm font-semibold">Large ( 200+ people )</Text>
              </View>
            </View>

            <Text className="text-[#ADADAD] text-base font-semibold mt-5">Price</Text>
            <View className="flex-col gap-y-1">
              <View className="flex-row gap-2">
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text className="text-sm font-semibold">Free</Text>
              </View>

              <View className="flex-row gap-2">
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text className="text-sm font-semibold">Paid - Affordable</Text>
              </View>

              <View className="flex-row gap-2">
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text className="text-sm font-semibold">Paid - Premium</Text>
              </View>
            </View>
        </View>
       
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