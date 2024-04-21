import * as Notifications from 'expo-notifications';
import { usePushNotification } from './usePushNotification';

export const schedulePushNotification = async ({title, body, seconds}) => {
    const { expoPushToken, notification } = usePushNotification();

    // Request permissions for notifications if not already granted
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    // Check if permission is granted
    if (finalStatus !== 'granted') {
        alert('Sorry, we need notification permissions to show this notification.');
        return;
    }

    await Notifications.scheduleNotificationAsync({
        content: {
            title: title ?? 'You have a new notification!',
            body: body ?? 'Here is the notification body',
        },
        trigger: {
            seconds: seconds ?? 3,
        },
    });

};