/* eslint-disable */

import { App } from 'electron';

export abstract class Application implements App {
  abstract accessibilitySupportEnabled: boolean;
  abstract allowRendererProcessReuse: boolean;
  abstract applicationMenu: Electron.Menu | null;
  abstract badgeCount: number;
  readonly abstract commandLine: Electron.CommandLine;
  readonly abstract dock: Electron.Dock;
  readonly abstract isPackaged: boolean;
  abstract name: string;
  readonly abstract runningUnderRosettaTranslation: boolean;
  abstract userAgentFallback: string;

  abstract addListener(event: 'accessibility-support-changed', listener: (event: Electron.Event, accessibilitySupportEnabled: boolean) => void): this;
  abstract addListener(event: 'activate', listener: (event: Electron.Event, hasVisibleWindows: boolean) => void): this;
  abstract addListener(event: 'activity-was-continued', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract addListener(event: 'before-quit', listener: (event: Electron.Event) => void): this;
  abstract addListener(event: 'browser-window-blur', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract addListener(event: 'browser-window-created', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract addListener(event: 'browser-window-focus', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract addListener(event: 'certificate-error', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, error: string, certificate: Electron.Certificate, callback: (isTrusted: boolean) => void) => void): this;
  abstract addListener(event: 'child-process-gone', listener: (event: Electron.Event, details: Electron.Details) => void): this;
  abstract addListener(event: 'continue-activity', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract addListener(event: 'continue-activity-error', listener: (event: Electron.Event, type: string, error: string) => void): this;
  abstract addListener(event: 'desktop-capturer-get-sources', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract addListener(event: 'did-become-active', listener: (event: Electron.Event) => void): this;
  abstract addListener(event: 'gpu-info-update', listener: Function): this;
  abstract addListener(event: 'gpu-process-crashed', listener: (event: Electron.Event, killed: boolean) => void): this;
  abstract addListener(event: 'login', listener: (event: Electron.Event, webContents: Electron.WebContents, authenticationResponseDetails: Electron.AuthenticationResponseDetails, authInfo: Electron.AuthInfo, callback: (username?: string, password?: string) => void) => void): this;
  abstract addListener(event: 'new-window-for-tab', listener: (event: Electron.Event) => void): this;
  abstract addListener(event: 'open-file', listener: (event: Electron.Event, path: string) => void): this;
  abstract addListener(event: 'open-url', listener: (event: Electron.Event, url: string) => void): this;
  abstract addListener(event: 'quit', listener: (event: Electron.Event, exitCode: number) => void): this;
  abstract addListener(event: 'ready', listener: (event: Electron.Event, launchInfo: Record<string, any>) => void): this;
  abstract addListener(event: 'remote-get-builtin', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract addListener(event: 'remote-get-current-web-contents', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract addListener(event: 'remote-get-current-window', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract addListener(event: 'remote-get-global', listener: (event: Electron.Event, webContents: Electron.WebContents, globalName: string) => void): this;
  abstract addListener(event: 'remote-require', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract addListener(event: 'render-process-gone', listener: (event: Electron.Event, webContents: Electron.WebContents, details: Electron.RenderProcessGoneDetails) => void): this;
  abstract addListener(event: 'renderer-process-crashed', listener: (event: Electron.Event, webContents: Electron.WebContents, killed: boolean) => void): this;
  abstract addListener(event: 'second-instance', listener: (event: Electron.Event, argv: string[], workingDirectory: string) => void): this;
  abstract addListener(event: 'select-client-certificate', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, certificateList: Electron.Certificate[], callback: (certificate?: Electron.Certificate) => void) => void): this;
  abstract addListener(event: 'session-created', listener: (session: Electron.Session) => void): this;
  abstract addListener(event: 'update-activity-state', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract addListener(event: 'web-contents-created', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract addListener(event: 'will-continue-activity', listener: (event: Electron.Event, type: string) => void): this;
  abstract addListener(event: 'will-finish-launching', listener: Function): this;
  abstract addListener(event: 'will-quit', listener: (event: Electron.Event) => void): this;
  abstract addListener(event: 'window-all-closed', listener: Function): this;
  abstract addListener(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract addRecentDocument(path: string): void;

  abstract clearRecentDocuments(): void;

  abstract disableDomainBlockingFor3DAPIs(): void;

  abstract disableHardwareAcceleration(): void;

  abstract emit(event: string | symbol, ...args: any[]): boolean;

  abstract enableSandbox(): void;

  abstract eventNames(): Array<string | symbol>;

  abstract exit(exitCode?: number): void;

  abstract focus(options?: Electron.FocusOptions): void;

  abstract getAppMetrics(): Electron.ProcessMetric[];

  abstract getAppPath(): string;

  abstract getApplicationInfoForProtocol(url: string): Promise<Electron.ApplicationInfoForProtocolReturnValue>;

  abstract getApplicationNameForProtocol(url: string): string;

  abstract getBadgeCount(): number;

  abstract getCurrentActivityType(): string;

  abstract getFileIcon(path: string, options?: Electron.FileIconOptions): Promise<Electron.NativeImage>;

  abstract getGPUFeatureStatus(): Electron.GPUFeatureStatus;

  abstract getGPUInfo(infoType: 'basic' | 'complete'): Promise<unknown>;

  abstract getJumpListSettings(): Electron.JumpListSettings;

  abstract getLocale(): string;

  abstract getLocaleCountryCode(): string;

  abstract getLoginItemSettings(options?: Electron.LoginItemSettingsOptions): Electron.LoginItemSettings;

  abstract getMaxListeners(): number;

  abstract getName(): string;

  abstract getPath(name: 'home' | 'appData' | 'userData' | 'cache' | 'temp' | 'exe' | 'module' | 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos' | 'recent' | 'logs' | 'pepperFlashSystemPlugin' | 'crashDumps'): string;

  abstract getVersion(): string;

  abstract hasSingleInstanceLock(): boolean;

  abstract hide(): void;

  abstract importCertificate(options: Electron.ImportCertificateOptions, callback: (result: number) => void): void;

  abstract invalidateCurrentActivity(): void;

  abstract isAccessibilitySupportEnabled(): boolean;

  abstract isDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean;

  abstract isEmojiPanelSupported(): boolean;

  abstract isInApplicationsFolder(): boolean;

  abstract isReady(): boolean;

  abstract isSecureKeyboardEntryEnabled(): boolean;

  abstract isUnityRunning(): boolean;

  abstract listenerCount(event: string | symbol): number;

  abstract listeners(event: string | symbol): Function[];

  abstract moveToApplicationsFolder(options?: Electron.MoveToApplicationsFolderOptions): boolean;

  abstract off(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract on(event: 'accessibility-support-changed', listener: (event: Electron.Event, accessibilitySupportEnabled: boolean) => void): this;
  abstract on(event: 'activate', listener: (event: Electron.Event, hasVisibleWindows: boolean) => void): this;
  abstract on(event: 'activity-was-continued', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract on(event: 'before-quit', listener: (event: Electron.Event) => void): this;
  abstract on(event: 'browser-window-blur', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract on(event: 'browser-window-created', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract on(event: 'browser-window-focus', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract on(event: 'certificate-error', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, error: string, certificate: Electron.Certificate, callback: (isTrusted: boolean) => void) => void): this;
  abstract on(event: 'child-process-gone', listener: (event: Electron.Event, details: Electron.Details) => void): this;
  abstract on(event: 'continue-activity', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract on(event: 'continue-activity-error', listener: (event: Electron.Event, type: string, error: string) => void): this;
  abstract on(event: 'desktop-capturer-get-sources', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract on(event: 'did-become-active', listener: (event: Electron.Event) => void): this;
  abstract on(event: 'gpu-info-update', listener: Function): this;
  abstract on(event: 'gpu-process-crashed', listener: (event: Electron.Event, killed: boolean) => void): this;
  abstract on(event: 'login', listener: (event: Electron.Event, webContents: Electron.WebContents, authenticationResponseDetails: Electron.AuthenticationResponseDetails, authInfo: Electron.AuthInfo, callback: (username?: string, password?: string) => void) => void): this;
  abstract on(event: 'new-window-for-tab', listener: (event: Electron.Event) => void): this;
  abstract on(event: 'open-file', listener: (event: Electron.Event, path: string) => void): this;
  abstract on(event: 'open-url', listener: (event: Electron.Event, url: string) => void): this;
  abstract on(event: 'quit', listener: (event: Electron.Event, exitCode: number) => void): this;
  abstract on(event: 'ready', listener: (event: Electron.Event, launchInfo: Record<string, any>) => void): this;
  abstract on(event: 'remote-get-builtin', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract on(event: 'remote-get-current-web-contents', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract on(event: 'remote-get-current-window', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract on(event: 'remote-get-global', listener: (event: Electron.Event, webContents: Electron.WebContents, globalName: string) => void): this;
  abstract on(event: 'remote-require', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract on(event: 'render-process-gone', listener: (event: Electron.Event, webContents: Electron.WebContents, details: Electron.RenderProcessGoneDetails) => void): this;
  abstract on(event: 'renderer-process-crashed', listener: (event: Electron.Event, webContents: Electron.WebContents, killed: boolean) => void): this;
  abstract on(event: 'second-instance', listener: (event: Electron.Event, argv: string[], workingDirectory: string) => void): this;
  abstract on(event: 'select-client-certificate', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, certificateList: Electron.Certificate[], callback: (certificate?: Electron.Certificate) => void) => void): this;
  abstract on(event: 'session-created', listener: (session: Electron.Session) => void): this;
  abstract on(event: 'update-activity-state', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract on(event: 'web-contents-created', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract on(event: 'will-continue-activity', listener: (event: Electron.Event, type: string) => void): this;
  abstract on(event: 'will-finish-launching', listener: Function): this;
  abstract on(event: 'will-quit', listener: (event: Electron.Event) => void): this;
  abstract on(event: 'window-all-closed', listener: Function): this;
  abstract on(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract once(event: 'accessibility-support-changed', listener: (event: Electron.Event, accessibilitySupportEnabled: boolean) => void): this;
  abstract once(event: 'activate', listener: (event: Electron.Event, hasVisibleWindows: boolean) => void): this;
  abstract once(event: 'activity-was-continued', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract once(event: 'before-quit', listener: (event: Electron.Event) => void): this;
  abstract once(event: 'browser-window-blur', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract once(event: 'browser-window-created', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract once(event: 'browser-window-focus', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract once(event: 'certificate-error', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, error: string, certificate: Electron.Certificate, callback: (isTrusted: boolean) => void) => void): this;
  abstract once(event: 'child-process-gone', listener: (event: Electron.Event, details: Electron.Details) => void): this;
  abstract once(event: 'continue-activity', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract once(event: 'continue-activity-error', listener: (event: Electron.Event, type: string, error: string) => void): this;
  abstract once(event: 'desktop-capturer-get-sources', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract once(event: 'did-become-active', listener: (event: Electron.Event) => void): this;
  abstract once(event: 'gpu-info-update', listener: Function): this;
  abstract once(event: 'gpu-process-crashed', listener: (event: Electron.Event, killed: boolean) => void): this;
  abstract once(event: 'login', listener: (event: Electron.Event, webContents: Electron.WebContents, authenticationResponseDetails: Electron.AuthenticationResponseDetails, authInfo: Electron.AuthInfo, callback: (username?: string, password?: string) => void) => void): this;
  abstract once(event: 'new-window-for-tab', listener: (event: Electron.Event) => void): this;
  abstract once(event: 'open-file', listener: (event: Electron.Event, path: string) => void): this;
  abstract once(event: 'open-url', listener: (event: Electron.Event, url: string) => void): this;
  abstract once(event: 'quit', listener: (event: Electron.Event, exitCode: number) => void): this;
  abstract once(event: 'ready', listener: (event: Electron.Event, launchInfo: Record<string, any>) => void): this;
  abstract once(event: 'remote-get-builtin', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract once(event: 'remote-get-current-web-contents', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract once(event: 'remote-get-current-window', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract once(event: 'remote-get-global', listener: (event: Electron.Event, webContents: Electron.WebContents, globalName: string) => void): this;
  abstract once(event: 'remote-require', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract once(event: 'render-process-gone', listener: (event: Electron.Event, webContents: Electron.WebContents, details: Electron.RenderProcessGoneDetails) => void): this;
  abstract once(event: 'renderer-process-crashed', listener: (event: Electron.Event, webContents: Electron.WebContents, killed: boolean) => void): this;
  abstract once(event: 'second-instance', listener: (event: Electron.Event, argv: string[], workingDirectory: string) => void): this;
  abstract once(event: 'select-client-certificate', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, certificateList: Electron.Certificate[], callback: (certificate?: Electron.Certificate) => void) => void): this;
  abstract once(event: 'session-created', listener: (session: Electron.Session) => void): this;
  abstract once(event: 'update-activity-state', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract once(event: 'web-contents-created', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract once(event: 'will-continue-activity', listener: (event: Electron.Event, type: string) => void): this;
  abstract once(event: 'will-finish-launching', listener: Function): this;
  abstract once(event: 'will-quit', listener: (event: Electron.Event) => void): this;
  abstract once(event: 'window-all-closed', listener: Function): this;
  abstract once(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract quit(): void;

  abstract rawListeners(event: string | symbol): Function[];

  abstract relaunch(options?: Electron.RelaunchOptions): void;

  abstract releaseSingleInstanceLock(): void;

  abstract removeAllListeners(event?: string | symbol): this;

  abstract removeAsDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean;

  abstract removeListener(event: 'accessibility-support-changed', listener: (event: Electron.Event, accessibilitySupportEnabled: boolean) => void): this;
  abstract removeListener(event: 'activate', listener: (event: Electron.Event, hasVisibleWindows: boolean) => void): this;
  abstract removeListener(event: 'activity-was-continued', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract removeListener(event: 'before-quit', listener: (event: Electron.Event) => void): this;
  abstract removeListener(event: 'browser-window-blur', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract removeListener(event: 'browser-window-created', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract removeListener(event: 'browser-window-focus', listener: (event: Electron.Event, window: Electron.BrowserWindow) => void): this;
  abstract removeListener(event: 'certificate-error', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, error: string, certificate: Electron.Certificate, callback: (isTrusted: boolean) => void) => void): this;
  abstract removeListener(event: 'child-process-gone', listener: (event: Electron.Event, details: Electron.Details) => void): this;
  abstract removeListener(event: 'continue-activity', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract removeListener(event: 'continue-activity-error', listener: (event: Electron.Event, type: string, error: string) => void): this;
  abstract removeListener(event: 'desktop-capturer-get-sources', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract removeListener(event: 'did-become-active', listener: (event: Electron.Event) => void): this;
  abstract removeListener(event: 'gpu-info-update', listener: Function): this;
  abstract removeListener(event: 'gpu-process-crashed', listener: (event: Electron.Event, killed: boolean) => void): this;
  abstract removeListener(event: 'login', listener: (event: Electron.Event, webContents: Electron.WebContents, authenticationResponseDetails: Electron.AuthenticationResponseDetails, authInfo: Electron.AuthInfo, callback: (username?: string, password?: string) => void) => void): this;
  abstract removeListener(event: 'new-window-for-tab', listener: (event: Electron.Event) => void): this;
  abstract removeListener(event: 'open-file', listener: (event: Electron.Event, path: string) => void): this;
  abstract removeListener(event: 'open-url', listener: (event: Electron.Event, url: string) => void): this;
  abstract removeListener(event: 'quit', listener: (event: Electron.Event, exitCode: number) => void): this;
  abstract removeListener(event: 'ready', listener: (event: Electron.Event, launchInfo: Record<string, any>) => void): this;
  abstract removeListener(event: 'remote-get-builtin', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract removeListener(event: 'remote-get-current-web-contents', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract removeListener(event: 'remote-get-current-window', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract removeListener(event: 'remote-get-global', listener: (event: Electron.Event, webContents: Electron.WebContents, globalName: string) => void): this;
  abstract removeListener(event: 'remote-require', listener: (event: Electron.Event, webContents: Electron.WebContents, moduleName: string) => void): this;
  abstract removeListener(event: 'render-process-gone', listener: (event: Electron.Event, webContents: Electron.WebContents, details: Electron.RenderProcessGoneDetails) => void): this;
  abstract removeListener(event: 'renderer-process-crashed', listener: (event: Electron.Event, webContents: Electron.WebContents, killed: boolean) => void): this;
  abstract removeListener(event: 'second-instance', listener: (event: Electron.Event, argv: string[], workingDirectory: string) => void): this;
  abstract removeListener(event: 'select-client-certificate', listener: (event: Electron.Event, webContents: Electron.WebContents, url: string, certificateList: Electron.Certificate[], callback: (certificate?: Electron.Certificate) => void) => void): this;
  abstract removeListener(event: 'session-created', listener: (session: Electron.Session) => void): this;
  abstract removeListener(event: 'update-activity-state', listener: (event: Electron.Event, type: string, userInfo: unknown) => void): this;
  abstract removeListener(event: 'web-contents-created', listener: (event: Electron.Event, webContents: Electron.WebContents) => void): this;
  abstract removeListener(event: 'will-continue-activity', listener: (event: Electron.Event, type: string) => void): this;
  abstract removeListener(event: 'will-finish-launching', listener: Function): this;
  abstract removeListener(event: 'will-quit', listener: (event: Electron.Event) => void): this;
  abstract removeListener(event: 'window-all-closed', listener: Function): this;
  abstract removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

  abstract requestSingleInstanceLock(): boolean;

  abstract resignCurrentActivity(): void;

  abstract setAboutPanelOptions(options: Electron.AboutPanelOptionsOptions): void;

  abstract setAccessibilitySupportEnabled(enabled: boolean): void;

  abstract setActivationPolicy(policy: 'regular' | 'accessory' | 'prohibited'): void;

  abstract setAppLogsPath(path?: string): void;

  abstract setAppUserModelId(id: string): void;

  abstract setAsDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean;

  abstract setBadgeCount(count: number): boolean;

  abstract setJumpList(categories: Electron.JumpListCategory[] | null): void;

  abstract setLoginItemSettings(settings: Electron.Settings): void;

  abstract setMaxListeners(n: number): this;

  abstract setName(name: string): void;

  abstract setPath(name: string, path: string): void;

  abstract setSecureKeyboardEntryEnabled(enabled: boolean): void;

  abstract setUserActivity(type: string, userInfo: any, webpageURL?: string): void;

  abstract setUserTasks(tasks: Electron.Task[]): boolean;

  abstract show(): void;

  abstract showAboutPanel(): void;

  abstract showEmojiPanel(): void;

  abstract startAccessingSecurityScopedResource(bookmarkData: string): Function;

  abstract updateCurrentActivity(type: string, userInfo: any): void;

  abstract whenReady(): Promise<void>;

}

/* eslint-enable */
