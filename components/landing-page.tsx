'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight01Icon,
    CheckmarkCircle02Icon,
    Cancel01Icon,
    GithubIcon,
    Upload01Icon
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
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-4xl font-sans text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                    >
                        Just Fucking Cancel.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed"
                    >
                        Find all your subscriptions. Claude will cancel them for you.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mx-auto mt-4 text-sm text-zinc-500 italic"
                    >
                        This guide is for people with zero coding experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="h-12 min-w-[200px] rounded-full bg-white px-8 text-base text-black hover:bg-zinc-200 transition-all duration-300" asChild>
                            <Link href="#how-it-works">
                                Get Started
                                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </section>

                {/* Detailed Steps Section */}
                <section id="how-it-works" className="container mx-auto px-6 py-24 border-t border-white/10">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold font-sans mb-4">How it works</h2>
                            <p className="text-zinc-400">Five simple steps to reclaim your money. No coding skills required.</p>

                            {/* OS Toggle */}
                            <div className="mt-8 inline-flex rounded-lg border border-white/10 bg-white/5 p-1">
                                <button
                                    onClick={() => setOs('mac')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                                        os === 'mac' ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    Mac
                                </button>
                                <button
                                    onClick={() => setOs('win')}
                                    className={cn(
                                        "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                                        os === 'win' ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    Windows
                                </button>
                            </div>
                        </div>

                        <div className="space-y-16">
                            {/* Step 1: Export Your Transactions */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold border border-white/20">1</div>
                                <div className="absolute left-4 top-8 -bottom-16 w-px bg-white/10 md:left-4"></div>

                                <h3 className="text-xl font-bold mb-2">Export Your Transactions</h3>
                                <p className="text-zinc-400 mb-4 text-sm">3-5 min</p>
                                <p className="text-zinc-400 mb-4 text-sm">Get a CSV file from your bank. Most banks have this in account settings.</p>

                                <div className="space-y-3">
                                    <details className="group rounded-lg border border-white/10 bg-white/5">
                                        <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">Apple Card</summary>
                                        <div className="px-4 pb-4 text-sm text-zinc-400 pl-8">
                                            <ol className="list-decimal space-y-2">
                                                <li>Open <strong>Wallet</strong> on your iPhone</li>
                                                <li>Tap <strong>Apple Card</strong></li>
                                                <li>Scroll down → tap <strong>Card Balance</strong></li>
                                                <li>Tap <strong>...</strong> → <strong>Export Transactions</strong></li>
                                                <li>Choose <strong>Last 12 Months</strong> and <strong>CSV</strong></li>
                                                <li>AirDrop or email to your computer</li>
                                            </ol>
                                        </div>
                                    </details>
                                    <details className="group rounded-lg border border-white/10 bg-white/5">
                                        <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">Chase</summary>
                                        <div className="px-4 pb-4 text-sm text-zinc-400 pl-8">
                                            <ol className="list-decimal space-y-2">
                                                <li>Log in at <Link href="https://chase.com" className="text-white underline decoration-white/30 underline-offset-4">chase.com</Link></li>
                                                <li>Click your account</li>
                                                <li>Find <strong>Download account activity</strong></li>
                                                <li>Select last 12 months, CSV format</li>
                                            </ol>
                                        </div>
                                    </details>
                                    <details className="group rounded-lg border border-white/10 bg-white/5">
                                        <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">Other banks</summary>
                                        <div className="px-4 pb-4 text-sm text-zinc-400">
                                            <p>Look for "Export," "Download," or "Download transactions" in your account settings. Choose <strong>CSV</strong> (not PDF or Excel).</p>
                                            <p className="mt-2">Can't find it? Search "[your bank] export transactions CSV"</p>
                                        </div>
                                    </details>
                                </div>

                                <div className="mt-4 rounded-md bg-emerald-500/10 border-l-4 border-emerald-500/50 p-3 text-sm text-emerald-200">
                                    <strong>Save it somewhere easy to find</strong> — you'll move it into the project folder in step 2.
                                </div>
                            </div>

                            {/* Step 2: Download the Project */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold border border-white/20">2</div>
                                <div className="absolute left-4 top-8 -bottom-16 w-px bg-white/10 md:left-4"></div>

                                <h3 className="text-xl font-bold mb-2">Download the Project</h3>
                                <p className="text-zinc-400 mb-4 text-sm">2 min</p>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-zinc-400">
                                    <ol className="list-decimal pl-4 space-y-2">
                                        <li>Go to <Link href="https://github.com/rohunvora/just-fucking-cancel" className="text-white underline decoration-white/30 underline-offset-4">github.com/rohunvora/just-fucking-cancel</Link></li>
                                        <li>Click the green <strong>Code</strong> button</li>
                                        <li>Click <strong>Download ZIP</strong></li>
                                        <li>Unzip the file {os === 'mac' ? '(double-click on Mac)' : '(right-click → Extract on Windows)'}</li>
                                        <li>Move the folder to your Desktop</li>
                                    </ol>
                                </div>
                                <div className="mt-4 rounded-md bg-yellow-500/10 border-l-4 border-yellow-500/50 p-3 text-sm text-yellow-200">
                                    <strong>Move your CSV into this folder</strong><br />
                                    Drag the CSV from step 1 into the <code className="bg-black/30 px-1 py-0.5 rounded">just-fucking-cancel-main</code> folder.
                                </div>
                            </div>

                            {/* Step 3: Install Claude Code */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold border border-white/20">3</div>
                                <div className="absolute left-4 top-8 -bottom-16 w-px bg-white/10 md:left-4"></div>

                                <h3 className="text-xl font-bold mb-2">Install Claude Code</h3>
                                <p className="text-zinc-400 mb-4 text-sm">5 min</p>
                                <p className="text-zinc-400 mb-4 text-sm">Claude Code is a free command-line tool from Anthropic.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Open your terminal</h4>
                                        <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-sm text-zinc-400">
                                            {os === 'mac' ? (
                                                <ol className="list-decimal pl-4 space-y-1">
                                                    <li>Press <code className="bg-black/30 px-1 py-0.5 rounded">Cmd + Space</code></li>
                                                    <li>Type <strong>Terminal</strong> and press Enter</li>
                                                </ol>
                                            ) : (
                                                <ol className="list-decimal pl-4 space-y-1">
                                                    <li>Press <code className="bg-black/30 px-1 py-0.5 rounded">Win + X</code></li>
                                                    <li>Click <strong>Windows PowerShell</strong></li>
                                                </ol>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Run the installer</h4>
                                        <p className="text-zinc-500 text-sm mb-2">Paste this command and press Enter:</p>
                                        <div className="group relative rounded-lg bg-[#1e1e1e] border border-white/10 p-3 font-mono text-sm text-zinc-300">
                                            {os === 'mac' ? (
                                                "curl -fsSL https://claude.ai/install.sh | sh"
                                            ) : (
                                                "irm https://claude.ai/install.ps1 | iex"
                                            )}
                                            <Button size="sm" variant="ghost" className="absolute top-1.5 right-1.5 h-6 w-auto px-2 text-[10px] text-zinc-500 hover:text-white hover:bg-white/10" onClick={() => navigator.clipboard.writeText(os === 'mac' ? "curl -fsSL https://claude.ai/install.sh | sh" : "irm https://claude.ai/install.ps1 | iex")}>
                                                Copy
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Terminal Mock */}
                                <div className="mt-4 rounded-lg overflow-hidden border border-white/10 bg-[#252525] font-mono text-xs">
                                    <div className="flex items-center gap-2 bg-[#3c3c3c] px-3 py-2">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                        <span className="flex-1 text-center text-[10px] text-zinc-500">Terminal</span>
                                    </div>
                                    <div className="p-3 text-zinc-400 space-y-1">
                                        <div><span className="text-blue-400">you@mac</span> <span className="text-green-400">~</span></div>
                                        <div>$ {os === 'mac' ? 'curl -fsSL https://claude.ai/install.sh | sh' : 'irm https://claude.ai/install.ps1 | iex'}</div>
                                        <div className="text-zinc-500 pt-1">Installing Claude Code...</div>
                                        <div className="text-green-400">Done! Run 'claude' to get started.</div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4: Run the Audit */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold border border-white/20">4</div>
                                <div className="absolute left-4 top-8 -bottom-16 w-px bg-white/10 md:left-4"></div>

                                <h3 className="text-xl font-bold mb-2">Run the Audit</h3>
                                <p className="text-zinc-400 mb-4 text-sm">5-10 min</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Navigate to the project</h4>
                                        <div className="rounded-lg bg-[#1e1e1e] border border-white/10 p-3 font-mono text-sm text-zinc-300">
                                            {os === 'mac' ? (
                                                "cd ~/Desktop/just-fucking-cancel-main"
                                            ) : (
                                                "cd $HOME\\Desktop\\just-fucking-cancel-main"
                                            )}
                                        </div>
                                        <div className="mt-2 rounded-md bg-emerald-500/10 border-l-4 border-emerald-500/50 p-2 text-xs text-emerald-200">
                                            {os === 'mac' ? (
                                                <><strong>Shortcut:</strong> Type <code className="bg-black/30 px-1 py-0.5 rounded">cd </code> then drag the folder into Terminal.</>
                                            ) : (
                                                <><strong>Shortcut:</strong> Shift + right-click folder → Copy as path, then <code className="bg-black/30 px-1 py-0.5 rounded">cd </code> and paste.</>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Start Claude Code</h4>
                                        <div className="rounded-lg bg-[#1e1e1e] border border-white/10 p-3 font-mono text-sm text-zinc-300">
                                            claude
                                        </div>
                                        <p className="mt-2 text-sm text-zinc-500"><strong>First time?</strong> A browser opens for sign-in. Use your Claude Pro credentials, then return to the terminal.</p>
                                    </div>

                                    {/* Terminal Mock showing Claude Code */}
                                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#252525] font-mono text-xs">
                                        <div className="flex items-center gap-2 bg-[#3c3c3c] px-3 py-2">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                            <span className="flex-1 text-center text-[10px] text-zinc-500">Terminal — claude</span>
                                        </div>
                                        <div className="p-3 text-zinc-400 space-y-2">
                                            <div><span className="text-blue-400">you@mac</span> <span className="text-green-400">~/Desktop/just-fucking-cancel-main</span></div>
                                            <div>$ claude</div>
                                            <div className="bg-[#1e1e1e] rounded p-2 mt-2 space-y-1">
                                                <div className="text-orange-400 font-bold">Claude Code</div>
                                                <div className="text-zinc-500">v1.0.23</div>
                                                <div className="text-blue-400">Type your message or /help for commands</div>
                                            </div>
                                            <div className="pt-2"><span className="text-orange-400">&gt;</span> Audit my subscriptions. I have transaction CSVs in this folder.</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Run the audit</h4>
                                        <p className="text-sm text-zinc-500 mb-2">Type this:</p>
                                        <div className="rounded-lg bg-[#1e1e1e] border border-white/10 p-3 font-mono text-sm text-zinc-300">
                                            Audit my subscriptions. I have transaction CSVs in this folder.
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">What happens</h4>
                                        <ul className="space-y-2 text-sm text-zinc-400">
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Claude reads your transaction files</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Finds recurring charges (Netflix, Spotify, that gym...)</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Asks you questions: "Do you still use Hulu?"</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> You answer honestly—this is where you find forgotten subscriptions</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Generates an HTML report you can open in your browser</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">When you're done</h4>
                                        <ul className="text-sm text-zinc-400 space-y-1 list-disc pl-4">
                                            <li>Type <code className="bg-white/10 px-1 py-0.5 rounded">/exit</code> to quit</li>
                                            <li>Or press <code className="bg-white/10 px-1 py-0.5 rounded">Ctrl + C</code></li>
                                            <li>Or close the window</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5: Cancel Subscriptions */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold border border-white/20">5</div>

                                <h3 className="text-xl font-bold mb-2">Cancel Subscriptions</h3>
                                <p className="text-zinc-400 mb-4 text-sm">varies</p>
                                <p className="text-zinc-400 mb-4 text-sm">Claude can open Chrome and cancel subscriptions for you.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Enable browser control</h4>
                                        <p className="text-sm text-zinc-500 mb-2">In Claude Code, type:</p>
                                        <div className="rounded-lg bg-[#1e1e1e] border border-white/10 p-3 font-mono text-sm text-zinc-300">
                                            /mcp
                                        </div>
                                        <p className="text-sm text-zinc-500 mt-2">Make sure browser tools show as <strong className="text-white">enabled</strong>:</p>
                                    </div>

                                    {/* MCP Terminal Mock */}
                                    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#252525] font-mono text-xs">
                                        <div className="flex items-center gap-2 bg-[#3c3c3c] px-3 py-2">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                            <span className="flex-1 text-center text-[10px] text-zinc-500">Terminal — claude</span>
                                        </div>
                                        <div className="p-3 text-zinc-400 space-y-2">
                                            <div className="text-orange-400 font-bold border-b border-white/10 pb-2">MCP Servers</div>
                                            <div className="text-blue-400 text-[11px]">Available Servers</div>
                                            <div className="bg-[#1e1e1e] rounded p-2 flex items-center justify-between">
                                                <div>
                                                    <div className="text-white font-medium">claude-in-chrome</div>
                                                    <div className="text-zinc-500 text-[10px]">Browser automation</div>
                                                    <div className="text-green-400 text-[10px]">23 tools available</div>
                                                </div>
                                                <span className="bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Enabled</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Start canceling</h4>
                                        <div className="rounded-lg bg-[#1e1e1e] border border-white/10 p-3 font-mono text-sm text-zinc-300">
                                            Help me cancel the subscriptions I marked for cancellation.
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">What you'll see</h4>
                                        <ul className="space-y-2 text-sm text-zinc-400">
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Chrome opens automatically</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Claude navigates to Netflix (or wherever)</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Claude clicks through the cancellation flow</li>
                                            <li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Claude asks for your confirmation before final steps</li>
                                        </ul>
                                    </div>

                                    {/* Browser Mock */}
                                    <div className="rounded-lg overflow-hidden border border-zinc-300 bg-zinc-100">
                                        <div className="flex items-center gap-2 bg-zinc-200 px-3 py-2">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                            <span className="flex-1 text-center text-[10px] text-zinc-500">Netflix — Account Settings</span>
                                        </div>
                                        <div className="p-4 bg-white text-zinc-800 text-sm">
                                            <h4 className="text-lg font-semibold mb-0.5">Account</h4>
                                            <p className="text-zinc-500 text-xs mb-3">Membership Details</p>
                                            <div className="bg-zinc-100 rounded-lg p-3 mb-2">
                                                <strong>Standard plan</strong>
                                                <p className="text-zinc-500 text-xs">Next payment: January 7, 2026</p>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                                                <span>Manage membership</span>
                                                <span className="text-zinc-400">&gt;</span>
                                            </div>
                                            <div className="mt-3 inline-block bg-amber-50 rounded-full px-3 py-1 text-xs text-amber-600">
                                                <span>⚡</span> Claude is active in this tab
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium mb-2">Login prompts</h4>
                                        <p className="text-sm text-zinc-400">When sites ask you to log in, do it yourself—Claude doesn't know your passwords. Just say "continue" or "I'm logged in" when ready.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Troubleshooting Section */}
                <section className="container mx-auto px-6 py-16 border-t border-white/10">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>

                        <div className="space-y-3">
                            <details className="group rounded-lg border border-white/10 bg-white/5">
                                <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">"claude: command not found"</summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>Close and reopen Terminal/PowerShell</li>
                                        <li>Try running the installer again</li>
                                    </ul>
                                </div>
                            </details>
                            <details className="group rounded-lg border border-white/10 bg-white/5">
                                <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">Claude can't find my CSV</summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>Make sure the CSV is inside the project folder</li>
                                        <li>Make sure it's a <code className="bg-white/10 px-1 py-0.5 rounded">.csv</code> file, not <code className="bg-white/10 px-1 py-0.5 rounded">.xlsx</code> or <code className="bg-white/10 px-1 py-0.5 rounded">.pdf</code></li>
                                        <li>Tell Claude the exact filename: "Look for transactions.csv"</li>
                                    </ul>
                                </div>
                            </details>
                            <details className="group rounded-lg border border-white/10 bg-white/5">
                                <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">Browser automation not working</summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>Make sure <strong>Google Chrome</strong> is installed</li>
                                        <li>Close all Chrome windows, then let Claude open it</li>
                                        <li>Run <code className="bg-white/10 px-1 py-0.5 rounded">/mcp</code> and check browser tools are enabled</li>
                                    </ul>
                                </div>
                            </details>
                            <details className="group rounded-lg border border-white/10 bg-white/5">
                                <summary className="cursor-pointer p-4 font-medium text-sm transition-colors group-hover:bg-white/5">Audit taking too long</summary>
                                <div className="px-4 pb-4 text-sm text-zinc-400">
                                    <p>Large files take longer. If stuck for 10+ minutes, press <code className="bg-white/10 px-1 py-0.5 rounded">Ctrl + C</code> and try with a shorter date range.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* Privacy Section */}
                <section id="privacy" className="container mx-auto px-6 py-16 border-t border-white/10">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-2xl font-bold mb-6">Privacy</h2>

                        <ul className="text-zinc-400 space-y-2 list-disc pl-4 mb-4">
                            <li>CSV files never leave your machine</li>
                            <li>The audit report is a local HTML file</li>
                            <li>Nothing is uploaded or shared with anyone</li>
                        </ul>
                        <p className="text-zinc-400">Only your conversation with Claude goes to Anthropic—not your raw transaction data.</p>
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
