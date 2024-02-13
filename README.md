<h1>SpaceSniffer: Discover Your Disk Space Allocation</h1>

    <h2>Introduction</h2>
    <p>SpaceSniffer is an innovative Electron application designed to help users visualize and manage the space allocation on their hard disks efficiently. Leveraging cutting-edge technology, this application offers a user-friendly interface for scanning and understanding how disk space is utilized, making it easier to manage files and storage.</p>

    <h2>Technologies Used</h2>
    <p>This project was built using a robust stack of technologies to ensure performance and ease of use:</p>
    <ul>
        <li><strong>TypeScript (TS)</strong> for adding static type definitions to JavaScript, enhancing code quality and understandability.</li>
        <li><strong>Electron</strong> for creating native applications with web technologies, allowing for cross-platform desktop apps.</li>
        <li><strong>React</strong> for building the user interface with a component-based architecture, ensuring a seamless user experience.</li>
        <li><strong>npx create-react-electron-app</strong>: A custom boilerplate for Electron projects that integrates React, simplifying the setup and development process. <a href="#">https://www.npmjs.com/package/create-react-electron-app</a></li>
        <li><strong>RustDirectorySniffer DLL</strong>: A Rust-based dynamic link library that handles the intricate task of sniffing disk space usage. This DLL is critical for accurately analyzing and reporting space allocation on the hard disk. <a href="#">https://github.com/AviadCohen24/RustDirectorySniffer</a></li>
    </ul>

    <h2>What I Have Learned</h2>
    <p>Throughout the development of SpaceSniffer, I have significantly enhanced my skills in several key areas:</p>
    <ul>
        <li><strong>Electron Development</strong>: Gained a deeper understanding of Electron and its capabilities for building desktop applications.</li>
        <li><strong>Using External DLLs in Electron</strong>: Learned how to integrate and utilize external DLLs within an Electron application, specifically for complex tasks such as disk space analysis.</li>
        <li><strong>Rust Programming</strong>: Acquired foundational knowledge in Rust, focusing on creating efficient, high-performance components like the RustDirectorySniffer DLL.</li>
    </ul>

    <h2>How to Start</h2>
    <h3>For Development:</h3>
    <ol>
        <li>Clone the project repository.</li>
        <li>Change directory (cd) into the project folder.</li>
        <li>Install dependencies with <code>npm install</code>.</li>
        <li>Start the application in development mode with <code>npm run start</code>.</li>
    </ol>

    <h3>For Production:</h3>
    <ol>
        <li>Package the application using <code>npm run package</code>.</li>
        <li>Navigate to the <code>release/dist</code> directory.</li>
        <li>Run the installer found in the directory to install SpaceSniffer on your system.</li>
    </ol>

    <h2>Features</h2>
    <p>SpaceSniffer allows users to:</p>
    <ul>
        <li><strong>Select a Drive</strong>: Choose the specific drive you wish to scan for space allocation.</li>
        <li><strong>Scan in Real-Time</strong>: Begin scanning the selected drive, with the application displaying the space allocation dynamically as it changes during the scan.</li>
    </ul>

    <h2>Work in Progress (WIP)</h2>
    <p>Currently, there is a known issue where the application may crash upon starting a scan. Additionally, we are working on implementing a feature to update the live memory allocation chart in real-time during the scanning process. Your patience and contributions to resolving these issues are greatly appreciated.</p>
