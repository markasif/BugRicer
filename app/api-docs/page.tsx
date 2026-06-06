"use client";

import { useState, useEffect, useRef } from "react";
import {
  Terminal,
  ShieldCheck,
  MessageSquare,
  Layers,
  Copy,
  Check,
  Send,
  ExternalLink,
  X,
  Cpu,
  Zap,
  Globe,
  ZapIcon
} from "lucide-react";
import Navbar from "../components/navbar";
import Faq from "../components/faq";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-top";

const PythonLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 110 110" fill="currentColor">
    <path d="M55.15 2c-14.4 0-13.4 6.22-13.4 6.22l.02 6.45h18.15c2.45 0 4.47 2 4.47 4.47v18.14c0 2.47-2 4.47-4.47 4.47H41.8c-2.46 0-4.47-2-4.47-4.47v-8.8c0-2.45-2-4.47-4.47-4.47H18.2C12 34 12 37.7 12 43.9v18.1c0 6.2 3.8 6.2 9.5 6.2h6.4v-6.4c0-2.47 2-4.47 4.47-4.47h18.14c2.47 0 4.47 2 4.47 4.47v18.14c0 2.47-2 4.47-4.47 4.47H32.43c-2.47 0-4.47-2-4.47-4.47v-6.45h-6.45c-5.73 0-9.52 0-9.52-5.73l.02-6.46H30.2c2.45 0 4.47-2 4.47-4.47V41.8c0-2.46-2-4.47-4.47-4.47H12.03V32.4c0-2.47 2-4.47 4.47-4.47h6.45v6.45c0 5.73 3.8 5.73 9.5 5.73h18.16v-.02z" />
    <path d="M54.85 108c14.4 0 13.4-6.22 13.4-6.22l-.02-6.45H50.08c-2.45 0-4.47-2-4.47-4.47v-18.14c0-2.47 2-4.47 4.47-4.47h18.14c2.46 0 4.47 2 4.47 4.47v8.8c0 2.45 2 4.47 4.47 4.47h10.6c6.2 0 6.2-3.7 6.2-9.9v-18.1c0-6.2-3.8-6.2-9.5-6.2h-6.4v6.4c0 2.47-2 4.47-4.47 4.47H65.34c-2.47 0-4.47-2-4.47-4.47V32.43c0-2.47 2-4.47 4.47-4.47h18.14c2.47 0 4.47 2 4.47 4.47v6.45h6.45c5.73 0 9.52 0 9.52 5.73l-.02 6.46H79.8c-2.45 0-4.47 2-4.47 4.47V68.2c0 2.46 2 4.47 4.47 4.47h18.17v9.43c0 2.47-2 4.47-4.47 4.47h-6.45v-6.45c0-5.73-3.8-5.73-9.5-5.73H53.86v.02z" />
  </svg>
);

const JavaScriptLogo = ({ className }: { className?: string }) => (
  <div className={`w-4 h-4 rounded bg-[#F7DF1E] text-black font-bold flex items-center justify-center text-[9px] select-none shrink-0 ${className}`}>
    JS
  </div>
);

const PHPLogo = ({ className }: { className?: string }) => (
  <div className={`w-6 h-3.5 rounded-full bg-[#4F5B93] text-white font-bold flex items-center justify-center text-[7px] uppercase select-none shrink-0 ${className}`}>
    php
  </div>
);

const GoLogo = ({ className }: { className?: string }) => (
  <div className={`w-6 h-3.5 rounded bg-[#00ADD8] text-white font-bold flex items-center justify-center text-[8px] uppercase select-none shrink-0 ${className}`}>
    go
  </div>
);

const RubyLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#CC342D">
    <path d="M6 2h12l6 6-12 14L0 8z" />
  </svg>
);

const JavaLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 19c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-6H2v6zm17-9h-1V7.5c0-1.4-1.1-2.5-2.5-2.5H6.5C5.1 5 4 6.1 4 7.5V10H3c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h13c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zM8 2c-.6 0-1 .4-1 1v1h2V3c0-.6-.4-1-1-1z" />
  </svg>
);

type Language = "python" | "javascript" | "PHP" | "Go" | "Ruby" | "Java";

const LanguageLogos: Record<Language, React.ComponentType<{ className?: string }>> = {
  python: PythonLogo,
  javascript: JavaScriptLogo,
  PHP: PHPLogo,
  Go: GoLogo,
  Ruby: RubyLogo,
  Java: JavaLogo
};

const langLabels: Record<Language, string> = {
  python: "Python",
  javascript: "JavaScript",
  PHP: "PHP",
  Go: "Go",
  Ruby: "Ruby",
  Java: "Java"
};

const codeSnippets: Record<Language, string> = {
  python: `import requests

url = "https://notifyapi.bugricer.com/uapp/api/send"
payload = {
    "apikey": "YOUR_API_KEY",
    "number": "918086995559",
    "msg": "Hello from BugRicer Notify"
}

response = requests.post(url, data=payload)
print(response.json())`,
  javascript: `const url = "https://notifyapi.bugricer.com/uapp/api/send";
const payload = {
  apikey: "YOUR_API_KEY",
  number: "918086995559",
  msg: "Hello from BugRicer Notify"
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(res => res.json())
  .then(data => console.log(data));`,
  PHP: `<?php
$url = "https://notifyapi.bugricer.com/uapp/api/send";
$payload = [
    "apikey" => "YOUR_API_KEY",
    "number" => "918086995559",
    "msg" => "Hello from BugRicer Notify"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
$response = curl_exec($ch);
curl_close($ch);
echo $response;
?>`,
  Go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "https://notifyapi.bugricer.com/uapp/api/send"
    payload := map[string]string{
        "apikey": "YOUR_API_KEY",
        "number": "918086995559",
        "msg":    "Hello from BugRicer Notify",
    }
    jsonPayload, _ := json.Marshal(payload)

    resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonPayload))
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()

    fmt.Println("Status:", resp.Status)
}`,
  Ruby: `require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://notifyapi.bugricer.com/uapp/api/send")
response = Net::HTTP.post_form(uri, {
  "apikey" => "YOUR_API_KEY",
  "number" => "918086995559",
  "msg" => "Hello from BugRicer Notify"
})
puts response.body`,
  Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws Exception {
        var client = HttpClient.newHttpClient();
        var request = HttpRequest.newBuilder()
            .uri(URI.create("https://notifyapi.bugricer.com/uapp/api/send"))
            .header("Content-Type", "application/x-www-form-urlencoded")
            .POST(HttpRequest.BodyPublishers.ofString(
                "apikey=YOUR_API_KEY&number=918086995559&msg=Hello+from+BugRicer+Notify"
            ))
            .build();
        var response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`
};

export default function ApiDocsPage() {
  const [activeLang, setActiveLang] = useState<Language>("python");
  const [copiedText, setCopiedText] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCopyUrl = (url: string, key: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(key);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-blue-600/30 selection:text-blue-200 transition-all duration-300"
    >
      <Navbar />

      <main className="flex-1 w-full relative">
        <div className="absolute top-10 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-32 pb-8 md:pb-16">
          <div className="flex flex-col items-start gap-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 font-bold text-[10px] sm:text-xs uppercase select-none">
              <Cpu className="w-3.5 h-3.5" />
              <span>Developer Hub</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-zinc-900 dark:text-white">
              API <span className="text-blue-500">Documentation</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Connect your application to BugRicer Notify and start sending automated WhatsApp messages in minutes. Our REST API is built for speed, reliability, and ease of use.
            </p>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
              <div className="lg:col-span-7 space-y-16">
                <section id="authentication">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        
                    <ShieldCheck className="w-6 h-6 text-blue-500" />
  
                  Authentication
                </h2>
                <div className="bg-white dark:bg-zinc-900/50 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <p className="text-gray-600 dark:text-zinc-400 mb-6 font-medium">
                    To authenticate your requests, you must include your API key in the request body. You can generate and manage your API keys from the{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                      Developer Dashboard
                    </a>
                    .
                  </p>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">
                        Header / Parameter
                      </p>
                      <code className="font-mono font-bold text-gray-900 dark:text-zinc-200 text-xs sm:text-sm">
                        apikey: <span className="text-zinc-900 dark:text-white font-semibold">&lt;YOUR_API_KEY&gt;</span>
                      </code>
                    </div>
                  </div>
                </div>
              </section>

              <section id="send-message" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">

                  <Globe className="w-6 h-6 text-blue-600" />

                  Send Message
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800">
                    POST
                  </span>
                  <code className="text-sm font-mono text-gray-500 dark:text-zinc-400 break-all">
                    https://notifyapi.bugricer.com/uapp/api/send
                  </code>
                </div>

                <div className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-gray-50/50 dark:bg-zinc-950/50 border-b border-gray-100 dark:border-zinc-800">
                        <tr>
                          <th className="p-4 text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                            Parameter
                          </th>
                          <th className="p-4 text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                            Type
                          </th>
                          <th className="p-4 text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                            Required
                          </th>
                          <th className="p-4 text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-zinc-800 text-xs sm:text-sm font-medium">
                        <tr className="group hover:bg-gray-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                          <td className="p-4 font-mono font-bold text-blue-500">apikey</td>
                          <td className="p-4 text-zinc-500 dark:text-zinc-400">String</td>
                          <td className="p-4">
                            <span className="text-[10px] font-black text-red-500 tracking-wider">
                              REQUIRED
                            </span>
                          </td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-300 space-y-1">
                            <div>Your unique API key generated from the dashboard.</div>
                            <div className="font-mono text-2xs text-zinc-400 dark:text-zinc-500 select-none">
                              EXAMPLE: b_sec_...........
                            </div>
                          </td>
                        </tr>
                        <tr className="group hover:bg-gray-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                          <td className="p-4 font-mono font-bold text-blue-500">number</td>
                          <td className="p-4 text-zinc-500 dark:text-zinc-400">String</td>
                          <td className="p-4">
                            <span className="text-[10px] font-black text-red-500 tracking-wider">
                              REQUIRED
                            </span>
                          </td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-300 space-y-1">
                            <div>Recipient WhatsApp number(s) with country code (no +). Comma separated for bulk.</div>
                            <div className="font-mono text-2xs text-zinc-400 dark:text-zinc-500 select-none">
                              EXAMPLE: 918086995559
                            </div>
                          </td>
                        </tr>
                        <tr className="group hover:bg-gray-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                          <td className="p-4 font-mono font-bold text-blue-500">msg</td>
                          <td className="p-4 text-zinc-500 dark:text-zinc-400">String</td>
                          <td className="p-4">
                            <span className="text-[10px] font-black text-red-500 tracking-wider">
                              REQUIRED
                            </span>
                          </td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-300 space-y-1">
                            <div>The message content to be sent.</div>
                            <div className="font-mono text-2xs text-zinc-400 dark:text-zinc-500 select-none">
                              EXAMPLE: Hello from BugRicer API
                            </div>
                          </td>
                        </tr>
                        <tr className="group hover:bg-gray-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                          <td className="p-4 font-mono font-bold text-blue-500 space-y-1">
                            <div>media</div>
                            <span className="inline-block text-[8px] font-black bg-amber-500/10 text-amber-500 border border-amber-500/25 px-1.5 py-0.5 rounded select-none uppercase">
                              Coming Soon
                            </span>
                          </td>
                          <td className="p-4 text-zinc-500 dark:text-zinc-400">File</td>
                          <td className="p-4 text-zinc-400 dark:text-zinc-500 select-none">OPTIONAL</td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-300 space-y-1">
                            <div>Optional image, video, or PDF file (multipart/form-data only).</div>
                            <div className="font-mono text-2xs text-zinc-400 dark:text-zinc-500 select-none">
                              EXAMPLE: -
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section id="base-urls" className="space-y-6">
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">

                    <ZapIcon className="w-6 h-6 text-blue-500" />
           
                  API URL Construction
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div
                    onClick={() => handleCopyUrl("https://notifyapi.bugricer.com/uapp/api/send?apikey=YOUR_API_KEY&number=918086995559&msg=Hello", "single")}
                    className="group p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">
                        Single Recipient
                      </span>
                      {copiedUrl === "single" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                      )}
                    </div>
                    <div className="overflow-x-auto scrollbar-none w-full">
                      <code className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 whitespace-nowrap leading-loose font-mono block">
                        https://notifyapi.bugricer.com/uapp/api/send?apikey=YOUR_API_KEY&number=918086995559&msg=Hello
                      </code>
                    </div>
                  </div>

                  <div
                    onClick={() => handleCopyUrl("https://notifyapi.bugricer.com/uapp/api/send?apikey=YOUR_API_KEY&number=918086995559,918765432101&msg=Batch", "bulk")}
                    className="group p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">
                        Bulk Recipients
                      </span>
                      {copiedUrl === "bulk" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                      )}
                    </div>
                    <div className="overflow-x-auto scrollbar-none w-full">
                      <code className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 whitespace-nowrap leading-loose font-mono block">
                        https://notifyapi.bugricer.com/uapp/api/send?apikey=YOUR_API_KEY&number=918086995559,918765432101&msg=Batch
                      </code>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                <div className="bg-zinc-950 rounded-[32px] overflow-hidden shadow-2xl shadow-blue-500/10 border border-zinc-800">
                  <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5C5F]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FAC800]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#34C759]" />
                      </div>
                      <span className="ml-4 flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        <Terminal className="w-3 h-3" />
                        Code Playground
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-all active:scale-95"
                    >
                      {copiedText ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 border-b border-zinc-800 px-6 py-3 bg-zinc-900/40 overflow-x-auto scrollbar-none select-none">
                    {(["python", "javascript", "PHP", "Go", "Ruby", "Java"] as Language[]).map(
                      (lang) => {
                        const Icon = LanguageLogos[lang];
                        const isActive = activeLang === lang;
                        return (
                          <button
                            key={lang}
                            onClick={() => setActiveLang(lang)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all whitespace-nowrap ${
                              isActive
                                ? "bg-zinc-800 text-white shadow-lg"
                                : "text-zinc-500 hover:text-zinc-300"
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 shrink-0 transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`} />
                            <span>{langLabels[lang]}</span>
                          </button>
                        );
                      }
                    )}
                  </div>

                  <div className="p-6 font-mono text-xs sm:text-sm bg-transparent max-h-[350px] overflow-y-auto">
                    <pre className="text-zinc-300 leading-relaxed">
                      <code>{codeSnippets[activeLang]}</code>
                    </pre>
                  </div>
                </div>

                <div className="p-8 rounded-[32px] bg-blue-600 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml">
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">Pro Tip</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-6 relative z-10">
                    Integrate with our Webhooks to receive real-time delivery status updates for every message sent.
                  </p>
                  <div>
                    <a
                      href="mailto:info@codoai.in"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all backdrop-blur-md border border-white/20 relative z-10 active:scale-95"
                    >
                      <span>Get Started</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 md:mt-32 md:pt-16 border-t border-gray-100 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Need Help?
                </h3>
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                  Our technical engineering team is ready to help you with API integration and custom automation flows.
                </p>
                <a
                  href="mailto:info@codoai.in"
                  className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold hover:gap-3 transition-all"
                >
                  <span>Contact Support</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Rate Limits
                </h3>
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                  Message frequency is determined by your WhatsApp account health and plan limits. Default: 60 req/min.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Security
                </h3>
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                  Always keep your API key secure. If your key is compromised, rotate it immediately from the dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="faq" className="w-full py-12  bg-white dark:bg-zinc-950">
        <Faq />
      </section>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
