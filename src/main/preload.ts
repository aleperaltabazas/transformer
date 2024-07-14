// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent, dialog } from 'electron';
import {
  selectFolder as selectFolderImpl,
  dryRun as dryRunImpl,
  run as runImpl,
} from './main';
import { TransformationPipeline } from '../renderer/model/transformer';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  selectFolder: (() =>
    ipcRenderer.invoke('dialog:openDirectory')) as typeof selectFolderImpl,
  dryRun: ((pipeline: TransformationPipeline) =>
    ipcRenderer.invoke('dry-run', pipeline)) as typeof dryRunImpl,
  run: ((pipeline: TransformationPipeline) =>
    ipcRenderer.invoke('run', pipeline)) as typeof runImpl,
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
