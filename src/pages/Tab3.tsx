import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ZebraQuery } from '@ionic-enterprise/zebra-scanner';
import React from 'react';

const Tab3: React.FC = () => {
  const [resultText, setResultText] = React.useState<string>('{}');

  const onEnumerateScannersBtn = async () => {
    try {
      const result = await ZebraQuery.enumerateScanners();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetActiveProfileBtn = async () => {
    try {
      const result = await ZebraQuery.getActiveProfile();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetConfigBtn = async () => {
    try {
      const result = await ZebraQuery.getConfig({
        profileName: 'Profile0',
        pluginConfigs: [
          {
            pluginName: 'ADF',
            outputPluginName: 'KEYSTROKE',
          },
        ],
      });
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetDatawedgeStatusBtn = async () => {
    try {
      const result = await ZebraQuery.getDatawedgeStatus();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetDisabledAppListBtn = async () => {
    try {
      const result = await ZebraQuery.getDisabledAppList();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetIgnoreDisabledProfilesBtn = async () => {
    try {
      const result = await ZebraQuery.getIgnoreDisabledProfiles();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetProfilesListBtn = async () => {
    try {
      const result = await ZebraQuery.getProfilesList();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetScannerStatusBtn = async () => {
    try {
      const result = await ZebraQuery.getScannerStatus();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onGetVersionInfoBtn = async () => {
    try {
      const result = await ZebraQuery.getVersionInfo();
      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zebra - Query</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Query</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="codeResponse">{resultText}</div>
        <div className="buttons">
          <IonButton onClick={onEnumerateScannersBtn}>Enumerate Scanners</IonButton>
          <IonButton onClick={onGetActiveProfileBtn}>Get Active Profile</IonButton>
          <IonButton onClick={onGetConfigBtn}>Get Config</IonButton>
          <IonButton onClick={onGetDatawedgeStatusBtn}>Get Datawedge Status</IonButton>
          <IonButton onClick={onGetDisabledAppListBtn}>Get Disabled App List</IonButton>
          <IonButton onClick={onGetIgnoreDisabledProfilesBtn}>Get Ignore Disabled Profiles</IonButton>
          <IonButton onClick={onGetProfilesListBtn}>Get Profiles List</IonButton>
          <IonButton onClick={onGetScannerStatusBtn}>Get Scanner Status</IonButton>
          <IonButton onClick={onGetVersionInfoBtn}>Get Version Info</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
