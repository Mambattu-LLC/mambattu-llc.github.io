import React, { useState, useEffect, useRef } from "react";
import {
	Terminal,
	X,
	ChevronRight,
	Shield,
	Activity,
	Cpu,
	Users,
	Server,
} from "lucide-react";
import { Particle } from "./Particle";

// --- Internal Component: Manifesto Modal ---
const Manifesto = ({ isOpen, onClose, onContact }) => {
	// Added: Effect to handle Escape key press
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		// Added fragment to include style tag for hiding scrollbar
		<>
			<style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
        `}</style>

			{/* Added 'scrollbar-hide' class to the container */}
			<div className="fixed inset-0 z-50 overflow-y-auto bg-[#0F1115]/98 backdrop-blur-md scrollbar-hide">
				{/* Wrapper to center content vertically if short, or allow scroll if tall */}
				<div className="flex min-h-full items-center justify-center p-4 md:p-8">
					{/* Inner card has no height constraints, it grows with content */}
					<div className="relative w-full max-w-4xl bg-[#0F1115] border border-[#333] p-8 md:p-16 shadow-2xl">
						{/* Close Button */}
						<button
							onClick={onClose}
							className="absolute top-6 right-6 text-[#8A8A8A] hover:text-[#C74B36] transition-colors"
						>
							<X size={24} />
						</button>

						<div className="space-y-8">
							{/* Header */}
							<div>
								<div className="text-[#C74B36] text-xs tracking-[0.3em] uppercase mb-2">
									The Mambattu Protocol
								</div>
								<h2 className="font-serif text-4xl md:text-5xl text-[#EAEAEA]">
									Engagement Ethos
								</h2>
							</div>

							{/* Intro */}
							<p className="font-serif text-lg md:text-xl text-[#8A8A8A] leading-relaxed border-l-2 border-[#333] pl-6">
								We are not general contractors. Mambattu seeks out projects that
								elevate human sovereignty and redefine collaborative systems.{" "}
								<span className="text-[#F0F0F0] italic">
									Our work is a covenant between high architecture and ethical
									development.
								</span>
							</p>

							<div className="border-t border-[#ffffff05] my-8"></div>

							{/* Section 1: Foundation */}
							<div>
								<h3 className="text-[#FFB000] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
									<span className="w-1.5 h-1.5 bg-[#FFB000] rounded-full"></span>{" "}
									01. Our Foundation
								</h3>
								<div className="grid gap-8 pl-4 md:pl-6">
									{/* Groundedness */}
									<div>
										<h4 className="font-serif text-lg text-[#EAEAEA] mb-2">
											Groundedness & Transparency
										</h4>
										<p className="text-[#8A8A8A] text-sm leading-relaxed">
											Every line of code must answer a real human need, not just
											hype. We anchor frontier technology to natural, intuitive
											experiences. Our processes are open-sourced to the client;
											there are no black boxes.
										</p>
									</div>
									{/* Quality */}
									<div>
										<h4 className="font-serif text-lg text-[#EAEAEA] mb-2">
											Quality as Immutable Architecture
										</h4>
										<p className="text-[#8A8A8A] text-sm leading-relaxed">
											We treat every contract as immutable architecture.
											Rigorous auditing, deterministic logic, and long-term
											viability are non-negotiable standards.
										</p>
									</div>
								</div>
							</div>

							{/* Section 2: The Mandate */}
							<div className="pt-4">
								<h3 className="text-[#FFB000] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
									<span className="w-1.5 h-1.5 bg-[#FFB000] rounded-full"></span>{" "}
									02. The Mandate (Projects We Seek)
								</h3>
								<div className="grid md:grid-cols-2 gap-8 pl-4 md:pl-6">
									<div className="border-l border-[#333] pl-4">
										<h4 className="font-serif text-lg text-[#EAEAEA] mb-2">
											Sovereign Systems
										</h4>
										<ul className="text-[#8A8A8A] text-sm space-y-2 list-disc list-inside marker:text-[#C74B36]">
											<li>Privacy-first user experiences.</li>
											<li>Zero-knowledge proofs (ZKPs) & DID.</li>
											<li>Robust, permissionless infrastructure.</li>
										</ul>
									</div>

									<div className="border-l border-[#333] pl-4">
										<h4 className="font-serif text-lg text-[#EAEAEA] mb-2">
											Collective Coordination
										</h4>
										<ul className="text-[#8A8A8A] text-sm space-y-2 list-disc list-inside marker:text-[#C74B36]">
											<li>Governance frameworks & Web3 DAOs.</li>
											<li>Novel incentive structures.</li>
											<li>Trustless collaboration protocols.</li>
										</ul>
									</div>

									<div className="border-l border-[#333] pl-4 md:col-span-2">
										<h4 className="font-serif text-lg text-[#EAEAEA] mb-2">
											Organic Frontiers
										</h4>
										<p className="text-[#8A8A8A] text-sm">
											Projects exploring new intersections of technology and
											nature/health/humanity. Innovation that minimizes
											complexity and enhances human-centric design.
										</p>
									</div>
								</div>
							</div>

							{/* Closing */}
							<div className="pt-12 text-center">
								<p className="font-serif text-lg md:text-xl text-[#F0F0F0] italic mb-6">
									"If your vision aligns with our architecture, the loom is
									ready."
								</p>
								<button
									onClick={onContact}
									className="inline-flex items-center gap-2 text-[#C74B36] text-xs tracking-[0.2em] uppercase hover:text-[#FFB000] transition-colors border-b border-transparent hover:border-[#FFB000] pb-1"
								>
									<span className="group-hover:text-[#F0F0F0] font-bold">
										&gt;
									</span>{" "}
									Initialize_dialogue
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// --- Main Component ---
const MambattuLanding = () => {
	const [isTerminalOpen, setIsTerminalOpen] = useState(false);
	const [isManifestoOpen, setIsManifestoOpen] = useState(false);
	const [terminalStep, setTerminalStep] = useState(0);
	const [terminalInput, setTerminalInput] = useState("");
	const [formSubmitted, setFormSubmitted] = useState(false);

	// REVERTED: Back to full "MAMBATTU" text logic
	const [titleText, setTitleText] = useState("MAMBATTU");

	const [terminalHistory, setTerminalHistory] = useState([
		{ type: "system", content: "MAMBATTU_CORE v1.0.0 [SECURE]" },
		{ type: "system", content: "Network State: DORMANT" },
		{ type: "system", content: "Awaiting User Keypress..." },
	]);

	const canvasRef = useRef(null);
	const terminalEndRef = useRef(null);

	// Colors from Palette
	const COLORS = {
		bg: "#0F1115", // Obsidian Slate
		accent: "#C74B36", // Laterite Red
		light: "#FFB000", // Phosphor Amber
		text: "#F0F0F0", // Paper White
		dim: "#8A8A8A", // Dust
	};

	// --- Visuals: "Dormant" Network Roots Animation ---
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let width, height;
		let particles = [];
		let mouse = { x: -1000, y: -1000 }; // Start off screen

		const resize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};

		const initParticles = () => {
			particles = [];
			const count = Math.floor((width * height) / 20000); // Sparse network
			for (let i = 0; i < count; i++) {
				particles.push(new Particle(width, height, COLORS));
			}
		};

		const animate = () => {
			ctx.fillStyle = COLORS.bg;
			ctx.fillRect(0, 0, width, height); // Clear with bg color

			for (let i = 0; i < particles.length; i++) {
				particles[i].update(mouse);
				particles[i].draw(ctx);

				// Connections
				for (let j = i; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					// INCREASED: Connection distance to 300 for longer reaching lines
					const maxDistance = 300;

					if (distance < maxDistance) {
						ctx.beginPath();

						// Dynamic color based on mouse proximity
						const mouseDist = Math.sqrt(
							(mouse.x - particles[i].x) ** 2 + (mouse.y - particles[i].y) ** 2
						);

						// INCREASED: Interaction radius to 400 so the "pointer effect" spans wider
						const interactionRadius = 400;
						const isActive = mouseDist < interactionRadius;

						// Opacity Logic:
						// 1. Base opacity reduces as connection length increases (Long lines = dim)
						const lineOpacity = 1 - distance / maxDistance;

						if (isActive) {
							// Active (Near Mouse): Amber
							// We blend line length opacity with mouse proximity for a smooth falloff
							const mouseFactor = 1 - mouseDist / interactionRadius;
							ctx.strokeStyle = `rgba(255, 176, 0, ${
								lineOpacity * mouseFactor
							})`;
							ctx.lineWidth = 0.6;
						} else {
							// Dormant: Laterite Red
							// Very faint, mostly visible only when lines are short
							ctx.strokeStyle = `rgba(199, 75, 54, ${lineOpacity * 0.1})`;
							ctx.lineWidth = 0.2;
						}

						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}
			requestAnimationFrame(animate);
		};

		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		window.addEventListener("resize", () => {
			resize();
			initParticles();
		});
		window.addEventListener("mousemove", handleMouseMove);

		resize();
		initParticles();
		animate();

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// --- Cipher Animation on Load ---
	useEffect(() => {
		// REVERTED: Back to "MAMBATTU"
		const targetText = "MAMBATTU";
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
		let iteration = 0;
		let interval = null;

		interval = setInterval(() => {
			// eslint-disable-next-line no-unused-vars
			setTitleText((_prev) =>
				targetText
					.split("")
					.map((letter, index) => {
						if (index < iteration) {
							return targetText[index];
						}
						return chars[Math.floor(Math.random() * chars.length)];
					})
					.join("")
			);

			if (iteration >= targetText.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3; // Speed of deciphering
		}, 50);

		return () => clearInterval(interval);
	}, []);

	// --- Terminal Logic ---
	const scrollToBottom = () => {
		terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		if (isTerminalOpen) scrollToBottom();
	}, [terminalHistory, isTerminalOpen]);

	// Helper to get current prompt text
	const getCurrentPrompt = () => {
		if (terminalStep === 0) return "Type 'init' to begin...";
		if (terminalStep === 1) return "ACME Inc.";
		if (terminalStep === 2) return "me@acme.com";
		if (terminalStep === 3) return "Describe your project...";
		return "";
	};

	const resetTerminal = () => {
		setTerminalHistory([
			{ type: "system", content: "MAMBATTU_CORE v1.0.0 [SECURE]" },
			{ type: "system", content: "Network State: DORMANT" },
			{ type: "system", content: "Awaiting User Keypress..." },
		]);
		setTerminalInput("");
		setTerminalStep(0);
		setFormSubmitted(false);
	};

	const handleCommand = (e) => {
		if (e.key === "Enter") {
			// Don't accept input after form submission
			if (formSubmitted) {
				return;
			}

			const input = terminalInput.trim();
			const newHistory = [...terminalHistory, { type: "user", content: input }];

			if (input.toLowerCase() === "clear") {
				resetTerminal();
				return;
			}

			if (input.toLowerCase() === "close") {
				setIsTerminalOpen(false);
				setTerminalInput("");
				return;
			}

			// Handshake Protocol
			if (terminalStep === 0) {
				if (
					["start", "hello", "initialize", "init"].includes(input.toLowerCase())
				) {
					newHistory.push({ type: "system", content: "Handshake initiated." });
					newHistory.push({
						type: "system",
						content: "Identify your Organization:",
					});
					setTerminalStep(1);
				} else {
					newHistory.push({
						type: "system",
						content: 'Protocol mismatch. Type "init" to begin.',
					});
				}
			} else if (terminalStep === 1) {
				newHistory.push({
					type: "system",
					content: `Entity [${input}] recognized.`,
				});
				newHistory.push({
					type: "system",
					content: "Enter secure coms endpoint (Email):",
				});
				setTerminalStep(2);
			} else if (terminalStep === 2) {
				newHistory.push({ type: "system", content: `Endpoint verified.` });
				newHistory.push({
					type: "system",
					content: "Define mission parameters (Project Brief):",
				});
				setTerminalStep(3);
			} else if (terminalStep === 3) {
				newHistory.push({ type: "system", content: "Encrypting packet..." });
				setTimeout(() => {
					setTerminalHistory((prev) => [
						...prev,
						{ type: "system", content: ">> TRANSMISSION COMPLETE." },
					]);
					setTerminalHistory((prev) => [
						...prev,
						{ type: "system", content: "The Village will respond." },
					]);
				}, 1000);
				setFormSubmitted(true);
				setTerminalStep(-1);
			}

			setTerminalHistory(newHistory);
			setTerminalInput("");
		}
	};

	return (
		<div className="relative min-h-screen bg-[#0F1115] text-[#F0F0F0] overflow-hidden font-mono selection:bg-[#C74B36] selection:text-white">
			{/* Background Canvas */}
			<canvas
				ref={canvasRef}
				className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
			/>

			{/* Navigation */}
			<nav className="relative z-10 flex justify-between items-center px-8 py-8 border-b border-[#ffffff05]">
				<div className="text-xs md:text-sm tracking-[0.2em] text-[#8A8A8A] uppercase">
					Est. 2025
				</div>
				<div className="flex gap-8 text-xs uppercase tracking-widest">
					<button onClick={() => setIsManifestoOpen(true)}>
						<span className="cursor-pointer hover:text-[#FFB000] transition-colors duration-300 focus:outline-none">
							Manifesto
						</span>
					</button>
					{/* <span className="cursor-pointer hover:text-[#FFB000] transition-colors duration-300">
						Projects
					</span> */}
				</div>
			</nav>

			{/* Main Content */}
			<main className="relative z-10 flex flex-col items-center justify-center h-[80vh] px-4 text-center">
				{/* Status Indicator */}
				<div className="mb-8 flex items-center gap-3 text-[#C74B36] text-[10px] tracking-[0.3em] uppercase">
					<div className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C74B36] opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C74B36]"></span>
					</div>
					Headless Identity
				</div>

				{/* Cipher Title - Heritage Font */}
				{/* REVERTED: Removed ElephantGlyph and restored standard text rendering */}
				<h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight text-[#EAEAEA] mix-blend-screen select-none">
					{titleText}
				</h1>

				{/* UPDATED: New, concise tagline */}
				<p className="mt-8 max-w-lg text-sm text-[#8A8A8A] font-light leading-relaxed tracking-wide">
					Sovereign Infrastructure. <br />
					Collective Future.
				</p>

				{/* CLI Trigger Button */}
				<div className="mt-16">
					<button
						onClick={() => setIsTerminalOpen(true)}
						className="group relative px-8 py-4 bg-transparent overflow-hidden border border-[#333] hover:border-[#FFB000] transition-colors duration-500 focus:outline-none"
					>
						<div className="absolute inset-0 w-0 bg-[#FFB000] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
						<span className="relative flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#F0F0F0] group-hover:text-[#FFB000]">
							<span className="text-[#FFB000] group-hover:text-[#F0F0F0] font-bold">
								&gt;
							</span>{" "}
							Initialize_dialogue
						</span>
					</button>
				</div>

				{/* Footer Grid - Pinned & Updated to Match Manifesto Pillars */}
				<div className="fixed bottom-8 w-full max-w-7xl px-8 hidden md:flex justify-between text-left text-[10px] uppercase tracking-[0.2em] text-[#555] z-20">
					<div className="flex flex-col gap-1 hover:text-[#C74B36] transition-colors cursor-default">
						<Server size={14} className="text-[#C74B36] mb-2" />
						<span>Sovereign Systems</span>
					</div>
					<div className="flex flex-col gap-1 hover:text-[#C74B36] transition-colors cursor-default">
						<Users size={14} className="text-[#C74B36] mb-2" />
						<span>Collective Coordination</span>
					</div>
					<div className="flex flex-col gap-1 hover:text-[#C74B36] transition-colors cursor-default">
						<Cpu size={14} className="text-[#C74B36] mb-2" />
						<span>Organic Frontiers</span>
					</div>
				</div>
			</main>

			{/* TERMINAL OVERLAY */}
			{isTerminalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-sm">
					<div className="w-full max-w-2xl h-[600px] bg-[#0F1115] border border-[#333] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col font-mono text-sm">
						{/* Terminal Header */}
						<div className="bg-[#15171C] px-4 py-3 flex justify-between items-center border-b border-[#333]">
							<div className="flex items-center gap-2 text-[#8A8A8A] text-xs tracking-wider">
								<Terminal size={12} />
								<span>ROOT ACCESS // MAMBATTU_SHELL</span>
							</div>
							<div className="flex items-center gap-2">
								<button
									onClick={resetTerminal}
									className="text-[#8A8A8A] hover:text-[#FFB000] transition-colors text-xs px-2 py-1 border border-[#333] hover:border-[#FFB000]"
									title="Reset terminal"
								>
									RESET
								</button>
								<button
									onClick={() => setIsTerminalOpen(false)}
									className="text-[#8A8A8A] hover:text-[#C74B36] transition-colors"
								>
									<X size={14} />
								</button>
							</div>
						</div>

						{/* Terminal Instructions */}
						<div className="px-8 py-4 border-b border-[#333] bg-[#15171C] text-[#8A8A8A] text-xs leading-relaxed space-y-2">
							<div>
								<span className="text-[#FFB000]">&gt; Getting Started:</span>
							</div>
							<div className="ml-4 space-y-1">
								<div>• Type <span className="text-[#F0F0F0]">"init"</span> to begin the handshake protocol</div>
								<div>• Follow the prompts to share your organization, email, and project details</div>
								<div>• Type <span className="text-[#F0F0F0]">"clear"</span> to reset the terminal</div>
								<div>• Type <span className="text-[#F0F0F0]">"close"</span> to exit</div>
							</div>
						</div>

						{/* Terminal Output */}
						<div
							className="flex-1 p-8 overflow-y-auto text-[#FFB000]"
							onClick={() => document.getElementById("termInput").focus()}
						>
							{terminalHistory.map((line, i) => (
								<div key={i} className="mb-2 wrap-break-words leading-relaxed">
									{line.type === "user" ? (
										<span className="text-[#F0F0F0] mr-2">
											&gt; {line.content}
										</span>
									) : (
										<span className="opacity-90">{line.content}</span>
									)}
								</div>
							))}

							{/* Active Input Line */}
							<div className="flex mt-4 items-center">
								<span className="text-[#F0F0F0] mr-3">&gt;</span>
								<input
									id="termInput"
									type="text"
									autoFocus={!formSubmitted}
									value={terminalInput}
									onChange={(e) => setTerminalInput(e.target.value)}
									onKeyDown={handleCommand}
									disabled={formSubmitted}
									className={`bg-transparent border-none outline-none flex-1 text-[#FFB000] placeholder-[#333] caret-[#C74B36] ${
										formSubmitted ? "opacity-50 cursor-not-allowed" : ""
									}`}
									placeholder={getCurrentPrompt()}
									autoComplete="off"
								/>
							</div>
							<div ref={terminalEndRef} />
						</div>
					</div>
				</div>
			)}

			{/* MANIFESTO COMPONENT */}
			<Manifesto
				isOpen={isManifestoOpen}
				onClose={() => setIsManifestoOpen(false)}
				onContact={() => {
					setIsManifestoOpen(false);
					setTimeout(() => setIsTerminalOpen(true), 300);
				}}
			/>
		</div>
	);
};

export default MambattuLanding;
