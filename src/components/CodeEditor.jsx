import React, { useRef, useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";

const CodeEditor = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [output, setOutput] = useState("");
  const [code, setCode] = useState(`function displayProgrammingSkills() {
    const skills = [
        { name: "JavaScript", percentage: 90 },
        { name: "React Native", percentage: 80 },
        { name: "Node.js", percentage: 70 },
        { name: "HTML/CSS", percentage: 85 },
        { name: "Python", percentage: 75 },
        { name: "SQL", percentage: 60 }
    ];
    let output = "My programming skills include:\\n";
    for (let i = 0; i < skills.length; i++) {
        output += \`\\n- \${skills[i].name}: \${skills[i].percentage}%\`;
    }
        console.log(output);
}
displayProgrammingSkills();
  `);

  const editorRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleRunCode = () => {
    const log = [];
    const customConsole = {
      log: (message) => log.push(message),
    };

    try {
      // Use `new Function` to execute code in a secure manner
      new Function("console", code)(customConsole);
      // Join log entries with newline characters
      setOutput(log.join("\\n"));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const handleOnType = (editor, data, value) => {
    setCode(value);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Code Editor</h1>
        <div className="flex items-center gap-2">
          {output === "" ? (
            <button
              onClick={handleRunCode}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Run
            </button>
          ) : (
            <button
              onClick={() => setOutput("")}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {output === "" ? (
        <div style={{ height: "300px" }} className="overflow-hidden">
          <CodeMirror
            ref={editorRef}
            value={code}
            options={{
              mode: "javascript",
              theme: isDarkMode ? "dracula" : "default",
              lineNumbers: true,
            }}
            onBeforeChange={handleOnType}
            className="border dark:border-gray-700"
          />
        </div>
      ) : (
        <div className=" h-[300px] flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        
         My programming skills include:
            - JavaScript: 90%
            - React Native: 80%
            - Node.js: 70%
            - HTML/CSS: 85%
            - Python: 75%
            - SQL: 60%
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
