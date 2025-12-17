"use client";
import { useState, useRef, useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<React.ReactNode[]>([]);
    const [currentDir, setCurrentDir] = useState("~");
    const terminalHistoryRef = useRef<HTMLDivElement>(null);

    // Dark Mode hook
    const { darkMode, toggleDarkMode, turnOnDarkMode, turnOffDarkMode } = useDarkMode();

    const welcomeMessage = (
        <div>
            <p>Welcome to LIU rush 1.0.0 (Custom/Next.js Terminal v1 x86_69)</p>
            <br />
            <p>* Documentation: No documentation (loool)</p>
            <p>* Management: Me I guess</p>
            <p>* Support: You're on your own</p>
            <br />
            <p>* Rush, short for "Ruyi Shell," is here to assist (or confuse) you.</p>
            <p>Enjoy your journey through my website.</p>
            <p>This terminal kinda sucks.</p>
            <p>It's clearly not 1:1 to an actual terminal but whatever</p>
            <br />
            <p>Need help? Try the 'help' command.</p>
        </div>
    );

    // Commands supported by the terminal
    const commands = {
        pwd: () => "Users/visitor" + currentDir.slice(1),
        ls: () => "blog  projects  about  contact",
        cd: (dir: string) => {
            if (dir === "about" || dir === "projects" || dir === "blog" || dir === "contact") {
                setCurrentDir(`~/${dir}`);
                return `Navigated to ~/${dir}`;
            } else {
                return "Directory not found";
            }
        },
        clear: () => {
            setHistory([]);
            return "";
        },
        help: () => (
            <>
              <p>LIU rush, version 1.0.0-release</p>
              <p>Rush, short for "Ruyi Shell," is here to assist (or confuse) you.</p>
              <p>These shell commands are defined internally. Type 'help' to see this list.</p>
              <p>Type 'help name' to find out more about the function 'name'.</p>
              <p>Use 'info rush' to find out more about the shell in general. It probably won't help. This is all you get.</p>
              <p>Commands:</p>
              <ul>
                <li>ls</li>
                <li>cd [dir]</li>
                <li>pwd</li>
                <li>clear</li>
                <li>help</li>
                <li>darkmode</li>
              </ul>
            </>
          ),
        darkmode: (arg?: string) => {
            switch (arg) {
                case "on":
                    turnOnDarkMode();
                    return "Dark mode turned on";
                case "off":
                    turnOffDarkMode();
                    return "Dark mode turned off";
                case "toggle":
                    toggleDarkMode();
                    return `Dark mode toggled. Current mode: ${darkMode ? "off" : "on"}`;
                default:
                    return "Usage: darkmode [on|off|toggle]";
            }
        }
    };

    const handleCommand = (cmd: string) => {
        const [command, ...args] = cmd.split(" ");

        if (command in commands) {
            // Pass the first argument (if available) to the command
            return (commands[command as keyof typeof commands] as Function)(...args);
        } else {
            return `${command}: command not found`;
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const output = handleCommand(input);
        setHistory([...history, `${getPrompt()} ${input}`, output]);
        setInput("");
    };

    const getPrompt = () => {
        return `user@headinmyhands: ${currentDir} $`; // Customizable prompt with username, directory, and symbol
    };

    // Scroll the terminal history div to the bottom whenever the history changes
    useEffect(() => {
        if (terminalHistoryRef.current) {
            terminalHistoryRef.current.scrollTop = terminalHistoryRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        setHistory([welcomeMessage]);
    }, []);

    return (
        <section className="w-1/2 h-screen fixed top-0 left-0 p-6 fade-in">
            <div className="bg-gray-900 h-full flex flex-col p-6 rounded-lg">
                <div
                    ref={terminalHistoryRef}
                    className="terminal-history terminal-text overflow-y-auto"
                >
                    {history.map((entry, index) => (
                        <div key={index}>{entry}</div>
                    ))}
                </div>
                <form onSubmit={onSubmit} className="flex w-full">
                    <span className="text-blue-500" >{getPrompt()}&nbsp;</span> {/* The prompt displayed before the input */}
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white flex-grow"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoFocus
                    />
                </form>
            </div>
        </section>
    );
}

