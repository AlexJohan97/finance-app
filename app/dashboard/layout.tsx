import PageHeader from "@/components/page-header";

export default function Layout({ children }: any) {
  return (
    <>
      <PageHeader className="my-8" />
      {children}
      <footer>Footer</footer>
    </>
  );
}
