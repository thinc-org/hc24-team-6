import { View, Text, Image, TextInput } from 'react-native'
import { MapPinIcon } from "react-native-heroicons/micro";
import { FunnelIcon,MagnifyingGlassIcon } from "react-native-heroicons/mini";
import {React,useState} from 'react'

export default function EventScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const mockData = [
    {
      date: "16 Feb 2020",
      name: "CHULA CANCER RUN",
      location: "สนามกึฬาจุฬาลงกรณ์มหาวิทยาลัย"
    },
    {
      date: "20 Nov 2020",
      name: "Event 2",
      location: "หอใน"
    },
    {
      date: "24 Oct 2020",
      name: "Event 3",
      location: "ตึก 1 ชั้น 2"
    },
    {
      date: "10 Feb 2020",
      name: "Event 4",
      location: "หอใน"
    }
  ];
  const filterData = mockData.filter((mockData) =>
    mockData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <View className="pt-16 px-8 flex-col items-center">
        <View className="flex-row w-[385px] h-[50px] bg-white rounded-3xl border-2 border-slate-300">
          <View className="flex-row items-center p-4">
            <MagnifyingGlassIcon color="#807979"/>
            <TextInput
              placeholder="Search"
              value={searchTerm}
              onChangeText={(e) => setSearchTerm(e)}
              className="w-[240px] h-[50px] rounded-3xl p-2"
            />
          </View>

          <View className="flex-row items-center mr-4">
            <FunnelIcon color="#FF5B61"/>
          </View>

          <View className="w-[2px] h-[50px] border-r-2 border-slate-300"></View>
        </View>
          
       
        <View className="flex-col gap-10 mt-10">
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
        </View>
        
      </View>
    );
    }