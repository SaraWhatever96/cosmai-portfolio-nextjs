"use client";

import Container from "@/components/Container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-50">
      <Container className="py-6">
        <div className="flex gap-4">
          <div className="flex flex-1">
            <Link href="/" className="p-1.5 text-base font-bold text-slate-200">
              Sara Cosmai
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <Link
              href="/about"
              className="p-1.5 text-sm font-semibold text-slate-300"
            >
              About
            </Link>
            <a
              href="https://www.saracosmai.com/cv-sara-cosmai.pdf"
              target="_blank"
              className="p-1.5 text-sm font-semibold text-slate-300"
            >
              Resume
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
