import { useRef } from "react";
import Head from 'next/head';
import Script from 'next/script';
import Editor from '@monaco-editor/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const editorRef = useRef(null);

  const editorOnMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const format = () => {
    editorRef.current.getAction('editor.action.formatDocument').run();
  };

  return (
    <>
      <Script strategy="lazyOnload" src={"https://www.googletagmanager.com/gtag/js?id=G-W9MNLCY6YN"} />
      <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W9MNLCY6YN');
          `}
      </Script>
      <div className={styles.container}>
        <Head>
          <title>JSON Beautify - Format your JSON</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Editor
          className={styles.editor}
          height="90vh"
          defaultLanguage="json"
          defaultValue='{"Paste your JSON here": "Click the beautify button to format your JSON"}'
          onMount={editorOnMount}
        />
        <button className={styles.button} onClick={format}>Beautify</button>
      </div>
    </>
  )
}
