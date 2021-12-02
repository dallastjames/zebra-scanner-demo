import React from 'react';

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ZebraConfiguration } from '@ionic-enterprise/zebra-scanner';
import { DataWedgeConfigMode, DataWedgePlugin } from '@ionic-enterprise/zebra-scanner/dist/esm/definitions';

const Tab1: React.FC = () => {
  const [resultText, setResultText] = React.useState<string>('{}');

  const onCloneProfileBtn = async () => {
    try {
      const result = await ZebraConfiguration.cloneProfile({
        sourceProfileName: 'profile-to-clone',
        destProfileName: 'my-new-profile',
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onCreateProfileBtn = async () => {
    try {
      const result = await ZebraConfiguration.createProfile({
        profileName: 'profile-to-clone',
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onDeleteProfileBtn = async () => {
    try {
      const result = await ZebraConfiguration.deleteProfile({
        profileNames: ['my-new-profile', 'profile-to-clone'],
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onImportConfigBtn = async () => {
    try {
      const result = await ZebraConfiguration.importConfig({
        folderPath: '/test',
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onRenameProfileBtn = async () => {
    try {
      const result = await ZebraConfiguration.renameProfile({
        currentProfileName: 'profile-to-clone',
        newProfileName: 'profile-renamed',
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onRestoreConfigBtn = async () => {
    try {
      const result = await ZebraConfiguration.restoreConfig();

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSetConfigBtn = async () => {
    try {
      const pluginConfigs = [
        {
          pluginName: DataWedgePlugin.BARCODE,
          paramList: {
            scanner_selection: 'auto',
            scanner_input_enabled: 'true',
          },
        },
      ];

      const appList = [
        {
          packageName: 'io.ionic.starter',
          activityList: ['MainActivity'],
        },
      ];

      const result = await ZebraConfiguration.setConfig({
        profileName: 'profile-to-configure',
        configMode: DataWedgeConfigMode.CREATE_IF_NOT_EXIST,
        pluginConfigs: pluginConfigs,
        appList: appList,
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSetDisabledAppListBtn = async () => {
    try {
      const appList = [
        {
          packageName: 'io.ionic.starter',
          activityList: ['MainActivity'],
        },
      ];

      const result = await ZebraConfiguration.setDisabledAppList({
        configMode: DataWedgeConfigMode.UPDATE,
        appList: appList,
      });

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  const onSetIgnoreDisabledProfilesBtn = async () => {
    try {
      const result = await ZebraConfiguration.setIgnoreDisabledProfiles(true);

      setResultText(JSON.stringify(result));
    } catch (err: any) {
      setResultText(err.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zebra - Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Configuration</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="codeResponse">{resultText}</div>
        <div className="buttons">
          <IonButton onClick={onCloneProfileBtn}>Clone Profile</IonButton>
          <IonButton onClick={onCreateProfileBtn}>Create Profile</IonButton>
          <IonButton onClick={onDeleteProfileBtn}>Delete Profile</IonButton>
          <IonButton onClick={onImportConfigBtn}>Import Config</IonButton>
          <IonButton onClick={onRenameProfileBtn}>Rename Profile</IonButton>
          <IonButton onClick={onRestoreConfigBtn}>Restore Config</IonButton>
          <IonButton onClick={onSetConfigBtn}>Set Config</IonButton>
          <IonButton onClick={onSetDisabledAppListBtn}>Set Disabled App List</IonButton>
          <IonButton onClick={onSetIgnoreDisabledProfilesBtn}>Set Ignore Disabled Profiles</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
