import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ZebraNotification } from '@ionic-enterprise/zebra-scanner';
import { DataWedgeNotificationType, ZebraError } from '@ionic-enterprise/zebra-scanner/dist/esm/definitions';

const Tab2: React.FC = () => {
  const [resultText, setResultText] = React.useState<string>('{}');

  const onRegisterNotificationsBtn = () => {
    ZebraNotification.registerForNotification({
      appName: 'io.ionic.starter',
      callback: (data: any, error?: ZebraError) => {
        if (error) setResultText('CALLBACK: ' + error.message);
        else setResultText('CALLBACK: ' + JSON.stringify(data));
      },
      notificationType: DataWedgeNotificationType.CONFIGURATION_UPDATE,
    });
  };

  const onUnregisterNotificationsBtn = async () => {
    try {
      ZebraNotification.unRegisterForNotification({
        appName: 'io.ionic.starter',
        notificationType: DataWedgeNotificationType.CONFIGURATION_UPDATE,
      });

      setResultText('UNREGISTERED!');
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zebra - Notification</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notification</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="codeResponse">{resultText}</div>
        <div className="buttons">
          <IonButton onClick={onRegisterNotificationsBtn}>Register For Notifications</IonButton>
          <IonButton onClick={onUnregisterNotificationsBtn}>Unregister For Notifications</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
