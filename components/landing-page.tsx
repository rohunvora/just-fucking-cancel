'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import {
    ArrowRight01Icon,
    CheckmarkCircle02Icon,
    Cancel01Icon,
    GithubIcon,
    Upload01Icon,
    PlayCircle02Icon,
    MusicNote01Icon,
    PencilEdit02Icon,
    News01Icon,
    Dumbbell01Icon,
    ShoppingBag01Icon
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function LandingPage() {
    const [os, setOs] = useState<'mac' | 'win'>('mac');

    return (
        <div className="flex min-h-screen flex-col bg-black text-white selection:bg-white selection:text-black">
            {/* Header */}
            <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-2 font-mono text-lg font-bold tracking-tighter">
                        <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-black">
                            <HugeiconsIcon icon={Cancel01Icon} className="h-4 w-4" />
                        </div>
                        JFC
                    </div>
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
                            <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
                            <Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link>
                        </nav>
                        <Button variant="outline" className="h-9 gap-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all" asChild>
                            <Link href="https://github.com/rohunvora/just-fucking-cancel">
                                <HugeiconsIcon icon={GithubIcon} className="h-4 w-4" />
                                <span>Star on GitHub</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-6 pb-24 text-center md:pb-32 lg:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-6 flex max-w-fit items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-500"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
                        </span>
                        System Alert: You are losing money right now
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto max-w-5xl font-sans text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                    >
                        Stop Bleeding Money. <br />
                        <span className="text-zinc-500">Automate Your Defense.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed"
                    >
                        Corporations bank on you forgetting. They build labyrinths to keep your cash.
                        <span className="text-white font-medium"> We built the map out.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="h-14 min-w-[200px] rounded-full bg-white px-8 text-base font-bold text-black hover:bg-zinc-200 hover:scale-105 transition-all duration-300" asChild>
                            <Link href="#how-it-works">
                                Start The Audit
                                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </section>

                {/* The Usual Suspects - Marquee/Grid */}
                <section className="w-full border-y border-white/5 bg-white/[0.02] py-12 mb-24 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <p className="text-center text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">We catch them all</p>

                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale transition-all hover:grayscale-0">
                            {/* Streaming */}
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                                    <HugeiconsIcon icon={PlayCircle02Icon} className="h-6 w-6 text-red-500" />
                                </div>
                                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">Netflix & Hulu</span>
                            </div>

                            {/* Music */}
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                    <HugeiconsIcon icon={MusicNote01Icon} className="h-6 w-6 text-green-500" />
                                </div>
                                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">Spotify</span>
                            </div>

                            {/* Creative/Software */}
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                    <HugeiconsIcon icon={PencilEdit02Icon} className="h-6 w-6 text-blue-500" />
                                </div>
                                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">Adobe</span>
                            </div>

                            {/* News */}
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="p-2 bg-zinc-500/10 rounded-lg group-hover:bg-zinc-500/20 transition-colors">
                                    <HugeiconsIcon icon={News01Icon} className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">NYTimes</span>
                            </div>

                            {/* Gym */}
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                                    <HugeiconsIcon icon={Dumbbell01Icon} className="h-6 w-6 text-orange-500" />
                                </div>
                                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">Planet Fitness</span>
                            </div>

                            {/* Shopping/Misc */}
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                                    <HugeiconsIcon icon={ShoppingBag01Icon} className="h-6 w-6 text-yellow-500" />
                                </div>
                                <span className="text-zinc-400 font-medium group-hover:text-white transition-colors">Prime</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Steps Section */}
                <section id="how-it-works" className="container mx-auto px-6 py-24">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-20 text-center">
                            <h2 className="text-4xl font-bold font-sans mb-6">The 5-Step Money Recovery System</h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                Follow this exact protocol. It's designed to bypass their retention algorithms and reclaim your net worth.
                            </p>

                            {/* OS Toggle */}
                            <div className="mt-8 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
                                <button
                                    onClick={() => setOs('mac')}
                                    className={cn(
                                        "px-6 py-2 rounded-md text-sm font-medium transition-all relative overflow-hidden",
                                        os === 'mac' ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    Mac Protocol
                                    {os === 'mac' && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white mix-blend-overlay opacity-10" />}
                                </button>
                                <button
                                    onClick={() => setOs('win')}
                                    className={cn(
                                        "px-6 py-2 rounded-md text-sm font-medium transition-all relative overflow-hidden",
                                        os === 'win' ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    Windows Protocol
                                    {os === 'win' && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white mix-blend-overlay opacity-10" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-32">
                            {/* Step 1: Export Your Transactions */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute -left-4 -top-8 text-[120px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">01</div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                                        Expose the Leaks
                                        <span className="text-xs font-mono font-normal text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded">3 MINS</span>
                                    </h3>
                                    <p className="text-zinc-400 mb-6 text-lg">Banks hide this data deep in menus. Dig it out.</p>

                                    <div className="grid gap-4 bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="text-sm font-medium text-zinc-500 mb-2 uppercase tracking-wide">Select your target</div>
                                        <div className="space-y-3">
                                            <details className="group/item rounded-lg border border-white/10 bg-black/40">
                                                <summary className="cursor-pointer p-4 font-medium text-sm transition-colors hover:bg-white/5 flex items-center justify-between">
                                                    <span>Apple Card</span>
                                                    <span className="text-zinc-500 group-open/item:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="px-4 pb-4 text-sm text-zinc-400 pl-4 border-t border-white/5 pt-3">
                                                    <ol className="list-decimal pl-4 space-y-2 marker:text-zinc-600">
                                                        <li>Open <strong>Wallet</strong> on iPhone &gt; Tap <strong>Apple Card</strong></li>
                                                        <li>Scroll down &gt; Tap <strong>Card Balance</strong></li>
                                                        <li>Tap <strong>...</strong> &gt; <strong>Export Transactions</strong></li>
                                                        <li>Choose <strong>Last 12 Months</strong> and <strong>CSV</strong>. AirDrop to computer.</li>
                                                    </ol>
                                                </div>
                                            </details>
                                            <details className="group/item rounded-lg border border-white/10 bg-black/40">
                                                <summary className="cursor-pointer p-4 font-medium text-sm transition-colors hover:bg-white/5 flex items-center justify-between">
                                                    <span>Chase / Major Banks</span>
                                                    <span className="text-zinc-500 group-open/item:rotate-180 transition-transform">▼</span>
                                                </summary>
                                                <div className="px-4 pb-4 text-sm text-zinc-400 pl-4 border-t border-white/5 pt-3">
                                                    <ol className="list-decimal pl-4 space-y-2 marker:text-zinc-600">
                                                        <li>Log in via desktop browser (not app).</li>
                                                        <li>Find <strong>Download account activity</strong>.</li>
                                                        <li>Select <strong>Last 12 months</strong>. Format: <strong>CSV</strong>.</li>
                                                    </ol>
                                                </div>
                                            </details>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-start gap-3 rounded-md bg-blue-500/10 border border-blue-500/20 p-4 text-sm text-blue-200">
                                        <HugeiconsIcon icon={CheckmarkCircle02Icon} className="h-5 w-5 shrink-0 text-blue-400" />
                                        <span>
                                            <strong>Why CSV?</strong> PDFs are dead pixels. They are designed to be unreadable by machines. CSVs are raw data—ammunition.
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2: Download the Project */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute -left-4 -top-8 text-[120px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">02</div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                                        Acquire the Weapon
                                        <span className="text-xs font-mono font-normal text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded">2 MINS</span>
                                    </h3>
                                    <p className="text-zinc-400 mb-6 text-lg">Get the open-source tool that fights back.</p>

                                    <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-6 text-sm text-zinc-400 hover:border-white/10 transition-colors">
                                        <ol className="list-decimal pl-4 space-y-3 marker:text-zinc-500">
                                            <li>Go to <Link href="https://github.com/rohunvora/just-fucking-cancel" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">github.com/rohunvora/just-fucking-cancel</Link></li>
                                            <li>Click the green <strong className="text-green-400">Code</strong> button &gt; <strong>Download ZIP</strong>.</li>
                                            <li>Unzip it. <span className="text-zinc-500 italic">This is your command center.</span></li>
                                            <li>Move the folder to your <strong>Desktop</strong> for easy access.</li>
                                        </ol>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between rounded-md bg-zinc-800 p-4 border border-zinc-700">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded bg-zinc-700 flex items-center justify-center">
                                                <span className="text-xs font-mono">CSV</span>
                                            </div>
                                            <span className="text-sm text-zinc-300">Drag your bank CSV into the project folder now.</span>
                                        </div>
                                        <HugeiconsIcon icon={Upload01Icon} className="h-5 w-5 text-zinc-500" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3: Install Claude Code */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute -left-4 -top-8 text-[120px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">03</div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                                        Deploy the Agent
                                        <span className="text-xs font-mono font-normal text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded">5 MINS</span>
                                    </h3>
                                    <p className="text-zinc-400 mb-6 text-lg">Unleash AI on your bank statement. It reads what you ignore.</p>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <h4 className="text-sm font-medium text-zinc-300">Terminal Command</h4>
                                                <span className="text-xs text-zinc-500">Copy & Paste</span>
                                            </div>
                                            <div className="group relative rounded-lg bg-[#111] border border-zinc-800 p-4 font-mono text-sm text-zinc-300 shadow-2xl hover:border-zinc-700 transition-colors">
                                                {os === 'mac' ? (
                                                    <span className="text-green-400">curl -fsSL https://claude.ai/install.sh | sh</span>
                                                ) : (
                                                    <span className="text-blue-400">irm https://claude.ai/install.ps1 | iex</span>
                                                )}
                                                <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-7 w-auto px-3 text-xs text-zinc-500 hover:text-white hover:bg-white/10" onClick={() => navigator.clipboard.writeText(os === 'mac' ? "curl -fsSL https://claude.ai/install.sh | sh" : "irm https://claude.ai/install.ps1 | iex")}>
                                                    Copy
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Terminal Mock */}
                                        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#1e1e1e] font-mono text-xs shadow-2xl">
                                            <div className="flex items-center gap-2 bg-[#2d2d2d] px-3 py-2 border-b border-black">
                                                <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                                <span className="flex-1 text-center text-[10px] text-zinc-500 opacity-50">Terminal</span>
                                            </div>
                                            <div className="p-4 text-zinc-400 space-y-2">
                                                <div><span className="text-purple-400">you@computer</span> <span className="text-zinc-600">~</span></div>
                                                <div>$ {os === 'mac' ? 'curl -fsSL https://claude.ai/install.sh | sh' : 'irm https://claude.ai/install.ps1 | iex'}</div>
                                                <div className="text-zinc-500 italic">...downloading components...</div>
                                                <div className="text-emerald-400">Successfully installed Claude Code.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 4: Run the Audit */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute -left-4 -top-8 text-[120px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">04</div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                                        The Interrogation
                                        <span className="text-xs font-mono font-normal text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded">AUTO</span>
                                    </h3>
                                    <p className="text-zinc-400 mb-6 text-lg">Find every penny they stole from your focus.</p>

                                    <div className="space-y-6">
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-5 hover:border-white/20 transition-colors">
                                                <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">Command 1</div>
                                                <div className="font-mono text-sm text-white break-all">
                                                    cd {os === 'mac' ? '~/Desktop/just-fucking-cancel-main' : '$HOME\\Desktop\\just-fucking-cancel-main'}
                                                </div>
                                                <div className="mt-2 text-[10px] text-zinc-500">
                                                    {os === 'mac' ? 'Or type `cd ` and drag folder into Terminal' : 'Shift+Right Click folder > Copy as path'}
                                                </div>
                                            </div>
                                            <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-5 hover:border-white/20 transition-colors">
                                                <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">Command 2</div>
                                                <div className="font-mono text-sm text-white">
                                                    claude
                                                </div>
                                                <div className="mt-2 text-[10px] text-zinc-500">
                                                    Login with Claude Pro if asked.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative group/prompt">
                                            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur group-hover/prompt:opacity-40 transition-opacity"></div>
                                            <div className="relative rounded-lg bg-[#111] border border-white/10 p-6">
                                                <div className="text-center">
                                                    <p className="text-sm text-zinc-400 mb-3">Copy this prompt into Claude:</p>
                                                    <div className="font-mono text-lg text-white font-medium select-all">
                                                        "Audit my subscriptions. I have transaction CSVs in this folder."
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-md bg-zinc-900 border border-zinc-800 p-4 text-sm text-zinc-400">
                                            <strong className="text-white block mb-1">What happens next:</strong>
                                            Claude will scan your files, identify recurring drains, and interrogate you about them.
                                            <br /><span className="italic text-zinc-500">"Do you actually use that $12.99 Adobe subscription?"</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 5: Cancel Subscriptions */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute -left-4 -top-8 text-[120px] font-bold leading-none text-white/[0.03] select-none pointer-events-none">05</div>
                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-2 text-white flex items-center gap-3">
                                        Total Recall
                                        <span className="text-xs font-mono font-normal text-amber-400 border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 rounded">ACTION</span>
                                    </h3>
                                    <p className="text-zinc-400 mb-6 text-lg">Terminate the connection. Reclaim your net worth.</p>

                                    <div className="space-y-6">
                                        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 hover:bg-amber-500/10 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-1">
                                                    <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white text-lg">The Kill Command</h4>
                                                    <p className="text-zinc-400 mt-1 mb-4">
                                                        Enable browser tools with <code className="bg-white/10 px-1 py-0.5 rounded text-white">/mcp</code>, then tell Claude:
                                                    </p>
                                                    <div className="font-mono text-amber-200 bg-amber-950/30 p-3 rounded border border-amber-500/20">
                                                        "Help me cancel the subscriptions I marked."
                                                    </div>
                                                    <p className="text-sm text-zinc-500 mt-4">
                                                        Claude will launch a browser, navigate to the cancellation pages, and do the dirty work. You just need to handle the logins.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Troubleshooting Section */}
                <section className="container mx-auto px-6 py-24 border-t border-white/5">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-sm font-bold font-mono text-zinc-500 uppercase tracking-widest mb-8">Mission Support</h2>

                        <div className="grid gap-4 text-left">
                            <details className="group rounded-lg border border-white/5 bg-zinc-900/30 open:bg-zinc-900/80 transition-all">
                                <summary className="cursor-pointer p-4 font-medium text-sm text-zinc-300 hover:text-white flex items-center justify-between">
                                    <span>"claude: command not found"</span>
                                    <span className="opacity-50 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    Restart your terminal. If that fails, re-run the install command from Step 3.
                                </div>
                            </details>
                            <details className="group rounded-lg border border-white/5 bg-zinc-900/30 open:bg-zinc-900/80 transition-all">
                                <summary className="cursor-pointer p-4 font-medium text-sm text-zinc-300 hover:text-white flex items-center justify-between">
                                    <span>Claude can't find my CSV</span>
                                    <span className="opacity-50 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    Ensure the CSV is inside the project folder and the filename ends in .csv (not .xlsx). Tell Claude explicitly: "Look for transactions.csv".
                                </div>
                            </details>
                            <details className="group rounded-lg border border-white/5 bg-zinc-900/30 open:bg-zinc-900/80 transition-all">
                                <summary className="cursor-pointer p-4 font-medium text-sm text-zinc-300 hover:text-white flex items-center justify-between">
                                    <span>Browser automation isn't starting</span>
                                    <span className="opacity-50 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    Ensure Google Chrome is installed. Run <code className="bg-white/10 px-1 py-0.5 rounded">/mcp</code> in Claude to verify the "claude-in-chrome" tool is green. Close other Chrome windows first.
                                </div>
                            </details>
                            <details className="group rounded-lg border border-white/5 bg-zinc-900/30 open:bg-zinc-900/80 transition-all">
                                <summary className="cursor-pointer p-4 font-medium text-sm text-zinc-300 hover:text-white flex items-center justify-between">
                                    <span>Audit taking too long</span>
                                    <span className="opacity-50 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    Large files take longer. If stuck for 10+ minutes, press <code className="bg-white/10 px-1 py-0.5 rounded">Ctrl + C</code> and try with a shorter date range or smaller file.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* Privacy Section */}
                <section id="privacy" className="container mx-auto px-6 py-12 border-t border-white/5">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 text-zinc-500 text-sm mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            Local Data Protocol
                        </div>
                        <p className="text-zinc-600 text-sm">
                            Your financial data (CSVs) never leaves your machine. The audit happens locally. <br />
                            We don't want your data. We want you to have your money.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 py-12 text-center text-sm text-zinc-500">
                <p>Questions? <Link href="https://github.com/rohunvora/just-fucking-cancel/issues" className="text-white underline decoration-white/30 underline-offset-4">Open an issue</Link> on GitHub</p>
                <p className="mt-2 italic">Stop paying for things you don't use.</p>
            </footer>
        </div>
    );
}
