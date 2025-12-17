"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
    const [hovered, setHovered] = useState(String);

    const defaultStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        transition: 'background-color 0.3s ease, filter 0.3s ease',
    };

    const hoverStyle = {
        ...defaultStyle,
        backgroundColor: 'white',
    };

    const imageDefaultStyle = {
        filter: 'invert(1)',
        transition: 'filter 0.3s ease',
    };

    const imageHoverStyle = {
    };

    return (
        <footer className="w-full bg-transparent text-white z-10">
            <div className="flex flex-col items-center">
                <div className="flex gap-6 mt-4">
                    {/* Email Icon */}
                    <a
                        href="mailto:rliu2400@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'email' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('email')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/mail.svg"
                            alt="Email"
                            width={30}
                            height={30}
                            style={
                                hovered === 'email' ? imageHoverStyle : imageDefaultStyle
                            }
                        />
                    </a>
                    {/* LinkedIn Icon */}
                    <a
                        href="https://linkedin.com/in/rliu2400"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'linkedin' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('linkedin')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={30}
                            height={30}
                            style={
                                hovered === 'linkedin' ? imageHoverStyle : imageDefaultStyle
                            }
                        />
                    </a>
                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/rliu2400"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'github' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('github')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={30}
                            height={30}
                            style={
                                hovered === 'github' ? imageHoverStyle : imageDefaultStyle
                            }
                        />
                    </a>
                    {/* Codeforces Icon */}
                    <a
                        href="https://codeforces.com/profile/GreatSageEqualToHeaven"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'codeforces' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('codeforces')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/codeforces.svg"
                            alt="Codeforces"
                            width={30}
                            height={30}
                            style={
                                hovered === 'codeforces'
                                    ? imageHoverStyle
                                    : imageDefaultStyle
                            }
                        />
                    </a>
                    {/* Leetcode Icon */}
                    <a
                        href="https://leetcode.com/u/GreatSageEqualToHeaven/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'leetcode' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('leetcode')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/leetcode.svg"
                            alt="Leetcode"
                            width={30}
                            height={30}
                            style={
                                hovered === 'leetcode' ? imageHoverStyle : imageDefaultStyle
                            }
                        />
                    </a>
                    {/* Instagram Icon */}
                    <a
                        href="https://www.instagram.com/rryanliu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'instagram' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('instagram')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/instagram.svg"
                            alt="Instagram"
                            width={30}
                            height={30}
                            style={
                                hovered === 'instagram' ? imageHoverStyle : imageDefaultStyle
                            }
                        />
                    </a>
                    {/* Goodreads Icon 
                    <a
                        href="https://www.goodreads.com/handsinmyhead"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={hovered === 'goodreads' ? hoverStyle : defaultStyle}
                        onMouseEnter={() => setHovered('goodreads')}
                        onMouseLeave={() => setHovered('')}
                    >
                        <Image
                            src="/icons/goodreads.svg"
                            alt="Goodreads"
                            width={30}
                            height={30}
                            style={
                                hovered === 'goodreads' ? imageHoverStyle : imageDefaultStyle
                            }
                        />
                    </a> */}
                </div>
            </div>
        </footer>
    );
}
