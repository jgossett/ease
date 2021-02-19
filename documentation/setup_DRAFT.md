# Setup - DRAFT

This procedures will setup a computer to develop on the Ease application.

## Prerequisite

- Windows 10
- Chocolately. See https://chocolatey.org/install

## Instructions

### Install NodeJS and Angular CLI

1. Run **Windows Terminal** as Administrator.

   > **NOTE:** We need to run Windows Terminal as Administrator since we will use Chocoletely to install applications. 

2. Install NodeJS.

   ``` shell
   $ choco install nodejs --version 15.9.0 --yes
   ```

3. Restart **Windows Terminal**.

4. Install Angular CLI as a global package.

   ``` shell
   $ npm install --global @angular/cli
   ```

5. Verify Angular CLI is installed.

   ```shell
   $ npx run ng --version
   C:\Users\joshu>npx ng version
   
        _                      _                 ____ _     ___
       / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
      / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
     / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
    /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                   |___/
   
   
   Angular CLI: 11.2.1
   Node: 15.9.0
   OS: win32 x64
   
   Angular:
   ...
   Ivy Workspace:
   
   Package                      Version
   ------------------------------------------------------
   @angular-devkit/architect    0.1102.1 (cli-only)
   @angular-devkit/core         11.2.1 (cli-only)
   @angular-devkit/schematics   11.2.1 (cli-only)
   @schematics/angular          11.2.1 (cli-only)
   @schematics/update           0.1102.1 (cli-only)
   ```

### Install IntelliJ IDEA

``` shell
$ choco install intellijidea-ultimate
```

### Run Ease application in IntelliJ IDEA

(none)

## Troubleshoot

(none)