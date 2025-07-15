import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "雾雨生电服务器",
  description: "一个充满创造与活力的 Minecraft 社区服务器",
};
