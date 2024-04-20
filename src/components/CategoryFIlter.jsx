import { View, Text } from 'react-native'
import {React,useState} from 'react'

export default function CategoryFIlter(category){
    const [useCategory, setUseCategory] = useState(false)
    const bgColorStyle = category.isUsing ? "bg-[#FF5B61] " : "bg-[#F5F5F5]"
    const textColorStyle = category.isUsing ? "text-white" : "text-[#000000]"
    return (
        <View className={`w-auto h-[30px] ${bgColorStyle} rounded-full p-2`} onPress={() => setUseCategory()}>
            <Text className={`${textColorStyle}`}>
                {category.name}
            </Text>
        </View>
  )
}