'use client';

import React, { useState } from 'react';

export function TerminalTabs() {
  const [activeTab, setActiveTab] = useState<'stack' | 'arch' | 'status'>('stack');

  return (
    <div className="md:col-span-7 rounded-2xl bg-zinc-950 text-zinc-100 border border-zinc-800 shadow-md overflow-hidden flex flex-col">
      {/* Terminal Window Header */}
      <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
          <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
          <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
          <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">sebas@fullstack-box:~</span>
        </div>
        {/* Tabs */}
        <div className="flex items-center gap-1" role="tablist" aria-label="Terminal panels">
          {(['stack', 'arch', 'status'] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              id={`terminal-tab-${tab}`}
              aria-selected={activeTab === tab}
              aria-controls={`terminal-panel-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                activeTab === tab
                  ? 'bg-zinc-800 text-accent font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              {tab === 'stack' ? 'stack.ts' : tab === 'arch' ? 'arch.md' : 'status.json'}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[170px] flex items-center">
        {activeTab === 'stack' && (
          <div
            role="tabpanel"
            id="terminal-panel-stack"
            aria-labelledby="terminal-tab-stack"
            className="space-y-1 text-zinc-300"
          >
            <p className="text-zinc-500">{'// Modern Full Stack capabilities'}</p>
            <p>
              <span className="text-accent">const</span> <span className="text-zinc-100">stack</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">frontend:</span> [<span className="text-zinc-200">&quot;Next.js 15&quot;</span>, <span className="text-zinc-200">&quot;React 19&quot;</span>, <span className="text-zinc-200">&quot;TanStack Query&quot;</span>, <span className="text-zinc-200">&quot;Radix UI&quot;</span>],
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">backend:</span> [<span className="text-zinc-200">&quot;Node.js&quot;</span>, <span className="text-zinc-200">&quot;Spec-Driven&quot;</span>, <span className="text-zinc-200">&quot;Zod&quot;</span>, <span className="text-zinc-200">&quot;MySQL&quot;</span>],
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">testing_and_ai:</span> [<span className="text-accent">&quot;Jest/Supertest (100% cov)&quot;</span>, <span className="text-accent">&quot;MCP Servers&quot;</span>]
            </p>
            <p>&#125;;</p>
          </div>
        )}

        {activeTab === 'arch' && (
          <div
            role="tabpanel"
            id="terminal-panel-arch"
            aria-labelledby="terminal-tab-arch"
            className="space-y-1.5 text-zinc-300"
          >
            <p className="text-accent font-semibold">## Engineering Principles</p>
            <p className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span>Spec-Driven Development (OpenAPI contracts + runtime Zod)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span>Clean Architecture (3 Layers: Controller, Service, Repository)</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span>100% Test Coverage on critical endpoints (Jest &amp; Supertest)</span>
            </p>
          </div>
        )}

        {activeTab === 'status' && (
          <div
            role="tabpanel"
            id="terminal-panel-status"
            aria-labelledby="terminal-tab-status"
            className="space-y-1 text-zinc-300"
          >
            <p>&#123;</p>
            <p className="pl-4">
              <span className="text-zinc-400">&quot;role&quot;</span>: <span className="text-accent">&quot;Full Stack Developer / HealthTech&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">&quot;availability&quot;</span>: <span className="text-accent">&quot;Immediate / Full-time Remote&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-zinc-400">&quot;languages&quot;</span>: [<span className="text-zinc-200">&quot;Spanish (Native)&quot;</span>, <span className="text-zinc-200">&quot;English (B2/C1 Technical)&quot;</span>]
            </p>
            <p>&#125;</p>
          </div>
        )}
      </div>
    </div>
  );
}
