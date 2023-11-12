import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => <>{children}</>;
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <Component.Layout>
        <Component {...pageProps} />
      </Component.Layout>
    </Layout>
  );
}
