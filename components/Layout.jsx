import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";
import Cursor from "./shared/Cursor";
import ThemeSwitcher from "./shared/ThemeSwitcher";

export default function layout({ title, des, content, children, mainContent }) {
  return (
    <Cursor>
      <Head>
        <title>{title}</title>
        <meta name={content} content={des}></meta>
      </Head>
      <Nav/>
      <ThemeSwitcher />
      {children}
      <Footer />
    </Cursor>
  );
}
layout.defaultProps = {
  des: "page Not Found",
  title: "Page Not Found",
  content: "Page Not Found",
};
