import "../styles/globals.css";
import ThemeWrapper from "../components/ThemeWrapper";

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-white">
        <ThemeWrapper>{children} </ThemeWrapper>
      </body>
    </html>
  );
};
export default RootLayout;
