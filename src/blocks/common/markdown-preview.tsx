// components/MarkdownPreview.tsx
"use client";

import { useMemo } from "react";
import MarkdownIt from "markdown-it";
import "github-markdown-css/github-markdown-light.css";
import "./markdown.css";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
});

interface MarkdownPreviewProps {
  content: string;
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const html = useMemo(() => {
    return content ? md.render(content) : "";
  }, [content]);

  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
