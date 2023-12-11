import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="h-1 bg-gradient-to-r from-primary-color to-accent-color"></div>
      <Header />
      <Container>
        <main className="w-full my-20 flex flex-col gap-10">
          <Banner />
        </main>
      </Container>
    </>
  );
}
