export const mockEventData = [
    {
      date: "16 Feb 2020",
      name: "CHULA CANCER RUN",
      location: "สนามกึฬาจุฬาลงกรณ์มหาวิทยาลัย",
      category: "Running",
      size: 20,
      price: 0,
      description: "งานวิ่งเพื่อเก็บเงินเพื่อการวิจัยโรคมะเร็ง",
      imageSource: require("../../assets/event.jpeg"),
    },
    {
      date: "20 Nov 2020",
      name: "HACKATHON 2020",
      location: "หอใน",
      category: "Hackathon",
      size: 40,
      price: 0,
      description: "งานแข่งขันสร้างโปรแกรมภายใน 24 ชั่วโมง",
      imageSource: '../../assets/running_event.jpeg',
    },
    {
      date: "24 Oct 2020",
      name: "Tae's Birthday Party",
      location: "ตึก 1 ชั้น 2",
      category: "Party",
      size: 10,
      price: 0,
      description: "งานเลี้ยงวันเกิดให้กับเพื่อนๆ",
      imageSource: '../../assets/running_event.jpeg',
    },
    {
      date: "10 Feb 2020",
      name: "Concert 2020",
      location: "หอใน",
      category: "Concert",
      size: 150,
      price: 200,
      description: "งานคอนเสิร์ตเพื่อเปิดเทอม 2",
      imageSource: '../../assets/running_event.jpeg',
    }
  ];

export const mockCategoryData = [
    {
      name: "Running",
      isUsing: true
    },
    {
      name: "Party",
      isUsing: false
    },
    {
      name: "Hackathon",
      isUsing: false
    },
    {
      name: "Concert",
      isUsing: true
    }
  ];