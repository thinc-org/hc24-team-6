import { SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation';
import notifee from "@notifee/react-native";

export default function App() {

  // define our handler function:
  async function onDisplayNotification() {

    // Request permissions (required for IOS)
    await notifee.requestPermission();

    // Create a channel (required for Andriod)
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
    });

    // Display a notification
    await notifee.displayNotification({
      title: "Notification Title",
      body: "Main body content of the notification",
      android: {
        channelId,
        // pressActuin is needed if you want the notification to open the app when pressed
        pressAction: {
          id: "default"
        },
      },
    });

  }


  return (
    // <AppNavigation />
    <SafeAreaView>
      {/*Create a button, that when clicked, should display a notification to the user*/}
      <Button
        title="Display Notification"
        onPress={() => onDisplayNotification()}
      />
    </SafeAreaView>
  );
}

