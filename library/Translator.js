import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
export default function Translator() {
  const { isFallback, events } = useRouter()
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element')
  }
  useEffect(() => {
    const id = 'google-translate-script'
    const addScript = () => {
      const s = document.createElement('script')
      s.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
      s.setAttribute('id', id);
      const q = document.getElementById(id)
      if (!q) {
        document.body.appendChild(s)
        window.googleTranslateElementInit = googleTranslateElementInit
      }
    }
    const removeScript = () => {
      const q = document.getElementById(id)
      if (q) q.remove()
      const w = document.getElementById('google_translate_element')
      if (w) w.innerHTML = ''
    }
    isFallback || addScript()
    events.on('routeChangeStart', removeScript)
    events.on('routeChangeComplete', addScript)
    return () => {
      events.off('routeChangeStart', removeScript)
      events.off('routeChangeComplete', addScript)
    }
  }, [])
  return (<div id="google_translate_element" />);
}
