# SpaceSniffer: Discover Your Disk Space Allocation

## Introduction
SpaceSniffer is an innovative Electron application designed to help users visualize and manage the space allocation on their hard disks efficiently. Leveraging cutting-edge technology, this application offers a user-friendly interface for scanning and understanding how disk space is utilized, making it easier to manage files and storage.

## Technologies Used
This project was built using a robust stack of technologies to ensure performance and ease of use:
- **TypeScript (TS)** for adding static type definitions to JavaScript, enhancing code quality and understandability.
- **Electron** for creating native applications with web technologies, allowing for cross-platform desktop apps.
- **React** for building the user interface with a component-based architecture, ensuring a seamless user experience.
- **npx create-react-electron-app**: A custom boilerplate for Electron projects that integrates React, simplifying the setup and development process. [[create-react-electron-app](https://www.npmjs.com/package/create-react-electron-app)]
- **RustDirectorySniffer DLL**: A Rust-based dynamic link library that handles the intricate task of sniffing disk space usage. This DLL is critical for accurately analyzing and reporting space allocation on the hard disk. [[Rust Directory Sniffer DLL](https://github.com/AviadCohen24/RustDirectorySniffer)]

## What I Have Learned
Throughout the development of SpaceSniffer, I have significantly enhanced my skills in several key areas:
- **Electron Development**: Gained a deeper understanding of Electron and its capabilities for building desktop applications.
- **Using External DLLs in Electron**: Learned how to integrate and utilize external DLLs within an Electron application, specifically for complex tasks such as disk space analysis.
- **Rust Programming**: Acquired foundational knowledge in Rust, focusing on creating efficient, high-performance components like the RustDirectorySniffer DLL.

## How to Start

### For Development:
1. Clone the project repository.
2. Change directory (cd) into the project folder.
3. Install dependencies with `npm install`.
4. Start the application in development mode with `npm run start`.

### For Production:
1. Install dependencies with `npm install`.
2. Package the application using `npm run package`.
3. Navigate to the `release/dist` directory.
4. Run the installer found in the directory to install SpaceSniffer on your system.

## Features
SpaceSniffer allows users to:
- **Select a Drive**: Choose the specific drive you wish to scan for space allocation.
- **Scan in Real-Time**: Begin scanning the selected drive, with the application displaying the space allocation dynamically as it changes during the scan.

## Work in Progress (WIP)
Currently, there is a known issue where the application may crash upon starting a scan. Additionally, we are working on implementing a feature to update the live memory allocation chart in real-time during the scanning process. Your patience and contributions to resolving these issues are greatly appreciated.
