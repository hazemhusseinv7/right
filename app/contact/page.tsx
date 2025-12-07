import ContactComponent from "./ContactComponent";

export default function Page() {
  return (
    <main>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-linear-to-t from-blue-100">
        <div className="w-full">
          <ContactComponent />
        </div>
      </div>
    </main>
  );
}
