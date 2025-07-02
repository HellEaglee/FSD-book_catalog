import { Footer, Header } from "@/widgets";

export default function Layout() {
  return (
    <>
      <main className="flex flex-col h-screen w-full items-center">
        <Header />
        <div></div>
        <Footer />
      </main>
    </>
  );
}
