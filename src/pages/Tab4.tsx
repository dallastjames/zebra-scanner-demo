import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ZebraRuntime } from '@ionic-enterprise/zebra-scanner';
import React from 'react';

const Tab4: React.FC = () => {
  const [resultText, setResultText] = React.useState<string>('{}');

  const onEnableDataWedgeBtn = async () => {
    try {
      const result = await ZebraRuntime.enableDatawedge();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onDisableDataWedgeBtn = async () => {
    try {
      const result = await ZebraRuntime.disableDatawedge();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onEnableScannerInputBtn = async () => {
    try {
      const result = await ZebraRuntime.enableScannerInput();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onDisableScannerInputBtn = async () => {
    try {
      const result = await ZebraRuntime.disableScannerInput();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onEnumerateTriggersBtn = async () => {
    try {
      const result = await ZebraRuntime.enumerateTriggers();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onResetDefaultProfileBtn = async () => {
    try {
      const result = await ZebraRuntime.resetDefaultProfile();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSetDefaultProfileBtn = async () => {
    try {
      const result = await ZebraRuntime.setDefaultProfile('new-default-profile');
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSoftRFIDTriggerBtn = async () => {
    try {
      const result = await ZebraRuntime.softRfidTrigger();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSoftScanTriggerBtn = async () => {
    try {
      const result = await ZebraRuntime.softScanTrigger();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSwitchScannerBtn = async () => {
    try {
      const result = await ZebraRuntime.switchScanner('0');
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSwitchProfileBtn = async () => {
    try {
      const result = await ZebraRuntime.switchToProfile('Profile0');
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zebra - Runtime</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Runtime</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="codeResponse">{resultText}</div>
        <div className="buttons">
          <IonButton onClick={onEnableDataWedgeBtn}>Enable DataWedge</IonButton>
          <IonButton onClick={onDisableDataWedgeBtn}>Disable DataWedge</IonButton>
          <IonButton onClick={onEnableScannerInputBtn}>Enable Scanner Input</IonButton>
          <IonButton onClick={onDisableScannerInputBtn}>Disable Scanner Input</IonButton>
          <IonButton onClick={onEnumerateTriggersBtn}>Enumerate Triggers</IonButton>
          <IonButton onClick={onResetDefaultProfileBtn}>Reset Default Profile</IonButton>
          <IonButton onClick={onSetDefaultProfileBtn}>Set Default Profile</IonButton>
          <IonButton onClick={onSoftRFIDTriggerBtn}>Soft RFID Trigger</IonButton>
          <IonButton onClick={onSoftScanTriggerBtn}>Soft Scan Trigger</IonButton>
          <IonButton onClick={onSwitchScannerBtn}>Switch Scanner</IonButton>
          <IonButton onClick={onSwitchProfileBtn}>Switch To Profile</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
